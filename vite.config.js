// Vite 配置文件
import { defineConfig } from "vite";
// Vue 2 官方插件：解析 .vue 单文件组件
import vue from "@vitejs/plugin-vue2";

export default defineConfig({
  plugins: [vue()],
  // 使用相对路径打包，便于部署到任意子目录（如 GitHub Pages）
  base: "./",
});
