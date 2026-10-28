<template>
  <!-- 分组子页面：账号卡片列表 -->
  <main>
    <!-- 顶部：返回按钮 + 分组标题 -->
    <div class="page-head">
      <button class="back-btn" @click="goBack">
        <span class="back-ico">←</span><span>返回</span>
      </button>
      <div class="group-title">
        <span class="bar"></span>{{ group.name }}
        <span class="count">{{ group.accounts.length }} 个账号</span>
      </div>
    </div>

    <!-- 账号卡片网格 -->
    <section class="group">
      <div class="grid">
        <a v-for="(acct, ai) in group.accounts" :key="ai"
           class="card"
           :href="buildUrl(acct.url)"
           target="_blank" rel="noopener">
          <div class="name" :title="acct.name">{{ acct.name }}</div>
        </a>
      </div>
    </section>
  </main>
</template>

<script>
// 导入书签数据与全局线路工具
import DATA from "../data";
import { buildUrl } from "../store";

export default {
  name: "GroupView",

  computed: {
    // 当前分组对象：按路由参数中的下标取，越界时返回 null
    group() {
      const gi = Number(this.$route.params.gi);
      return DATA.groups[gi] || null;
    },
  },

  created() {
    // 下标非法时直接回主页面
    if (!this.group) {
      this.$router.replace("/");
    }
  },

  methods: {
    // 透传全局 buildUrl（模板中生成账号跳转链接）
    buildUrl,

    /** 返回主页面 */
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
