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
      console.log(data);
      //得到结果
      // this.list = data;
      // this.$nextTick(() => {
      //   //识别宽度
      //   let width = 0;
      //   this.$refs.item.map(item => {
      //     width += item.offsetWidth;
      //   });
      //   // 设置宽度
      //   this.$refs.list.style.width = width + 30 + "px";
      //   //创建滚动视图
      //   new BScroll(".nav-bar", {
      //     scrollX: true,
      //     scrollY: false,
      //     click: true
      //   });
      // });
    });
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 26px;
  position: absolute;
  top: 44px;
  left: 0;
  z-index: 2;
  .nav-bar {
    overflow: hidden;
    .nav-list {
      white-space: nowrap;
    }
    .nav-item {
      display: inline-block;
      padding: 0 10px;
      font-size: 14px;
      line-height: 26px;
      color: #333;
      &.active {
        color: #b4282d;
        border-bottom: 1px solid #b4282d;
      }
      box-sizing: border-box;
    }
  }

  .menu-bar {
    overflow: hidden;
    background: #fff;
    h6 {
      font-weight: normal;
      font-size: 14px;
      color: #333;
      height: 40px;
      text-indent: 1em;
      padding-top: 3px;
    }
    .menu {
      li {
        width: 20%;
        height: 26px;
        line-height: 26px;
        float: left;
        text-align: center;
        margin-bottom: 20px;
        margin-left: 13px;
        background: #fafafa;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 12px;
        &.active {
          border-color: #b4282d;
          color: #b4282d;
        }
      }
    }
  }

  .slot {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    // background: yellow;
    span {
      display: block;
      float: left;
      height: 100%;
    }
    span:nth-of-type(1) {
      width: 20px;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
    }
    span:nth-of-type(2) {
      width: 40px;
      line-height: 26px;
      text-align: center;
      background: #fff;
    }
  }
}
.cover {
  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>

