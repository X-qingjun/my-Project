<template>
  <div id="home" class="page">
    <header class="header">
      <img src="/images/logo.png">
      <p>
        <span class="icon">
          <van-icon name="search"/>
        </span>
        <span>输入关键字</span>
      </p>
      <div class="right">
        <div class="iconfont icon-xiaoxi"></div>
        <div class="info">消息</div>
      </div>
    </header>

    <homeNav v-model="selectIndex" ref="nav"/>

    <homeContent v-show="selectIndex===0"/>
  </div>
</template>

<script>
import homeNav from "../../components/homeCom/homeNav";
import homeContent from "../../components/homeCom/homeContent";
export default {
  components: {
    homeNav,
    homeContent
  },
  data() {
    return {
      selectIndex: 0
    };
  }
};
</script>

<style lang="scss" scoped>
#home {
  background: palegoldenrod;
  .header {
    width: 100%;
    height: 0.44rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    padding: 0.08rem 0.05rem;
    box-sizing: border-box;
    img {
      width: 0.29rem;
      height: 0.29rem;
    }
    p {
      width: 2.23rem;
      font-size: 0.15rem;
      background: #ededed;
      color: #5a5a5a;
      border-radius: 0.04rem;
      margin: 0 0.08rem;
      line-height: 0.28rem;
      display: flex;
      .icon {
        font-size: 0.18rem;
        margin: 0.02rem 0.1rem;
      }
    }
    .right {
      color: #5a5a5a;
      .iconfont {
        font-size: 0.16rem;
      }
      .info {
        margin-top: 0.02rem;
        font-size: 0.1rem;
      }
    }
  }
}
</style>
