<template>
  <div class="nav-wrap">
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
  </div>
</template>

<script>
import { getCateNavList } from "../../services/cateService";
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
    getCateNavList().then(data => {
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
  height: 26px;
  position: absolute;
  top: -30px;
  left: 0;
  .nav-bar {
    overflow: hidden;
    border-bottom: 2px solid #F5F5F5;
    .nav-list {
      white-space: nowrap;
    }
    .nav-item {
      display: inline-block;
      padding: 0 23px;
      font-size: 14px;
      line-height: 26px;
      color: #5A5A5A;
      &.active {
        color: #000;
        border-bottom: 2px solid #000;
      }
      box-sizing: border-box;
    }
  }
}
</style>

