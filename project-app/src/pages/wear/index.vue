<template>
  <div id="wear" class="page">
    <header>穿搭</header>

    <scroller ref="content" :top="80" :bottom="49">
    <div class="cont" v-for="item in list" :key='item.id'>
      <p>{{item.title}}</p>
      <div class="span"></div>
      <img :src="item.imgUrl" />
    </div>
     </scroller>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {
          title:'经典法兰绒系新上市',
          imgUrl:'https://via.placeholder.com/344x130/dnf'
        },
        {
          title:'全家人温暖的外套单品都在这里',
          imgUrl:'https://via.placeholder.com/344x130/fdn'
        },
        {
          title:'无惧严寒，温暖也时尚有型',
          imgUrl:'https://via.placeholder.com/344x130/ndf'
        },
        {
          title:'经典法兰绒系新上市',
          imgUrl:'https://via.placeholder.com/344x130/dnf'
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
  #wear{
    header{
      font-size: 0.2rem;
      font-weight: 600;
      text-align:center;
      height: 0.5rem;
      line-height: 0.5rem;
      border-bottom: 0.01rem solid #eee;
    }
    .cont{
      position: relative;
      font-size: 0.16rem;
      color: #5A5A5A;
      padding-left: 0.15rem;
      padding-top: 0.1rem;
      p{
        padding: 0.1rem;
      }
      .span{
        position: absolute;
        right: 0.15rem;
        top:0.3rem;
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
        background: #B72941;
      }
    }
  }
</style>

