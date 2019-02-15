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
    <cateNav v-model="selectIndex2" ref="nav"/>
    
    <!-- 侧边栏导航 -->
    <div class="wrap">
        <scroller :top="80" :bottom="49" class="border-right">
            <li v-for="(item, index) in navData" :key="item.id" 
            :class="{active: selectIndex===index}" @click="selectedTab(index)">
                {{item}}
            </li>
        </scroller>
        <!-- 右侧栏商品 -->
        <scroller ref="content" :top="80" :bottom="49" v-if="navData.length>0">
            <img class="banner" :src="navList[selectIndex].wapBannerUrl">

            <ul class="content-list">
                <li class="content-item" v-for="value in navList[selectIndex].shopList" :key="value.id">
                    <img :src="value.bannerUrl"/>
                    <p>{{value.name}}</p>
                </li>
            </ul>


        </scroller>
    </div>


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
      selectIndex: 0,
      selectIndex2:0,
      navData:['全部商品','上新爆款','上装类','衬衫类','针织衫','外套类','裤和裙子','家具和内着','配件'],
      navList:[
        {
          wapBannerUrl: "https://via.placeholder.com/242x96/0ad0FF/808080 ?Text=上装类",
          shopList:[
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'七分/长衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"}
          ]
        },
        {wapBannerUrl: "https://via.placeholder.com/242x96/0c00aF/808080 ?Text=上装类",
        shopList:[
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'白衬衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"}
          ]
        },
        {wapBannerUrl: "https://via.placeholder.com/242x96/5e00dF/808080 ?Text=上装类",
        shopList:[
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'上装类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"}
          ]
        },
        {wapBannerUrl: "https://via.placeholder.com/242x96/03003F/808080 ?Text=上装类",
        shopList:[
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'衬衫类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"}
          ]
        },
        {wapBannerUrl: "https://via.placeholder.com/242x96/f04c0F/808080 ?Text=上装类",
        shopList:[
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'针织衫',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"}
          ]
        },
        {wapBannerUrl: "https://via.placeholder.com/242x96/70d03F/808080 ?Text=上装类",
        shopList:[
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'外套类',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"}
          ]
        },
        {wapBannerUrl: "https://via.placeholder.com/242x96/00d01F/808080 ?Text=上装类",
        shopList:[
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'裤和裙子',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"}
          ]
        },
        {wapBannerUrl: "https://via.placeholder.com/242x96/500c1F/808080 ?Text=上装类",
        shopList:[
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'家具和内着',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"}
          ]
        },
        {wapBannerUrl: "https://via.placeholder.com/242x96/d020cF/808080 ?Text=上装类",
        shopList:[
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"},
            {name:'配件',
            bannerUrl: "https://via.placeholder.com/48/0ad0FF/808080"}
          ]
        }
      ]
    };
  },
  methods:{
    selectedTab(index){
            this.selectIndex = index;
            this.$nextTick(()=>{
                this.$refs.content.scrollTo(-1, 0);
            })
        }
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
  .wrap{
        display: flex;
        .scroller-wrap:nth-of-type(1){
            width: 0.9rem;
            li{
                line-height: 0.4rem;
                font-size: 0.14rem;
                color: #333;
                text-align: center;
                border-left: 0.02rem solid transparent;
                &.active{
                    color: #000;
                    border-left: 0.02rem solid #000;
                }
            }
        }
        .scroller-wrap:nth-of-type(2){
            left: 0.9rem;
            right: 0;
            padding: 0.1rem;
            box-sizing: border-box;
            width: auto;
            .banner{
                width: 100%;
            }
            .content-list{
                padding-top: 0.1rem;
                overflow: hidden;
                .content-item{
                    width: 33.33%;
                    float: left;
                    img{
                        width: 80%;
                        margin: 0 auto;
                    }
                    p{
                        text-align: center;
                        font-size: 0.12rem;
                        color: #333;
                        line-height: 0.14rem;
                        height: 0.28rem;

                    }
                }
            }

        }
    }
}
</style>

