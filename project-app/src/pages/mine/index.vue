<template>
  <div id="mine" class="page">
    <div class="header-top">
      <div class="left">
        <h3>皮卡丘</h3>
        <p>查看并编辑个人资料</p>
      </div>
      <div class="right">
        <img src="/images/user.png">
      </div>
    </div>
    <div class="center">
      <div class="center-top">
        <div>我的订单</div>
        <div class="check">
          查看全部订单
          <i class="iconfont icon-jiantou-you"></i>
        </div>
      </div>
      <div class="center-bottom">
        <ul>
          <li>
            <i class="iconfont icon-daifukuan"></i>
            <span>待付款</span>
          </li>
          <li>
            <i class="iconfont icon-icon-test"></i>
            <span>待发货</span>
          </li>
          <li>
            <i class="iconfont icon-gerenzhongxindingdandaishouhuo"></i>
            <span>待收货</span>
          </li>
          <li>
            <i class="iconfont icon-xiaoxi1"></i>
            <span>待评价</span>
          </li>
          <li>
            <i class="iconfont icon-tuikuan"></i>
            <span>退款/退货</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

 <style lang="scss" scoped>
#mine {
  background: palegoldenrod;
  .header-top {
    background: #384355;
    width: 100%;
    height: 1.88rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.5rem 0.2rem;
    .left {
      h3 {
        font-size: 0.18rem;
        color: #ffffff;
        margin-top: 0.1rem;
      }
      p {
        font-size: 0.14rem;
        margin-top: 0.2rem;
        color: #aaaaaa;
      }
    }
    .right {
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
  .center {
    width: 100%;
    position: absolute;
    top: 1.88rem;
    left: 0;
    .center-top {
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      border-bottom: 0.01rem #f1f1f1 solid;
      font-size: 0.14rem;
      color: #000000;
      display: flex;
      justify-content: space-between;
      padding: 0 0.2rem;
      box-sizing: border-box;
      .check {
        color: #aaaaaa;
      }
    }
    .center-bottom {
      width: 100%;
      height: 0.82rem;
      ul {
        box-sizing: border-box;
        height: 100%;
        display: flex;
        border-bottom: 0.11rem solid #f4f4f4;
        li {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-items: center;
          i {
            font-size: 0.3rem;
          }
          span {
            font-size: 0.12rem;
            margin-top: 0.13rem;
          }
        }
      }
    }
  }
}
</style>
