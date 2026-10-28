<template>
  <!-- 全局布局：所有页面共享 -->
  <div class="wrap">

    <!-- 底部悬浮：全局线路切换条 + 下载按钮（所有页面均显示） -->
    <div class="global-bar">
      <span class="label">当前线路：<b :style="{ color: renderLine.color }">{{ renderLine.name }}</b></span>
      <button class="swap-btn" @click="openPicker">
        <span class="ico">⇄</span><span>选择线路</span>
      </button>
      <a class="dl-btn" href="https://dl.hz.37.com.cn/%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86H5.exe" download>
        <span class="ico">⬇</span><span>下载游戏</span>
      </a>
    </div>

    <!-- 路由出口：主页面 / 分组子页面 -->
    <router-view />

    <footer>共 {{ total }} 个账号 · 本地多文件，手机电脑均可打开</footer>

    <!-- 线路选择弹窗（全局） -->
    <transition name="fade">
      <div v-if="showPicker" class="picker-mask" @click.self="closePicker">
        <div class="picker-panel">
          <div class="picker-title">选择线路</div>
          <div class="picker-list">
            <button v-for="ln in lineList"
                    :key="ln.id"
                    class="picker-item"
                    :class="{ active: ln.id === store.lineId }"
                    :style="{ borderColor: ln.color }"
                    @click="selectLine(ln)">
              <span class="dot" :style="{ background: ln.color }"></span>
              <span class="ln-name">{{ ln.name }}</span>
              <span v-if="ln.id === store.lineId" class="ln-current">当前</span>
            </button>
          </div>
          <button class="picker-close" @click="closePicker">取消</button>
        </div>
      </div>
    </transition>

    <!-- 轻提示容器（全局） -->
    <div id="toast"></div>
  </div>
</template>

<script>
// 导入书签数据与全局共享状态
import DATA from "./data";
import { store, currentLine, setLine } from "./store";

export default {
  name: "App",

  data() {
    return {
      store,             // 全局响应式状态（模板中读取线路 id）
      showPicker: false, // 线路选择弹窗显隐
    };
  },

  computed: {
    // 当前线路对象（读取 store.lineId 以建立响应式依赖）
    renderLine() {
      return currentLine();
    },
    // 所有线路（供弹窗 v-for 使用）
    lineList() {
      return DATA.lines;
    },
    // 账号总数
    total() {
      let n = 0;
      DATA.groups.forEach((g) => { n += g.accounts.length; });
      return n;
    },
  },

  methods: {
    /** 打开线路选择弹窗 */
    openPicker() {
      this.showPicker = true;
    },

    /** 关闭线路选择弹窗 */
    closePicker() {
      this.showPicker = false;
    },

    /** 选定一条线路并全局应用 */
    selectLine(ln) {
      setLine(ln.id); // 更新全局状态并持久化
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
