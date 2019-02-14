<template>
  <nav class="nav">
    <div class="nav-bar" ref="bar" v-show="!showMenu">
      <ul class="nav-list" ref="list">
        <li
          v-for="(item, index) in list"
          :key="item.id"
          class="nav-item"
          :class="{active: value===index}"
          ref="item"
          @click="selectTab(index)"
        >{{item.shop}}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { getHomeCateList } from "../../services/homeService";
import BScroll from "better-scroll";
export default {
  props: ["value"],
  data() {
    return {
      list: [],
      showMenu: false
    };
  },
  methods: {
    showAction() {
      this.showMenu = !this.showMenu;
    },
    selectTab(index) {
      // console.log(index);
      this.showMenu = false;
      // 告诉首页组件选中下标
      this.$emit("input", index);
    }
  },
  created() {
    //请求分类数据
    getHomeCateList().then(data => {
      // console.log(data.list);
      this.list = data.lists;
      this.$nextTick(() => {
        //识别宽度
        let width = 0;
        this.$refs.item.map(item => {
          width += item.offsetWidth;
        });
        // 设置宽度
        this.$refs.list.style.width = width + "px";
        //创建滚动视图
        new BScroll(".nav-bar", {
          scrollX: true,
          scrollY: false,
          click: true
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 0.26rem;
  position: absolute;
  left: 0;
  .nav-bar {
    overflow: hidden;
    .nav-list {
      white-space: nowrap;
    }
    .nav-item {
      display: inline-block;
      padding: 0 0.1rem;
      font-size: 0.14rem;
      line-height: 0.26rem;
      color: #333;
      &.active {
        color: #b4282d;
        border-bottom: 0.01rem solid #b4282d;
      }
      box-sizing: border-box;
    }
  }
}
</style>

