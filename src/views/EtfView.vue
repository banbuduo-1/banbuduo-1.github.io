<template>
  <!-- ETF 数据查询页：份额 / 历史申赎 / 跟踪指数 / 前十大持仓 -->
  <main class="etf-page">
    <!-- 查询输入区 -->
    <div class="etf-search">
      <input class="etf-input"
             v-model.trim="code"
             maxlength="6"
             inputmode="numeric"
             placeholder="输入 ETF 代码，如 510300"
             @keyup.enter="query" />
      <van-button class="etf-btn" round color="linear-gradient(90deg,#4f8cff,#2f6fe0)"
                  @click="query">查询</van-button>
    </div>
    <!-- 搜索记录：可点击再次查询，单条可删除 -->
    <div v-if="history.length" class="etf-history">
      <div class="etf-history-head">
        <span>搜索记录</span>
        <button class="etf-history-clear" @click="clearHistory">清空</button>
      </div>
      <div class="etf-history-list">
        <span class="etf-history-item" v-for="h in history" :key="h.code"
              @click="useHistory(h)">
          <b>{{ h.code }}</b>
          <em>{{ h.name }}</em>
          <i class="etf-h-del" @click.stop="removeHistory(h.code)">×</i>
        </span>
      </div>
    </div>
    <div v-else class="etf-sample">
      示例：510300 沪深300ETF · 510500 中证500ETF · 588000 科创50ETF · 159915 创业板ETF
    </div>

    <!-- 加载 / 错误 / 初始提示 -->
    <div v-if="loading" class="etf-tip-box">数据加载中…</div>
    <div v-else-if="error" class="etf-tip-box etf-error">{{ error }}</div>
    <div v-else-if="!profile" class="etf-tip-box">输入 ETF 代码后点击查询</div>

    <!-- 查询结果 -->
    <template v-else-if="profile">
      <!-- 概况卡片 -->
      <div class="etf-head">
        <div class="etf-name">
          {{ profile.name }}
          <span class="etf-code">{{ profile.code }}</span>
        </div>
        <div class="etf-price" :class="riseClass">
          <b>{{ priceText }}</b>
          <span>{{ changeText }}</span>
        </div>
        <div class="etf-meta">ETF 场内基金 · 数据来源：天天基金 / 东方财富</div>

        <div class="etf-stats">
          <div>
            <b>{{ latestShares }}</b>
            <span>总份额（亿份）</span>
          </div>
          <div>
            <b>{{ latestScale }}</b>
            <span>基金规模（亿元）</span>
          </div>
          <div>
            <b>{{ navText }}</b>
            <span>单位净值</span>
          </div>
        </div>
      </div>

      <!-- 数据分页 -->
      <van-tabs v-model="tab" class="etf-tabs" :animated="false"
                color="#4f8cff" title-active-color="#ffffff" title-inactive-color="#8ea0bd">
        <!-- 份额 -->
        <van-tab title="份额">
          <div v-if="!shareRows.length" class="etf-tip-box">暂无份额数据</div>
          <div v-else class="etf-table">
            <div class="etf-tr etf-th">
              <span>报告期</span><span>规模(亿元)</span><span>总份额(亿份)</span><span>份额变化</span>
            </div>
            <div class="etf-tr" v-for="r in shareRows" :key="'s' + r.period">
              <span>{{ r.period }}</span>
              <span>{{ r.scale }}</span>
              <span class="etf-strong">{{ r.shares }}</span>
              <span :class="r.shareDeltaClass">{{ r.shareDelta }}</span>
            </div>
          </div>
          <p class="etf-note">规模为报告期末基金净资产；份额变化 = 本期总份额 − 上期总份额（单位：亿份）。</p>
        </van-tab>

        <!-- 历史申赎 -->
        <van-tab title="历史申赎">
          <div v-if="!shareRows.length" class="etf-tip-box">暂无申赎数据</div>
          <div v-else class="etf-table">
            <div class="etf-tr etf-th">
              <span>报告期</span><span>期间申购</span><span>期间赎回</span><span>净申赎</span>
            </div>
            <div class="etf-tr" v-for="r in shareRows" :key="'c' + r.period">
              <span>{{ r.period }}</span>
              <span>{{ r.buy }}</span>
              <span>{{ r.sell }}</span>
              <span :class="r.netClass">{{ r.net }}</span>
            </div>
          </div>
          <p class="etf-note">净申赎 = 期间申购 − 期间赎回（单位：亿份），正值为净申购，负值为净赎回。</p>
        </van-tab>

        <!-- 跟踪指数 -->
        <van-tab title="指数">
          <div v-if="!indexInfo" class="etf-tip-box">
            暂未收录该 ETF 的跟踪指数信息，可前往基金档案查看。
          </div>
          <template v-else>
            <div class="etf-index-name">
              {{ indexInfo.name }}<span class="etf-code">{{ indexInfo.indexCode }}</span>
            </div>
            <div class="etf-kv">
              <div>
                <span>最新点位</span>
                <b :class="riseOf(indexInfo.change)">{{ num(indexInfo.price) }}</b>
              </div>
              <div>
                <span>涨跌幅</span>
                <b :class="riseOf(indexInfo.change)">{{ pct(indexInfo.change) }}</b>
              </div>
              <div v-if="extraIndex"><span>市盈率 PE(TTM)</span><b>{{ num(extraIndex.PETTM) }}</b></div>
              <div v-if="extraIndex"><span>市净率 PB</span><b>{{ num(extraIndex.PB) }}</b></div>
              <div v-if="extraIndex"><span>股息率</span><b>{{ pctNoSign(extraIndex.GXL) }}</b></div>
              <div v-if="extraIndex"><span>指数公司</span><b>{{ extraIndex.MAKERNAME || "--" }}</b></div>
              <div v-if="extraBasic"><span>跟踪误差</span><b>{{ pctNoSign(extraBasic.TRKERROR) }}</b></div>
              <div v-if="extraBasic"><span>业绩基准</span><b>{{ extraBasic.BENCH || "--" }}</b></div>
            </div>
            <p class="etf-note">{{ (extraIndex && extraIndex.REAPROFILE) || "指数简介暂无。" }}</p>
          </template>
          <van-button class="etf-link-btn" plain block @click="openFundPage">查看基金档案</van-button>
        </van-tab>

        <!-- 成份股（基金季报前十大持仓） -->
        <van-tab title="成份股">
          <div v-if="!stockRows.length" class="etf-tip-box">暂无持仓数据</div>
          <div v-else class="etf-table">
            <div class="etf-tr etf-th">
              <span>代码</span><span>名称</span><span>现价</span><span>涨跌幅</span>
            </div>
            <div class="etf-tr" v-for="s in stockRows" :key="s.code">
              <span>{{ s.code }}</span>
              <span>{{ s.name }}</span>
              <span>{{ s.price }}</span>
              <span :class="s.cls">{{ s.change }}</span>
            </div>
          </div>
          <p class="etf-note">
            展示为基金最新定期报告披露的前十大重仓股（指数 ETF 与其跟踪指数成份股高度重合）；
            指数完整成份股以上市指数公司公布名单为准。
          </p>
        </van-tab>
      </van-tabs>

      <p class="etf-source">数据来源：天天基金 / 东方财富公开数据，仅供参考，不构成投资建议。</p>
    </template>

    <!-- 交易所基金信息：深交所可内嵌，上交所禁止被嵌入 -->
    <div class="etf-exchange">
      <div class="etf-exchange-head">
        <span>交易所基金信息</span>
        <button class="etf-exchange-open" @click="openExchange">新窗口打开</button>
      </div>
      <div class="etf-exchange-tabs">
        <span :class="{ active: exTab === 'szse' }" @click="exTab = 'szse'">深交所</span>
        <span :class="{ active: exTab === 'sse' }" @click="exTab = 'sse'">上交所</span>
      </div>

      <!-- 深交所基金专区：允许被框架嵌入 -->
      <iframe v-if="exTab === 'szse'"
              class="etf-frame"
              src="https://fund.szse.cn/index.html"
              title="深交所基金信息"
              loading="lazy"
              referrerpolicy="no-referrer"></iframe>

      <!-- 上交所：官网 frame-ancestors 限制，只能用新窗口打开 -->
      <div v-else class="etf-frame-tip">
        <p>上交所官网设置了框架嵌入限制（frame-ancestors），页面内无法直接展示。</p>
        <van-button class="etf-link-btn" plain block @click="openSse">前往上交所基金页面</van-button>
      </div>
    </div>
  </main>
