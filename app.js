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

  // localStorage 键：全局线路 id（所有账号共用同一条线路）
  const LS_KEY = "bm.line";

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

  /** 从账号 url 域名推断默认线路 id（用于首次打开时的兜底） */
  function defaultLineId(acct) {
    try {
      const line = lineByHost(new URL(acct.url).host);
      return line ? line.id : DATA.lines[0].id;
    } catch (e) {
      return DATA.lines[0].id;
    }
  }

  /** 获取当前全局线路 id */
  function getGlobalLineId() {
    const saved = localStorage.getItem(LS_KEY);
    if (saved && lineById(saved)) return saved; // 缓存存在且线路有效
    // 首次打开：取第一个账号的默认线路
    const first = DATA.groups[0] && DATA.groups[0].accounts[0];
    return first ? defaultLineId(first) : DATA.lines[0].id;
  }

  /** 保存全局线路 id */
  function saveGlobalLineId(id) {
    localStorage.setItem(LS_KEY, id);
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

  /** 渲染所有分组与账号卡片（共用全局线路） */
  function render() {
    const root = document.getElementById("groups");
    const line = lineById(getGlobalLineId()); // 所有账号共用全局线路
    let html = "";
    let total = 0;

    DATA.groups.forEach((g) => {
      let cards = "";
      g.accounts.forEach((acct) => {
        total++;
        cards +=
          '<a class="card" href="' + esc(buildUrl(line, acct.url)) + '" target="_blank" rel="noopener">' +
            '<div class="name" title="' + esc(acct.name) + '">' + esc(acct.name) + "</div>" +
          "</a>";
      });

      html +=
        '<section class="group">' +
          '<div class="group-title"><span class="bar"></span>' + esc(g.name) +
            '<span class="count">' + g.accounts.length + " 个账号</span>" +
            '<button class="open-group" type="button">全部打开</button>' +
          "</div>" +
          '<div class="grid">' + cards + "</div>" +
        "</section>";
    });

    root.innerHTML = html;
    document.getElementById("total").textContent = total;

    // 更新底部悬浮条里的当前线路名和颜色
    const cur = document.getElementById("curLine");
    if (cur) {
      cur.textContent = line.name;
      cur.style.color = line.color;
    }
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

  // 一键切换：全局线路切到下一条，所有账号一起生效
  document.getElementById("swapAll").addEventListener("click", function () {
    const next = nextLineId(getGlobalLineId());
    saveGlobalLineId(next);
    render();
    this.classList.toggle("spun"); // 按钮图标旋转动画反馈
    toast("已切换到 " + lineById(next).name + " 线路");
  });

  // 事件委托：每个分组标题的「全部打开」按钮，循环打开该分组下所有账号
  document.getElementById("groups").addEventListener("click", function (e) {
    const btn = e.target.closest(".open-group");
    if (!btn) return;
    // 找到该按钮所在的 section，再取里面所有卡片的链接
    const section = btn.closest(".group");
    const cards = section.querySelectorAll(".card[href]");
    if (!cards.length) return;
    // 逐个延迟打开：让每个 window.open 仍在用户手势作用域内，避免弹窗拦截
    cards.forEach((c, i) => {
      setTimeout(() => {
        window.open(c.href, "_blank", "noopener");
      }, i * 180);
    });
    toast("正在打开 " + cards.length + " 个页面…");
  });

  // 初始化渲染
  render();
})();