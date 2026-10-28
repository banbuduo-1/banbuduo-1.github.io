<template>
  <!-- 樱花飘落层：固定全屏，pointer-events: none 不拦截交互 -->
  <div ref="layer" class="sakura-layer">
    <!-- 每片花瓣由一个 div 承载；位置/旋转由 JS 每帧写入 transform -->
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

// ===== 物理参数（集中放置，便于调整聚拢手感） =====
const R_NEAR = 190;          // 强吸引半径：指针附近的快速聚拢区
const R_FAR = 460;           // 弱吸引半径：远处花瓣缓慢汇入
const F_NEAR = 3.2;          // 强吸引力度
const F_FAR = 0.85;          // 弱吸引力力度
const SWIRL_RATIO = 1.15;    // 切向旋涡相对向心力的比例
const KEEP_DIST = 80;        // 环带半径：距离小于该值时减弱向心力，避免缩成一个点
const DAMPING = 0.93;        // 每帧速度阻尼，防止越吸越快

export default {
  name: "SakuraBackground",

  data() {
    return {
      petals: [], // 仅存放静态样式（尺寸/透明度/滤镜）
    };
  },

  mounted() {
    // 非响应式状态：每帧高频更新，避免触发 Vue 重渲染
    this.items = [];                                  // 花瓣物理状态
    this.pointer = { x: 0, y: 0, active: false };     // 指针位置与激活状态
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.last = 0;
    this.rafId = 0;
    this.resizeTimer = 0;

    // 把花瓣图形写入 CSS 变量，供 .sakura 的 background-image 使用
    this.$refs.layer.style.setProperty("--petal-img", PETAL_IMG);

    this.bindEvents();
    this.build();
  },

  beforeDestroy() {
    // 清理动画帧、定时器与事件监听，避免内存泄漏
    cancelAnimationFrame(this.rafId);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("mousemove", this.onPointerMove);
    window.removeEventListener("touchmove", this.onPointerMove);
    document.removeEventListener("mouseleave", this.onPointerLeave);
    window.removeEventListener("touchend", this.onPointerLeave);
    window.removeEventListener("touchcancel", this.onPointerLeave);
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    /** 绑定鼠标/触摸与窗口尺寸事件 */
    bindEvents() {
      window.addEventListener("mousemove", this.onPointerMove, { passive: true });
      window.addEventListener("touchmove", this.onPointerMove, { passive: true });
      // 鼠标移出整个页面时取消吸引
      document.addEventListener("mouseleave", this.onPointerLeave);
      window.addEventListener("touchend", this.onPointerLeave);
      window.addEventListener("touchcancel", this.onPointerLeave);
      window.addEventListener("resize", this.onResize);
    },

    /** 窗口尺寸变化：防抖后重建花瓣 */
    onResize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(this.build, 300);
    },

    /** 重新生成花瓣样式并初始化物理状态 */
    build() {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.petals = this.createStyles();

      // 等 DOM 更新后再建立物理状态，保证能拿到真实节点
      this.$nextTick(() => {
        this.initPhysics();
        if (!this.rafId) {
          this.last = performance.now();
          this.rafId = requestAnimationFrame(this.tick);
        }
      });
    },

    /** 生成每片花瓣的静态样式（数量随屏宽自适应） */
    createStyles() {
      const count = Math.min(45, Math.max(12, Math.round(window.innerWidth / 34)));
      const list = [];

      for (let i = 0; i < count; i++) {
        const size = 10 + Math.random() * 14;      // 花瓣尺寸 10~24px
        const opacity = 0.45 + Math.random() * 0.5; // 透明度
        const hue = (Math.random() - 0.5) * 40;     // 色相偏移，营造深浅差异
        const blur = Math.random() * 0.8;           // 轻微虚化，模拟景深

        list.push({
          style: {
            width: size + "px",
            height: size + "px",
            opacity: opacity,
            filter: "hue-rotate(" + hue + "deg) blur(" + blur + "px)",
          },
        });
      }
      return list;
    },

    /** 根据 DOM 节点建立每片花瓣的物理状态，并做首次落位 */
    initPhysics() {
      const nodes = this.$refs.layer.children;
      const list = [];

      for (let i = 0; i < nodes.length; i++) {
        const el = nodes[i];
        const fall = 0.4 + Math.random() * 1.1; // 基础下落速度
        const p = {
          el,
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          vx: 0,
          vy: fall,
          fall,
          rot: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 0.6, // 旋转速度
          phase: Math.random() * Math.PI * 2,    // 摆动相位
          sway: 0.4 + Math.random() * 1.2,       // 摆动强度
          swaySpeed: 0.01 + Math.random() * 0.02,
        };
        // 首次渲染先落位，避免所有花瓣叠在左上角
        this.applyTransform(p);
        list.push(p);
      }

      this.items = list;
    },

    /** 把物理位置写入 DOM（transform 由合成层处理，性能好） */
    applyTransform(p) {
      p.el.style.transform =
        "translate3d(" + p.x.toFixed(1) + "px," + p.y.toFixed(1) + "px,0)" +
        " rotate(" + p.rot.toFixed(1) + "deg)";
    },

    /** 帧循环：自然飘落 + 指针吸引旋涡 */
    tick(now) {
      // 归一化到 60fps 基准，最多按 2 倍步长计算，防止切后台回来跳帧
      const dt = Math.min(2, (now - this.last) / 16.67);
      this.last = now;

      const w = this.w;
      const h = this.h;
      const pt = this.pointer;

      for (let i = 0; i < this.items.length; i++) {
        const p = this.items[i];

        // 速度平滑回归基础下落速度
        p.vy += (p.fall - p.vy) * 0.03 * dt;

        // 自然左右摆动
        p.phase += p.swaySpeed * dt;
        p.vx += Math.sin(p.phase) * p.sway * 0.06 * dt;

        // 指针/手指吸引：近处强聚拢 + 远处缓慢汇入，并叠加切向力形成旋涡
        if (pt.active) {
          const dx = pt.x - p.x;
          const dy = pt.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;

          if (dist < R_FAR) {
            // 两级力度：近区强、远区弱，最终叠加成一个收拢力
            const near = dist < R_NEAR ? (1 - dist / R_NEAR) * F_NEAR : 0;
            const far = (1 - dist / R_FAR) * F_FAR;
            const pull = (near + far) * dt;

            // 距指针过近时减弱向心力，让花瓣绕着指针转而不是缩成一点
            const inward = Math.min(1, dist / KEEP_DIST);
            const ux = dx / dist;   // 指向指针的单位向量
            const uy = dy / dist;

            p.vx += ux * pull * inward;      // 向心（收拢）
            p.vy += uy * pull * inward;
            p.vx += -uy * pull * SWIRL_RATIO; // 切向（旋绕）
            p.vy += ux * pull * SWIRL_RATIO;
          }
        }

        // 阻尼：避免速度无限累加
        const damp = Math.pow(DAMPING, dt);
        p.vx *= damp;
        p.vy *= damp;

        // 位置与旋转更新
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.rotSpeed * dt;

        // 落出底部后从顶部重生
        if (p.y > h + 40) {
          p.y = -40;
          p.x = Math.random() * w;
          p.vx = 0;
          p.vy = p.fall;
        }
        // 横向越界时从另一侧回绕
        if (p.x < -60) p.x = w + 40;
        if (p.x > w + 60) p.x = -40;

        this.applyTransform(p);
      }

      this.rafId = requestAnimationFrame(this.tick);
    },

    /** 记录指针位置（鼠标或单指触摸），并激活吸引 */
    onPointerMove(e) {
      // 触摸事件从 touches[0] 取坐标；鼠标事件则直接用事件本身
      const t = (e.touches && e.touches[0]) || e;
      if (typeof t.clientX !== "number") return;
      this.pointer.x = t.clientX;
      this.pointer.y = t.clientY;
      this.pointer.active = true;
    },

    /** 指针离开页面/手指抬起：停止吸引，花瓣恢复自然飘落 */
    onPointerLeave() {
      this.pointer.active = false;
    },
  },
};
</script>