</template>

<script>
// 数据接口：公开 JSONP / 脚本接口
import {
  fetchFundProfile,
  fetchQuote,
  fetchIndexQuote,
  fetchFundExtra,
  fetchStockQuotes,
  isFundCode,
} from "../api/etf";

// 搜索记录本地存储键名
const HISTORY_KEY = "etf_search_history";
// 搜索记录最多保留条数
const HISTORY_MAX = 10;

export default {
  name: "EtfView",

  data() {
    return {
      code: "",           // 输入框代码（默认不预填、不自动查询）
      history: [],        // 搜索记录 [{code, name}]
      exTab: "szse",      // 交易所内嵌页签：szse 深交所 / sse 上交所
      loading: false,     // 加载状态
      error: "",          // 错误提示
      tab: 0,             // 当前分页
      profile: null,      // 基金档案数据
      quote: null,        // 场内实时行情
      indexInfo: null,    // 跟踪指数行情
      extraBasic: null,   // 增强信息（可选）
      extraIndex: null,   // 指数估值信息（可选）
      stocks: [],         // 前十大持仓行情
    };
  },

  computed: {
    /** 最新价格：优先场内价，其次单位净值 */
    priceText() {
      const p = this.quote && this.quote.f43;
      if (this.validNum(p)) return Number(p).toFixed(3);
      const nav = this.profile && this.profile.nav;
      return this.validNum(nav) ? Number(nav).toFixed(4) : "--";
    },

    /** 涨跌幅文本 */
    changeText() {
      const p = this.quote && this.quote.f170;
      if (!this.validNum(p)) return "";
      const v = Number(p);
      return (v > 0 ? "+" : "") + v.toFixed(2) + "%";
    },

    /** 涨跌配色类名 */
    riseClass() {
      return this.riseOf(this.quote && this.quote.f170);
    },

    /** 最新总份额（亿份） */
    latestShares() {
      const buy = this.profile && this.profile.buy;
      const arr = buy && buy.series && buy.series[2] && buy.series[2].data;
      if (!arr || !arr.length) return "--";
      return Number(arr[arr.length - 1]).toFixed(2);
    },

    /** 最新净资产规模（亿元）：series 为 [{y, mom}] 逐期排列 */
    latestScale() {
      const scale = this.profile && this.profile.scale;
      const arr = scale && scale.series;
      if (!arr || !arr.length) return "--";
      const last = arr[arr.length - 1];
      return this.validNum(last && last.y) ? Number(last.y).toFixed(2) : "--";
    },

    /** 单位净值 */
    navText() {
      const nav = this.profile && this.profile.nav;
      return this.validNum(nav) ? Number(nav).toFixed(4) : "--";
    },

    /**
     * 份额 / 申赎表格行
     * 数据结构：categories 为报告期，series[0] 期间申购、[1] 期间赎回、[2] 总份额
     */
    shareRows() {
      const buy = this.profile && this.profile.buy;
      if (!buy || !buy.categories || !buy.series) return [];

      // 先把规模数据按报告期建索引，便于与份额表对齐
      const scale = this.profile && this.profile.scale;
      const scaleMap = {};
      if (scale && scale.categories && scale.series) {
        scale.categories.forEach((p, i) => {
          const item = scale.series[i] || {};
          scaleMap[p] = Number(item.y);
        });
      }

      const buyArr = buy.series[0].data;
      const sellArr = buy.series[1].data;
      const shareArr = buy.series[2].data;

      return buy.categories.map((period, i) => {
        const buyVal = Number(buyArr[i]);
        const sellVal = Number(sellArr[i]);
        const net = buyVal - sellVal;
        const scaleVal = scaleMap[period];
        // 份额变化：与上一报告期总份额相减
        const delta = i > 0 ? Number(shareArr[i]) - Number(shareArr[i - 1]) : null;
        return {
          period,
          buy: buyVal.toFixed(2),
          sell: sellVal.toFixed(2),
          shares: Number(shareArr[i]).toFixed(2),
          scale: this.validNum(scaleVal) ? scaleVal.toFixed(2) : "--",
          shareDelta: delta === null ? "--" : (delta > 0 ? "+" : "") + delta.toFixed(2),
          shareDeltaClass: delta === null ? "" : delta > 0 ? "up" : delta < 0 ? "down" : "",
          net: (net > 0 ? "+" : "") + net.toFixed(2),
          netClass: net > 0 ? "up" : net < 0 ? "down" : "",
        };
      });
    },

    /** 前十大持仓行情行 */
    stockRows() {
      return this.stocks.map((s) => {
        const price = this.validNum(s.f2) ? Number(s.f2).toFixed(2) : "--";
        const chg = this.validNum(s.f3) ? Number(s.f3) : 0;
        return {
          code: s.f12,
          name: s.f14,
          price,
          change: (chg > 0 ? "+" : "") + chg.toFixed(2) + "%",
          cls: chg > 0 ? "up" : chg < 0 ? "down" : "",
        };
      });
    },
  },

  mounted() {
    // 本页为独立深色页面，给 body 打标记以统一底色
    document.body.classList.add("etf-body");
    this.loadHistory();
  },

  beforeDestroy() {
    // 离开页面时移除标记，恢复站点浅色主题
    document.body.classList.remove("etf-body");
  },

  methods: {
    /** 从本地存储读取搜索记录 */
    loadHistory() {
      try {
        const raw = localStorage.getItem(HISTORY_KEY);
        const list = raw ? JSON.parse(raw) : [];
        // 只保留结构完整的记录，防止脏数据渲染报错
        this.history = Array.isArray(list)
          ? list.filter((i) => i && i.code).slice(0, HISTORY_MAX)
          : [];
      } catch (e) {
        this.history = []; // 解析失败时按空记录处理
      }
    },

    /** 写入搜索记录：同代码去重并置顶，超出上限截断 */
    saveHistory(code, name) {
      const list = this.history.filter((i) => i.code !== code);
      list.unshift({ code, name: name || code });
      this.history = list.slice(0, HISTORY_MAX);
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(this.history));
      } catch (e) {
        /* 隐私模式等场景写入失败时忽略 */
      }
    },

    /** 删除单条搜索记录 */
    removeHistory(code) {
      this.history = this.history.filter((i) => i.code !== code);
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(this.history));
      } catch (e) {}
    },

    /** 清空全部搜索记录 */
    clearHistory() {
      this.history = [];
      try {
        localStorage.removeItem(HISTORY_KEY);
      } catch (e) {}
    },

    /** 点击搜索记录：回填代码并查询 */
    useHistory(item) {
      this.code = item.code;
      this.query();
    },

    /** 执行查询：先取基金档案，再并行补充行情类数据 */
    async query() {
      const code = this.code;
      if (!isFundCode(code)) {
        this.error = "请输入 6 位数字基金代码";
        this.profile = null;
        return;
      }

      this.loading = true;
      this.error = "";
      this.profile = null;
      this.quote = null;
      this.indexInfo = null;
      this.extraBasic = null;
      this.extraIndex = null;
      this.stocks = [];

      try {
        // 基金档案为必需数据，失败则终止
        this.profile = await fetchFundProfile(code);
        // 基础信息取到后再记录搜索历史，避免脏代码被记入
        this.saveHistory(code, this.profile.name);

        // 行情、指数、增强信息并行获取，单项失败不影响整体
        const tasks = [
          fetchQuote(code).then((q) => { this.quote = q; }).catch(() => {}),
          fetchIndexQuote(code).then((i) => { this.indexInfo = i; }).catch(() => {}),
          fetchFundExtra(code).then((e) => {
            if (!e) return;
            this.extraBasic = e.basic;
            this.extraIndex = e.index;
            // 增强接口带指数名称时，补齐指数标题
            if (!this.indexInfo && e.index) {
              this.indexInfo = {
                indexCode: e.index.INDEXCODE,
                name: e.index.INDEXNAME,
                price: null,
                change: null,
              };
            }
          }).catch(() => {}),
        ];
        await Promise.all(tasks);

        // 有持仓代码时再批量取持仓股行情
        if (this.profile.stockCodes.length) {
          try {
            this.stocks = await fetchStockQuotes(this.profile.stockCodes.slice(0, 10));
          } catch (e) {
            this.stocks = [];
          }
        }
      } catch (e) {
        this.error = e.message || "查询失败，请稍后重试";
      } finally {
        this.loading = false;
      }
    },

    /** 数值是否有效（排除 "--"、空值、NaN） */
    validNum(v) {
      return v !== null && v !== undefined && v !== "" && v !== "--" && !isNaN(Number(v));
    },

    /** 数字展示（保留两位） */
    num(v) {
      return this.validNum(v) ? Number(v).toFixed(2) : "--";
    },

    /** 百分比展示 */
    pct(v) {
      if (!this.validNum(v)) return "--";
      const n = Number(v);
      return (n > 0 ? "+" : "") + n.toFixed(2) + "%";
    },

    /** 百分比展示（不带正号，用于股息率 / 跟踪误差） */
    pctNoSign(v) {
      return this.validNum(v) ? Number(v).toFixed(2) + "%" : "--";
    },

    /** 按涨跌返回颜色类名 */
    riseOf(v) {
      if (!this.validNum(v)) return "";
      const n = Number(v);
      return n > 0 ? "up" : n < 0 ? "down" : "";
    },

    /** 打开天天基金档案页查看完整信息 */
    openFundPage() {
      const code = this.profile && this.profile.code;
      if (!code) return;
      window.open("https://fundf10.eastmoney.com/jbgk_" + code + ".html", "_blank", "noopener");
    },

    /** 新窗口打开当前选中的交易所基金页面 */
    openExchange() {
      const url = this.exTab === "szse"
        ? "https://fund.szse.cn/index.html"
        : "https://www.sse.com.cn/assortment/fund/etf/";
      window.open(url, "_blank", "noopener");
    },

    /** 打开上交所 ETF 页面（受嵌入限制，只能新窗口访问） */
    openSse() {
      window.open("https://www.sse.com.cn/assortment/fund/etf/", "_blank", "noopener");
    },
  },
};
</script>
