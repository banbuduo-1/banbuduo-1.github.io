// ============================================================
// ETF 公开数据接口封装
// 说明：纯静态页面无法直接跨域请求 JSON 接口，故统一使用 JSONP /
//       script 方式获取公开数据（无需后端代理）。
//       主力数据源：
//         1) 天天基金 pingzhongdata 脚本 —— 名称、净值、规模、申购赎回、持仓
//         2) 东方财富 push2 行情接口 —— ETF 与指数实时行情、持仓股行情
//       可选增强：天天基金移动接口（部分网络环境会被风控，失败即降级）
// ============================================================

// 脚本请求默认超时（毫秒）
const TIMEOUT = 15000;

// 常用 ETF 与跟踪指数的静态映射（未收录的代码走降级提示）
const INDEX_MAP = {
  "510300": { secid: "1.000300", name: "沪深300" },
  "510500": { secid: "1.000905", name: "中证500" },
  "510050": { secid: "1.000016", name: "上证50" },
  "510880": { secid: "1.000015", name: "上证红利" },
  "512100": { secid: "1.000852", name: "中证1000" },
  "588000": { secid: "1.000688", name: "科创50" },
  "159915": { secid: "0.399006", name: "创业板指" },
  "159949": { secid: "0.399673", name: "创业板50" },
  "512880": { secid: "0.399975", name: "证券公司" },
  "159901": { secid: "0.399330", name: "深证100" },
};

/**
 * 动态加载外部 script
 * 作用：借 script 标签绕过浏览器跨域限制
 * @param {string} src 脚本地址
 * @param {number} timeout 超时时间
 * @returns {Promise<void>}
 */
function loadScript(src, timeout = TIMEOUT) {
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = src;
    el.async = true;
    el.charset = "utf-8";

    let done = false; // 防止 onload / onerror / 超时重复触发

    // 清理脚本节点与定时器，避免页面脚本越堆越多
    const clean = () => {
      clearTimeout(timer);
      if (el.parentNode) el.parentNode.removeChild(el);
    };

    // 超时兜底：接口长时间无响应时给出统一错误
    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      clean();
      reject(new Error("请求超时，请检查网络后重试"));
    }, timeout);

    el.onload = () => {
      if (done) return;
      done = true;
      clean();
      resolve();
    };

    el.onerror = () => {
      if (done) return;
      done = true;
      clean();
      reject(new Error("数据加载失败，请确认代码是否正确"));
    };

    document.head.appendChild(el);
  });
}

/**
 * JSONP 请求：把回调挂到 window，脚本返回后立即取值
 * @param {string} url 接口地址（不要自带回调参数）
 * @param {string} cbParam 回调参数名
 * @param {number} timeout 超时时间
 * @returns {Promise<any>}
 */
function jsonp(url, cbParam, timeout = TIMEOUT) {
  return new Promise((resolve, reject) => {
    const name = "__etfCb" + Date.now() + Math.floor(Math.random() * 1e6);

    // 接口返回时通过全局函数拿到数据，并立即清理
    window[name] = (data) => {
      delete window[name];
      resolve(data);
    };

    const sep = url.indexOf("?") > -1 ? "&" : "?";
    loadScript(url + sep + cbParam + "=" + name, timeout).catch((err) => {
      delete window[name];
      reject(err);
    });
  });
}

/**
 * 推断证券所属市场号
 * 规则：ETF 代码 5 开头为沪市（1），其余按深市（0）
 * @param {string} code 证券代码
 * @returns {string}
 */
function marketOf(code) {
  return code.charAt(0) === "5" ? "1" : "0";
}

/**
 * 读取基金档案脚本（名称 / 净值 / 规模 / 申赎 / 持仓）
 * 说明：该脚本向 window 写入全局变量，读取前先清空，避免串基金
 * @param {string} code ETF 代码
 * @returns {Promise<Object>} 汇总后的基金数据
 */
