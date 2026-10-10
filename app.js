// ============================================================
// 游戏书签页交互逻辑
// 功能：渲染账号卡片、多线路循环切换、一键切换全部、
//       复制登录链接，并用 localStorage 记住每个账号的线路选择。
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

  /** 读取某账号当前使用的线路 id（有缓存用缓存，否则用默认线路） */
  function currentLineId(gi, acct) {
    const key = LS_PREFIX + gi + "." + acct.name;
    const saved = localStorage.getItem(key);
    if (saved && lineById(saved)) return saved; // 缓存存在且线路有效
    return lineById(acct.defaultLine) ? acct.defaultLine : DATA.lines[0].id;
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

  /** 根据线路域名 + 账号登录参数拼出完整登录链接 */
  function buildUrl(line, query) {
    return "https://" + line.host + "/login.php?" + query;
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
          '<a class="card" href="' + esc(buildUrl(line, acct.query)) + '" target="_blank" rel="noopener">' +
            '<div class="avatar" style="--c1:' + c[0] + ";--c2:" + c[1] + '">' +
              esc(acct.name.slice(0, 2)) + "</div>" +
            '<div class="name" title="' + esc(acct.name) + '">' + esc(acct.name) + "</div>" +
            '<span class="badge" style="color:' + line.color + ";border-color:" + line.color + '">' +
              esc(line.name) + " 线路</span>" +
            '<div class="ops">' +
              '<button class="op swap" data-gi="' + gi + '" data-ai="' + ai + '" title="切换此账号线路">⇄ 切换</button>' +
              '<button class="op copy" data-gi="' + gi + '" data-ai="' + ai + '" title="复制登录链接">⧉ 复制</button>' +
            "</div>" +
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

  /* ==================== 复制到剪贴板 ==================== */

  /** 复制文本，优先使用剪贴板 API，失败则降级 */
  function copyText(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => toast("链接已复制"),
        () => fallbackCopy(text)
      );
    } else {
      fallbackCopy(text);
    }
  }

  /** 剪贴板 API 不可用时的降级复制方案 */
  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      toast("链接已复制");
    } catch (e) {
      toast("复制失败，请长按链接复制");
    }
    document.body.removeChild(ta);
  }

  /* ==================== 事件绑定 ==================== */

  // 事件委托：处理卡片内「切换 / 复制」按钮点击（阻止触发卡片跳转）
  document.getElementById("groups").addEventListener("click", (e) => {
    const swapBtn = e.target.closest(".op.swap");
    const copyBtn = e.target.closest(".op.copy");
    if (!swapBtn && !copyBtn) return; // 点击卡片其他区域 => 正常打开链接
    e.preventDefault();
    e.stopPropagation();

    const gi = +(swapBtn ? swapBtn.getAttribute("data-gi") : copyBtn.getAttribute("data-gi"));
    const ai = +(swapBtn ? swapBtn.getAttribute("data-ai") : copyBtn.getAttribute("data-ai"));
    const acct = DATA.groups[gi].accounts[ai];

    if (swapBtn) {
      // 单账号切换到下一条线路（循环）
      const nextId = nextLineId(currentLineId(gi, acct));
      saveLineId(gi, acct, nextId);
      render();
      toast("「" + acct.name + "」已切到 " + lineById(nextId).name + " 线路");
    } else {
      // 复制当前线路的登录链接
      copyText(buildUrl(lineById(currentLineId(gi, acct)), acct.query));
    }
  });

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