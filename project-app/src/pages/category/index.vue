<template>
  <div id="categroy" class="page">
    <header class="header">
      <p>
        <span class="icon">
          <van-icon name="search"/>
        </span>
        <span>输入关键字</span>
      </p>
    </header>
  </div>
</template>

<script>
export default {};
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
    p {
      width: 3.5rem;
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

