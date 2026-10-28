// ============================================================
// 应用入口文件
// 功能：创建 Vue 根实例并挂载到 #app
// ============================================================
import Vue from "vue";
import App from "./App.vue";
// 引入全局样式
import "./assets/style.css";

// 关闭生产环境下的启动提示
Vue.config.productionTip = false;

new Vue({
  // 渲染根组件
  render: (h) => h(App),
}).$mount("#app");
