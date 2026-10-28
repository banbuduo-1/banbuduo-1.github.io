<template>
  <!-- Vue 应用根节点 -->
  <div class="wrap">

    <!-- 底部悬浮：全局线路切换条 + 下载按钮 -->
    <div class="global-bar">
      <span class="label">当前线路：<b :style="{ color: renderLine.color }">{{ renderLine.name }}</b></span>
      <button class="swap-btn" @click="openPicker">
        <span class="ico">⇄</span><span>选择线路</span>
      </button>
      <a class="dl-btn" href="https://dl.hz.37.com.cn/%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86H5.exe" download>
        <span class="ico">⬇</span><span>下载游戏</span>
      </a>
    </div>

    <!-- 分组与卡片列表 -->
    <main>
      <section v-for="(g, gi) in groups" :key="gi" class="group">
        <div class="group-title">
          <span class="bar"></span>{{ g.name }}
          <span class="count">{{ g.accounts.length }} 个账号</span>
        </div>
        <div class="grid">
          <a v-for="(acct, ai) in g.accounts" :key="gi + '-' + ai"
             class="card"
             :href="buildUrl(acct.url)"
             target="_blank" rel="noopener">
            <div class="name" :title="acct.name">{{ acct.name }}</div>
          </a>
        </div>
      </section>
    </main>

    <footer>共 {{ total }} 个账号 · 本地多文件，手机电脑均可打开</footer>

    <!-- 线路选择弹窗（Vue 控制显示/隐藏） -->
    <transition name="fade">
      <div v-if="showPicker" class="picker-mask" @click.self="closePicker">
        <div class="picker-panel">
          <div class="picker-title">选择线路</div>
          <div class="picker-list">
            <button v-for="ln in lineList"
                    :key="ln.id"
                    class="picker-item"
                    :class="{ active: ln.id === lineId }"
                    :style="{ borderColor: ln.color }"
                    @click="selectLine(ln)">
              <span class="dot" :style="{ background: ln.color }"></span>
              <span class="ln-name">{{ ln.name }}</span>
              <span v-if="ln.id === lineId" class="ln-current">当前</span>
            </button>
          </div>
          <button class="picker-close" @click="closePicker">取消</button>
        </div>
      </div>
    </transition>

    <!-- 轻提示容器 -->
    <div id="toast"></div>
  </div>
</template>

<script>
// 导入书签数据（线路与账号配置）
import DATA from "./data";

// localStorage 键：全局线路 id（所有账号共用同一条线路）
const LS_KEY = "bm.line";

/** 按 id 查找线路；找不到则回退到第一条 */
function lineById(id) {
  if (!id) return DATA.lines[0];
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

/** 从账号 url 域名推断线路 id（首次打开兜底） */
function defaultLineId(acct) {
  try {
    const u = new URL(acct.url);
    const line = lineByHost(u.host);
    return line ? line.id : DATA.lines[0].id;
  } catch (e) {
    return DATA.lines[0].id;
  }
}

/** 安全读取 localStorage（异常时返回 null） */
function lsGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

/** 安全写入 localStorage */
function lsSet(key, val) {
  try { localStorage.setItem(key, val); } catch (e) { /* 忽略 */ }
}

// 初始化线路 id：优先本地缓存，否则按第一个账号的域名推断
const saved = lsGet(LS_KEY);
const first = DATA.groups[0] && DATA.groups[0].accounts[0];
const initialLineId = saved && lineById(saved).id === saved
  ? saved
  : (first ? defaultLineId(first) : DATA.lines[0].id);

export default {
  name: "App",

  data() {
    return {
      lineId: initialLineId, // 当前全局线路 id
      showPicker: false,     // 线路选择弹窗显隐
    };
  },

  computed: {
    // 当前线路对象（含 id / name / host / color）
    renderLine() {
      return lineById(this.lineId);
    },
    // 所有线路（供弹窗 v-for 使用）
    lineList() {
      return DATA.lines;
    },
    // 分组列表透传给模板
    groups() {
      return DATA.groups;
    },
    // 账号总数
    total() {
      let n = 0;
      DATA.groups.forEach((g) => { n += g.accounts.length; });
      return n;
    },
  },

  watch: {
    // 线路变化时持久化
    lineId(id) {
      lsSet(LS_KEY, id);
    },
  },

  methods: {
    /** 把账号 url 的域名和入口路径都替换成当前线路，查询参数原样保留 */
    buildUrl(url) {
      try {
        const u = new URL(url);
        u.host = this.renderLine.host;
        u.pathname = this.renderLine.path || "/"; // 兜底：path 没配就用根路径
        return u.toString();
      } catch (e) {
        return url;
      }
    },

    /** 打开线路选择弹窗 */
    openPicker() {
      this.showPicker = true;
    },

    /** 关闭线路选择弹窗 */
    closePicker() {
      this.showPicker = false;
    },

    /** 选定一条线路并应用 */
    selectLine(ln) {
      this.lineId = ln.id;
      this.showPicker = false;
      this.toast("已切换到 " + ln.name + " 线路");
    },

    /** 轻提示 */
    toast(msg) {
      const t = document.getElementById("toast");
      if (!t) return;
      t.textContent = msg;
      t.classList.add("show");
      clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => {
        t.classList.remove("show");
      }, 1600);
    },
  },
};
</script>
