<template>
  <!-- 樱花飘落层：固定全屏，pointer-events: none 不拦截交互 -->
  <div ref="layer" class="sakura-layer">
    <!-- 每片花瓣由一个 div 承载，样式由 JS 随机生成 -->
    <div v-for="(p, i) in petals" :key="i" class="sakura" :style="p.style"></div>
  </div>
</template>

<script>
// 花瓣图形：内联 SVG（带渐变），编码后作为 background-image，免外部图片依赖
// 注意：此处 # 必须保持原字符，由 encodeURIComponent 统一编码，否则渐变引用会失效
const PETAL_SVG = [
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>",
  "<defs><linearGradient id='g' x1='0' y1='1' x2='0' y2='0'>",
  "<stop offset='0' stop-color='#f4789f'/>",
  "<stop offset='1' stop-color='#ffe6f1'/>",
  "</linearGradient></defs>",
  "<path d='M16 31C6 24 2 15 6 8 9 3 14 2 16 6c2-4 7-3 10 2 4 7 0 16-10 23z' fill='url(#g)'/>",
  "</svg>",
].join("");

// 提前编码，避免每个花瓣重复计算
const PETAL_IMG = 'url("data:image/svg+xml,' + encodeURIComponent(PETAL_SVG) + '")';

export default {
  name: "SakuraBackground",

  data() {
    return {
      petals: [],      // 花瓣配置（含内联样式）
      resizeTimer: 0,  // 窗口尺寸变化防抖句柄
    };
  },

  mounted() {
    // 把花瓣图形写入 CSS 变量，供 .sakura 的 background-image 使用
    this.$refs.layer.style.setProperty("--petal-img", PETAL_IMG);

    // 生成花瓣并铺满整条飘落轨迹
    this.build();
    // 窗口变化时重新计算数量与尺寸（防抖 300ms）
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    // 清理监听与定时器，避免内存泄漏
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    /** 窗口尺寸变化：防抖后重建花瓣 */
    onResize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(this.build, 300);
    },

    /** 根据屏幕宽度生成一批随机花瓣 */
    build() {
      // 花瓣数量随屏宽自适应，小屏更少以保证流畅
      const count = Math.min(45, Math.max(12, Math.round(window.innerWidth / 34)));
      const list = [];

      for (let i = 0; i < count; i++) {
        const size = 10 + Math.random() * 14;             // 花瓣尺寸 10~24px
        const duration = 9 + Math.random() * 10;          // 飘落周期 9~19s
        // 负延迟让花瓣一开始就散布在整条轨迹上，避免同时从顶部落下
        const delay = -Math.random() * duration;
        const sway = (40 + Math.random() * 140) * (Math.random() < 0.5 ? -1 : 1); // 左右摆动幅度
        const opacity = 0.45 + Math.random() * 0.5;       // 透明度
        const hue = (Math.random() - 0.5) * 40;           // 色相偏移，营造深浅差异
        const blur = Math.random() * 0.8;                 // 轻微虚化，模拟景深

        list.push({
          style: {
            left: Math.random() * 100 + "%",              // 水平初始位置
            width: size + "px",
            height: size + "px",
            animationDuration: duration + "s",
            animationDelay: delay + "s",
            "--sway": sway + "px",                        // 关键帧中引用：横向摆动幅度
            "--op": opacity,                              // 关键帧中引用：显示透明度
            filter: "hue-rotate(" + hue + "deg) blur(" + blur + "px)",
          },
        });
      }

      this.petals = list;
    },
  },
};
</script>
