// ============================================================
// 应用入口文件
// 功能：注册 Vant 组件库、注入路由，挂载 Vue 根实例
// ============================================================
import Vue from "vue";
// Vant 2：Vue 2 对应的组件库版本
import Vant from "vant";
// Vant 基础样式（先引入，便于后续自定义样式覆盖）
import "vant/lib/index.css";
import App from "./App.vue";
// 引入路由
import router from "./router";
// 引入全局样式（放在最后，确保能覆盖 Vant 默认样式）
import "./assets/style.css";

// 关闭生产环境下的启动提示
Vue.config.productionTip = false;

// 全量注册 Vant 组件与 $toast 等方法
Vue.use(Vant);

new Vue({
  router,               // 注入路由实例
  render: (h) => h(App), // 渲染根组件
}).$mount("#app");
