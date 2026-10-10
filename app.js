// ============================================================
// 游戏书签页交互逻辑
// 功能：渲染账号卡片、多线路循环切换、一键切换全部，
//       并用 localStorage 记住线路选择。
// 依赖：data.js 中定义的 window.APP_DATA（由外部脚本先加载）
// ============================================================
(function () {
  "use strict";

  // 书签数据：包含 lines(线路数组) 与 groups(账号分组)
  const DATA = window.APP_DATA;

  // localStorage 键前缀：按「分组索引.账号名」记录当前线路 id
  const LS_PREFIX = "bm.line.";

  // 头像渐变配色（循环取用，让卡片头像颜色多样）
  const COLORS = [
    ["#6366f1", "#a855f7"], ["#0ea5e9", "#6366f1"], ["#f43f5e", "#f97316"],
    ["#10b981", "#14b8a6"], ["#f59e0b", "#ef4444"], ["#8b5cf6", "#ec4899"],
    ["#06b6d4", "#3b82f6"], ["#84cc16", "#22c55e"],
  ];

  /* ==================== 工具函数 ==================== */

  /** 按 id 查找线路；找不到则回退到第一条线路 */
  function lineById(id) {
    for (let i = 0; i < DATA.lines.length; i++) {
      if (DATA.lines[i].id === id) return DATA.lines[i];
    }
    return DATA.lines[0];
  }

  /** 按域名查找线路；找不到返回 null */
  function lineByHost(host) {
    for (let i = 0; i < DATA.lines.length; i++) {
      if (DATA.lines[i].host === host) return DATA.lines[i];
    }
    return null;
  }

  /** 从账号 url 的域名推断默认线路 id；匹配不到时回退到第一条线路 */
  function defaultLineId(acct) {
    try {
      const line = lineByHost(new URL(acct.url).host);
      return line ? line.id : DATA.lines[0].id;
    } catch (e) {
      return DATA.lines[0].id; // url 格式非法时兜底
    }
  }

  /** 读取某账号当前使用的线路 id（有缓存用缓存，否则根据 url 域名判断） */
  function currentLineId(gi, acct) {
    const key = LS_PREFIX + gi + "." + acct.name;
    const saved = localStorage.getItem(key);
    if (saved && lineById(saved)) return saved; // 缓存存在且线路有效
    return defaultLineId(acct);
  }

  /** 保存某账号的线路选择 */
  function saveLineId(gi, acct, id) {
    localStorage.setItem(LS_PREFIX + gi + "." + acct.name, id);
  }

  /** 计算某条线路的「下一条」线路 id（循环） */
  function nextLineId(id) {
    let idx = 0;
    for (let i = 0; i < DATA.lines.length; i++) {
      if (DATA.lines[i].id === id) { idx = i; break; }
    }
    return DATA.lines[(idx + 1) % DATA.lines.length].id;
  }

  /* ==================== 链接构建 ==================== */

  /** 把账号的完整登录链接切换到指定线路：仅替换域名部分，路径与参数保持不变 */
  function buildUrl(line, url) {
    try {
      const u = new URL(url);
      u.host = line.host; // 替换为目标线路域名
      return u.toString();
    } catch (e) {
      return url; // url 格式非法时原样返回
    }
  }

  /* ==================== 字符串转义 ==================== */

  /** HTML 转义，防止账号名里的特殊字符破坏页面结构 */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ==================== 渲染 ==================== */

  /** 渲染顶部线路图例（列出所有线路的色点与名称） */
  function renderLegend() {
    const el = document.getElementById("legend");
    if (!el) return;
    const parts = DATA.lines.map((l) =>
      '<span class="legend"><span class="dot" style="background:' + l.color + '"></span>' +
      esc(l.name) + "</span>"
    );
    el.innerHTML = parts.join('<span class="legend" style="opacity:.5">⇄</span>');
  }

  /** 渲染所有分组与账号卡片 */
  function render() {
    const root = document.getElementById("groups");
    let html = "";
    let total = 0;

    DATA.groups.forEach((g, gi) => {
      let cards = "";
      g.accounts.forEach((acct, ai) => {
        const line = lineById(currentLineId(gi, acct)); // 当前线路
        const c = COLORS[(gi * 7 + ai) % COLORS.length]; // 头像配色
        total++;
        cards +=
          '<a class="card" href="' + esc(buildUrl(line, acct.url)) + '" target="_blank" rel="noopener">' +
            '<div class="avatar" style="--c1:' + c[0] + ";--c2:" + c[1] + '">' +
              esc(acct.name.slice(0, 2)) + "</div>" +
            '<div class="name" title="' + esc(acct.name) + '">' + esc(acct.name) + "</div>" +
            '<span class="badge" style="color:' + line.color + ";border-color:" + line.color + '">' +
              esc(line.name) + " 线路</span>" +
          "</a>";
      });

      html +=
        '<section class="group">' +
          '<div class="group-title"><span class="bar"></span>' + esc(g.name) +
            '<span class="count">' + g.accounts.length + " 个账号</span></div>" +
          '<div class="grid">' + cards + "</div>" +
        "</section>";
    });

    root.innerHTML = html;
    document.getElementById("total").textContent = total;
  }

  /* ==================== Toast 提示 ==================== */

  let toastTimer = null;
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 1600);
  }

  /* ==================== 事件绑定 ==================== */

  // 一键切换：所有账号同时切到下一条线路
  document.getElementById("swapAll").addEventListener("click", function () {
    DATA.groups.forEach((g, gi) => {
      g.accounts.forEach((acct) => {
        saveLineId(gi, acct, nextLineId(currentLineId(gi, acct)));
      });
    });
    render();
    this.classList.toggle("spun"); // 按钮图标旋转动画反馈
    toast("已切换全部账号线路");
  });

  // 初始化渲染
  renderLegend();
  render();
})();