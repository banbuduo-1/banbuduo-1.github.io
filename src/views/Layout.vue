<template>
  <!-- 布局页：全局悬浮栏 + 子页面出口 + 线路弹窗 -->
  <div class="wrap">

    <!-- 底部悬浮：全局线路切换条 + 下载按钮（所有页面均显示） -->
    <div class="global-bar">
      <span class="label">当前线路：<b :style="{ color: renderLine.color }">{{ renderLine.name }}</b></span>
      <!-- 线路切换：Vant 按钮，樱粉→淡紫渐变（与樱花主题呼应） -->
      <van-button class="swap-btn" round
                  color="linear-gradient(90deg,#f58fb6,#e0699a 55%,#b98cd8)"
                  @click="openPicker">
        <van-icon name="exchange" class="btn-ico" />选择线路
      </van-button>
      <!-- 下载游戏：跨域下载由 JS 触发，保证 Vant 按钮样式统一 -->
      <van-button class="dl-btn" round plain @click="downloadGame">
        <van-icon name="down" class="btn-ico" />下载游戏
      </van-button>
    </div>

    <!-- 路由出口：主页面 / 分组子页面 -->
    <router-view />

    <footer>共 {{ total }} 个账号 · 本地多文件，手机电脑均可打开</footer>

    <!-- 线路选择弹窗（Vant 底部弹出层） -->
    <van-popup v-model="showPicker" position="bottom" round
               safe-area-inset-bottom class="picker-popup">
      <div class="picker-title">选择线路</div>
      <van-cell-group :border="false">
        <van-cell v-for="ln in lineList" :key="ln.id"
                  :title="ln.name" clickable
                  @click="selectLine(ln)">
          <!-- 左侧：线路颜色圆点 -->
          <template #icon>
            <span class="dot" :style="{ background: ln.color }"></span>
          </template>
          <!-- 右侧：当前线路标记（用主题樱粉色，替换 Vant 默认蓝） -->
          <template #right-icon>
            <van-tag v-if="ln.id === store.lineId" color="#e0699a" round>当前</van-tag>
            <van-icon v-else name="arrow" class="ln-arrow" />
          </template>
        </van-cell>
      </van-cell-group>
      <div class="picker-footer">
        <van-button block plain @click="closePicker">取消</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
// 导入书签数据与全局共享状态
import DATA from "../data";
import { store, currentLine, setLine } from "../store";

// 游戏安装包下载地址
const GAME_DL_URL = "https://dl.hz.37.com.cn/%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86H5.exe";

export default {
  name: "Layout",

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
    // 所有线路（供弹窗列表使用）
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
      // 使用 Vant Toast 做轻提示
      this.$toast({
        message: "已切换到 " + ln.name + " 线路",
        position: "bottom",
        duration: 1500,
      });
    },

    /** 触发游戏安装包下载（动态创建 a 标签，兼容跨域下载） */
    downloadGame() {
      const a = document.createElement("a");
      a.href = GAME_DL_URL;
      a.download = "斗罗大陆H5.exe";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
};
</script>
