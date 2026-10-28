<template>
  <!-- 根组件：樱花背景 + 路由出口 -->
  <div id="app">
    <!-- 樱花飘落背景（固定全屏，不拦截交互） -->
    <SakuraBackground />
    <router-view />
  </div>
</template>

<script>
// 樱花背景组件
import SakuraBackground from "./components/SakuraBackground.vue";

export default {
  name: "App",

  components: {
    SakuraBackground,
  },
};
</script>
