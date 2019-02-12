<template>
  <scroller :top="74" :bottom="49" ref="scroller">
    <img class="banner" :src="bannerUrl">

    <div class="content" v-for="itemList in list" :key="itemList.id">
      <h3>{{itemList.name}}</h3>
      <h5>{{itemList.frontName}}</h5>
      <ul class="shop">
        <li class="shop-item" v-for="item in itemList.itemlist" :key="item.id">
          <div class="images">
            <img v-lazy="item.primaryPicUrl">
          </div>
          <div class="descript">{{item.simpleDesc}}</div>
          <p>{{item.name}}</p>
          <div class="price">￥{{item.price}}</div>
          <span
            class="newItem"
            v-for="itemTaglists in item.itemTagList"
            :key="itemTaglists.id"
          >{{itemTaglists.name}}</span>
        </li>
      </ul>
    </div>
  </scroller>
</template>

<script>
import { getHomeCateDetail } from "../../services/homeService";
import { Indicator } from "mint-ui";
export default {
  props: ["data"],
  data() {
    return {
      bannerUrl: "",
      list: []
    };
  },
  watch: {
    "data.id": function(newVal) {
      //请求分类的列表数据
      if (newVal) {
        // 显示加载指示器
        Indicator.open();
        getHomeCateDetail(newVal).then(data => {
          console.log(data);
          this.bannerUrl = data.bannerUrl;
          this.list = data.categoryList;
          //渲染数据时让滚动视图滚动到最顶部
          this.$nextTick(() => {
            Indicator.close();
            this.$refs.scroller.scrollTo(0, 0);
          });
        });
      }
    }
  }
};
</script>

<style lang="scss">
.banner {
  width: 100%;
}
.content {
  border-top: 10px solid #f4f4f4;
  padding: 10px;
  h3 {
    font-weight: normal;
    font-size: 16px;
    text-align: center;
  }
  h5 {
    font-weight: normal;
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-top: 5px;
  }
  .shop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .shop-item {
      width: 49%;
      padding-top: 14px;
      box-sizing: border-box;
      .images {
        background: #f4f4f4;
        img {
          width: 100%;
        }
      }
      .descript {
        padding: 5px;
        line-height: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: #f1ece2;
        color: #9f8a60;
        font-size: 12px;
      }
      p {
        font-size: 14px;
        color: #333;
        margin-top: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price {
        color: #b4282d;
        line-height: 25px;
      }
      span {
        margin-top: 3px;
        margin-right: 5px;
        border: 1px solid #b4282d;
        font-size: 11px;
        color: #b4282d;
        padding: 0 5px;
      }
    }
  }
}
</style>

