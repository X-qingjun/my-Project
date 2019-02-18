<template>
  <scroller :top="110" :bottom="49">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item class="banner" v-for="item in bannerData" :key="item.id">
        <img :src="item.img">
      </van-swipe-item>
    </van-swipe>

    <div class="top-module">
      <ul class="policy">
        <li class="policy-item" v-for="item in PolicyList" :key="item.id">
          <i class="iconfont icon-jiantou2"></i>
          <span>{{item.info}}</span>
        </li>
      </ul>
    </div>
  </scroller>
</template>

<script>
import {
  getHomeFocusList,
  getHomePolicyList
} from "../../services/homeService";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      bannerData: [],
      PolicyList: []
    };
  },
  created() {
    //请求轮播图数据
    getHomeFocusList().then(data => {
      this.bannerData = data.bannerlists;
    });
    // 请求首页协议
    getHomePolicyList().then(data => {
      this.PolicyList = data.policylists;
    });
  }
};
</script>

<style lang="scss" scoped>
.banner img {
  width: 100%;
}
.top-module {
  padding: 0;
}
.policy {
  display: flex;
  height: 0.3rem;
  padding: 0.05rem 0;
  i {
    margin-right: 0.05rem;
  }
  .policy-item {
    flex: 1;
    line-height: 0.3rem;
    font-size: 0.14rem;
    color: #5a5a5a;
    text-align: center;
  }
}
</style>

<style>
.van-swipe__indicator {
  border-radius: 50%;
  width: 0.08rem;
  height: 0.08rem;
}

.van-swipe__indicator:not(:last-child) {
  margin-right: 0.15rem;
}
</style>


