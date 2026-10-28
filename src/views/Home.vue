<template>
  <!-- 主页面：模块（分组）选择 -->
  <main>
    <div class="home-head">
      <div class="home-title">游戏书签</div>
      <div class="home-sub">共 {{ total }} 个账号 · 选择要进入的模块</div>
    </div>

    <!-- 模块入口列表（Vant 单元格组） -->
    <van-cell-group inset :border="false" class="home-list">
      <van-cell v-for="(g, gi) in groups" :key="gi"
                :title="displayName(g, gi)"
                :label="g.accounts.length + ' 个账号'"
                icon="bookmark-o"
                is-link clickable
                @click="goGroup(gi)" />
    </van-cell-group>
  </main>
</template>

<script>
// 导入书签数据
import DATA from "../data";

export default {
  name: "Home",

  computed: {
    // 全部分组
    groups() {
      return DATA.groups;
    },
    // 账号总数
    total() {
      let n = 0;
      DATA.groups.forEach((g) => { n += g.accounts.length; });
      return n;
    },
  },

  methods: {
    /** 进入指定分组子页面 */
    goGroup(gi) {
      this.$router.push("/group/" + gi);
    },

    /**
     * 分组显示名：同名分组自动追加序号，便于区分
     * 例如多个「小号」显示为 小号（1）、小号（2）…
     */
    displayName(g, gi) {
      // 统计同名分组总数
      const sameName = DATA.groups.filter((x) => x.name === g.name);
      if (sameName.length <= 1) return g.name; // 无重名直接返回
      // 计算当前分组在同名分组中的序号（从 1 开始）
      let seq = 0;
      for (let i = 0; i <= gi; i++) {
        if (DATA.groups[i].name === g.name) seq++;
      }
      return `${g.name}（${seq}）`;
    },
  },
};
</script>
