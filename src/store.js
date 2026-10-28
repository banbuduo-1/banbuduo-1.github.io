// ============================================================
// 全局共享状态与线路工具
// 说明：线路选择在所有页面生效，故状态独立于此文件，
//       通过 Vue.observable 实现跨组件响应式共享。
// ============================================================
import Vue from "vue";
import DATA from "./data";

// localStorage 键：全局线路 id（所有账号共用同一条线路）
const LS_KEY = "bm.line";

/** 按 id 查找线路；找不到则回退到第一条 */
export function lineById(id) {
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

// 全局响应式状态：当前线路 id
export const store = Vue.observable({
  lineId: initialLineId,
});

/** 获取当前线路对象（含 id / name / host / path / color） */
export function currentLine() {
  return lineById(store.lineId);
}

/** 切换线路并持久化到 localStorage */
export function setLine(id) {
  store.lineId = id;      // 更新响应式状态，所有页面自动刷新
  lsSet(LS_KEY, id);      // 持久化，下次打开仍生效
}

/** 把账号 url 的域名和入口路径都替换成当前线路，查询参数原样保留 */
export function buildUrl(url) {
  try {
    const u = new URL(url);
    const line = currentLine();
    u.host = line.host;
    u.pathname = line.path || "/"; // 兜底：path 没配就用根路径
    return u.toString();
  } catch (e) {
    return url;
  }
}