export async function fetchFundProfile(code) {
  // 清空上一次查询遗留的全局变量，防止数据串号
  [
    "fS_name", "Data_netWorthTrend", "Data_fluctuationScale",
    "Data_buySedemption", "stockCodesNew",
  ].forEach((k) => {
    try { delete window[k]; } catch (e) { window[k] = undefined; }
  });

  await loadScript("https://fund.eastmoney.com/pingzhongdata/" + code + ".js?v=" + Date.now());

  const navTrend = window.Data_netWorthTrend || [];      // 单位净值序列
  const scale = window.Data_fluctuationScale || null;    // 季度净资产规模
  const buy = window.Data_buySedemption || null;         // 期间申购 / 赎回 / 总份额
  const stockCodes = window.stockCodesNew || [];         // 前十大持仓

  // 脚本存在但关键数据全无时，视为代码无效
  if (!window.fS_name && !navTrend.length) {
    throw new Error("未找到该基金，请确认代码");
  }

  return {
    code,
    name: window.fS_name || code,
    navTrend,
    scale,
    buy,
    stockCodes,
    nav: navTrend.length ? Number(navTrend[navTrend.length - 1].y) : null,
  };
}

/**
 * 获取场内实时行情
 * @param {string} code ETF 代码
 * @returns {Promise<Object|null>}
 */
export async function fetchQuote(code) {
  const url =
    "https://push2.eastmoney.com/api/qt/stock/get?secid=" +
    marketOf(code) + "." + code +
    "&fields=f43,f46,f47,f48,f60,f168,f169,f170&fltt=2&invt=2";
  const res = await jsonp(url, "cb");
  return (res && res.data) || null;
}

/**
 * 查询跟踪指数行情
 * @param {string} code ETF 代码
 * @returns {Promise<Object|null>} { code, name, price, change }
 */
export async function fetchIndexQuote(code) {
  const item = INDEX_MAP[code];
  if (!item) return null;

  const url =
    "https://push2.eastmoney.com/api/qt/stock/get?secid=" + item.secid +
    "&fields=f43,f58,f170&fltt=2&invt=2";
  const res = await jsonp(url, "cb");
  const data = res && res.data;
  if (!data) return null;

  return {
    indexCode: item.secid.split(".")[1],
    name: data.f58 || item.name,
    price: data.f43,
    change: data.f170,
  };
}

/**
 * 可选增强：天天基金移动接口的指数估值数据
 * 说明：部分网络环境会被风控拦截，失败时静默降级，不影响主流程
 * @param {string} code ETF 代码
 * @returns {Promise<{basic: Object, index: Object}|null>}
 */
export async function fetchFundExtra(code) {
  try {
    const url =
      "https://fundmobapi.eastmoney.com/FundMNewApi/FundMNNBasicInformation" +
      "?FCODE=" + encodeURIComponent(code) +
      "&deviceid=etf&plat=Android&product=EFund&version=6.2.8";
    const res = await jsonp(url, "callback", 6000);
    if (!res || !res.Datas) return null;
    return {
      basic: res.Datas,
      index: (res.Expansion && res.Expansion.INDEXINFO) || null,
    };
  } catch (e) {
    return null; // 风控 / 超时都按无数据处理
  }
}

/**
 * 批量获取股票现价与涨跌幅（用于成份股列表）
 * @param {string[]} secids 如 ["1.600519", "0.000333"]
 * @returns {Promise<Array>}
 */
export async function fetchStockQuotes(secids) {
  if (!secids || !secids.length) return [];

  const url =
    "https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&invt=2&secids=" +
    secids.join(",") + "&fields=f2,f3,f12,f14";
  const res = await jsonp(url, "cb");
  return (res && res.data && res.data.diff) || [];
}

/**
 * 是否为 6 位数字基金代码
 * @param {string} code
 * @returns {boolean}
 */
export function isFundCode(code) {
  return /^\d{6}$/.test(code);
}
