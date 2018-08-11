<template>
  <div class="foot_container">
    <div class="foot_box" :class="{activeGuide:$route.path==='/msite'}" @click="$router.replace('/msite')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg>
      <p>首页</p>
    </div>
    <div class="foot_box" :class="{activeGuide:$route.path==='/shiwu'}" @click="$router.replace('/shiwu')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye1"></use>
      </svg>
      <p>识物</p>
    </div>
    <div class="foot_box"  :class="{activeGuide:$route.path==='/categorys'}" @click="$router.replace('/categorys')">
      <svg class="icon"  aria-hidden="true">
        <use xlink:href="#icon-foot1-copy"></use>
      </svg>
      <p :class="{activeGuide:$route.path==='/categorys'}">分类</p>
    </div>
    <div class="foot_box" :class="{activeGuide:$route.path==='/shopcart'}" @click="$router.replace('/shopcart')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-qicheqianlian-"></use>
      </svg>
      <p>购物车</p>
    </div>
    <div class="foot_box" :class="{activeGuide:$route.path==='/personal'}"  @click="$router.replace('/personal')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gerenyonghutouxiang"></use>
      </svg>
      <p>我的</p>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      console.log(this.$route);
    }
  }
</script>

<style>
  .foot_container{
    width:100%;
    height:1.11rem;

  }
  .foot_box{
    width:20%;
    height:1.11rem;
    float:left;
    background-color: #fafafa;
  }
  .icon{
    display: flex;
    margin: 4px auto;
    font-size: 0.60rem;
  }
  .foot_box p{
    text-align: center;
    font-size: 0.064rem;
    color: #666;
  }
  .activeGuide{
    color: red;
  }

</style>
