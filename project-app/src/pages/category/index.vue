<template>
  <div id="categroy" class="page">
    <!-- 头部搜索框 -->
    <header class="header">
      <p>
        <span class="icon">
          <van-icon name="search"/>
        </span>
        <span>输入关键字</span>
      </p>
    </header>
    
    <!-- 头部导航列表 -->
    <cateNav v-model="selectIndex" ref="nav"/>


  </div>
</template>

<script>
import cateNav from "../../components/cateCom/cateNav";
export default {
  components: {
    cateNav
  },
  data() {
    return {
      selectIndex: 0
    };
  }
};
</script>

<style lang="scss" scoped>
#categroy{
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
    z-index: 1;
    p {
      width: 3.4rem;
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
  }
}
</style>

