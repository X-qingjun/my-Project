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
      <!-- <ul class="kingKong" :style="{backgroundImage: 'url('+kingKongImg+')'}">
        <li class="kingKong-item" v-for="item in kingKongList" :key="item.id">
          <img v-lazy="item.picUrl">
          <p>{{item.text}}</p>
        </li>
      </ul>
      <ul class="promotion">
        <li class="promotion-item" v-for="item in bigPromotionList" :key="item.sequen">
          <img v-lazy="item.picUrl">
        </li>
      </ul>
    </div>
    <div class="center-module">
      <div class="center-one">
        <div class="center-top">
          <h3>品牌制造商提供</h3>
          <h5>更多
            <van-icon name="arrow" class="arrow"/>
          </h5>
        </div>
        <ul class="taglist">
          <li class="taglist-item" v-for="item in TagList" :key="item.id">
            <div class="descript">
              <p>{{item.name}}</p>
              <p>{{item.floorPrice}}元起</p>
            </div>
            <img v-lazy="item.picUrl">
          </li>
        </ul>
      </div>
      <div class="center-two">
        <div class="center-top">
          <h3>{{title}}</h3>
        </div>
        <ul class="catelist">
          <li class="catelist-item" v-for="item in cataList" :key="item.categoryName">
            <div class="item-name">
              <div class="border"></div>
              {{item.categoryName}}
            </div>
            <img v-lazy="item.picUrl">
          </li>
        </ul>
      </div>-->
    </div>
  </scroller>
</template>

<script>
import {
  getHomeFocusList,
  getHomePolicyList
  // getHomeList,
  // getHomeActivity,
  // getHomeTagList,
  // getHomeCateSell
} from "../../services/homeService";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      bannerData: [],
      PolicyList: []
      // kingKongImg: "",
      // kingKongList: [],
      // bigPromotionList: [],
      // TagList: [],
      // title: "",
      // cataList: []
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
    // // 首页分类列表
    // getHomeList().then(data => {
    //   this.kingKongImg = data.background;
    //   this.kingKongList = data.list;
    // });
    // //请求首页活动
    // getHomeActivity().then(data => {
    //   this.bgUrl = data.backgroundUrl;
    //   this.bigPromotionList = data.bigPromotionData;
    // });
    // getHomeTagList().then(data => {
    //   this.TagList = data;
    // });
    // getHomeCateSell().then(data => {
    //   this.title = data.title;
    //   this.cataList = data.cateList;
    // });
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
// .kingKong {
//   overflow: hidden;
//   .kingKong-item {
//     width: 20%;
//     float: left;
//     padding: 5px 0;
//     box-sizing: border-box;
//     img {
//       width: 80%;
//       margin: 0 auto;
//     }
//     p {
//       font-size: 12px;
//       color: #333;
//       text-align: center;
//     }
//   }
// }
// .promotion {
//   overflow: hidden;
//   .promotion-item img {
//     width: 50%;
//     float: left;
//   }
//   .promotion-item:nth-of-type(1) img {
//     width: 100%;
//   }
// }
// .center-module {
//   .center-one {
//     border-top: 10px solid #f4f4f4;
//     padding: 10px;
//     .center-top {
//       height: 30px;
//       h3 {
//         font-weight: normal;
//         float: left;
//         font-size: 16px;
//       }
//       h5 {
//         font-weight: normal;
//         float: right;
//         font-size: 13px;
//         .arrow {
//           transform: translateY(2px);
//         }
//       }
//     }
//     .taglist {
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: space-between;
//       .taglist-item {
//         width: 49%;
//         margin-top: 5px;
//         .descript {
//           position: absolute;
//           width: 49%;
//           margin-top: 20px;
//           p:nth-of-type(1) {
//             font-size: 14px;
//             text-align: center;
//           }
//           p:nth-of-type(2) {
//             font-size: 12px;
//             color: #777;
//             text-align: center;
//           }
//         }
//         img {
//           width: 100%;
//         }
//       }
//     }
//   }
//   .center-two {
//     border-top: 10px solid #f4f4f4;
//     padding: 10px;
//     .center-top {
//       height: 30px;
//       h3 {
//         font-weight: normal;
//         font-size: 16px;
//       }
//     }
//     .catelist {
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: space-between;
//       .catelist-item {
//         width: 24%;
//         background: #f5f5f5;
//         margin-top: 5px;
//         .item-name {
//           font-size: 12px;
//           text-align: center;
//           .border {
//             display: none;
//           }
//         }
//         img {
//           width: 80%;
//           height: 80%;
//           margin: 0 auto;
//         }
//       }
//       .catelist-item:nth-of-type(1),
//       .catelist-item:nth-of-type(2) {
//         width: 49%;
//         .item-name {
//           width: 40%;
//           height: 100%;
//           float: left;
//           font-size: 15px;
//           line-height: 90px;
//           position: relative;
//           .border {
//             display: block;
//             width: 25px;
//             height: 2px;
//             overflow: hidden;
//             background: #333;
//             font-weight: bold;
//             position: absolute;
//             left: 12px;
//             top: 60px;
//           }
//         }
//         img {
//           float: left;
//           width: 60%;
//           height: 100%;
//         }
//       }
//       .catelist-item:nth-of-type(1) {
//         background: #f9f3e4;
//       }
//       .catelist-item:nth-of-type(2) {
//         background: #ebeff6;
//       }
//     }
//   }
// }
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


