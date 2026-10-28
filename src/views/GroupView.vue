<template>
  <!-- 分组子页面：账号卡片列表 -->
  <main>
    <!-- 顶部导航（Vant 导航栏）：返回按钮 + 分组标题 -->
    <van-nav-bar class="group-nav"
                 :title="group.name"
                 left-text="返回"
                 left-arrow
                 @click-left="goBack">
      <template #right>
        <span class="nav-count">{{ group.accounts.length }} 个</span>
      </template>
    </van-nav-bar>

    <!-- 账号卡片网格（Vant 宫格） -->
    <van-grid :border="false" class="acct-grid">
      <van-grid-item v-for="(acct, ai) in group.accounts" :key="ai" class="acct-item">
        <!-- 卡片本身保持 a 标签：便于按下拖动时能拉出链接 -->
        <a class="card"
           :class="{ pressed: ai === pressedAi }"
           :href="buildUrl(acct.url)"
           target="_blank" rel="noopener"
           @mousedown="markPressed(ai)"
           @touchstart.passive="markPressed(ai)">
          <div class="name" :title="acct.name">{{ acct.name }}</div>
        </a>
      </van-grid-item>
    </van-grid>
  </main>
</template>

<script>
// 导入书签数据与全局线路工具
import DATA from "../data";
import { buildUrl } from "../store";

export default {
  name: "GroupView",

  data() {
    return {
      pressedAi: -1, // 当前按下的卡片下标（-1 表示无）
    };
  },

  computed: {
    // 当前分组下标（来自路由参数）
    groupIndex() {
      return Number(this.$route.params.gi);
    },
    // 当前分组对象：越界时返回空结构，避免模板报错
    group() {
      return DATA.groups[this.groupIndex] || { name: "", accounts: [] };
    },
  },

  created() {
    // 下标非法时直接回主页面
    if (!DATA.groups[this.groupIndex]) {
      this.$router.replace("/");
    }
  },

  methods: {
    // 透传全局 buildUrl（模板中生成账号跳转链接）
    buildUrl,

    /** 标记按下的卡片：保持高亮直到按下下一张 */
    markPressed(ai) {
      this.pressedAi = ai;
    },

    /** 返回主页面 */
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
