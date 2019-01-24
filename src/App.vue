<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tab-bar v-model="selectIndex">
      <tab-item title="首页" class="iconfont icon-zanting"></tab-item>
      <tab-item title="分类" class="iconfont icon-fenlei"></tab-item>
      <tab-item title="穿搭" class="iconfont icon-jiudian"></tab-item>
      <tab-item title="购物车" class="iconfont icon-waimai"></tab-item>
      <tab-item title="个人" class="iconfont icon-wode"></tab-item>
    </tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: 0
    };
  },
  computed: {
    appPath() {
      switch (this.selectIndex) {
        case 0:
          return "/home";
        case 1:
          return "/category";
        case 2:
          return "/wear";
        case 3:
          return "/cart";
        case 4:
          return "/mine";
      }
    }
  },
  watch: {
    appPath: {
      handler(newVal) {
        this.$router.push(newVal);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 28px;
}
</style>


