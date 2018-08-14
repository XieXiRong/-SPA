<template>
  <div class="foot_container">
    <div class="foot_box" :class="{activeGuide:$route.path==='/msite'}" @click="$router.push('/msite')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg>
      <p>首页</p>
    </div>
    <div class="foot_box" :class="{activeGuide:$route.path==='/shiwu'}" @click="$router.push('/shiwu')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye1"></use>
      </svg>
      <p>识物</p>
    </div>
    <div class="foot_box"  :class="{activeGuide:$route.path==='/categorys'}" @click="$router.push('/categorys')">
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
    },
    methods: {
      test(){
        console.log('ceshi...');
        $router.push('/shiwu')
      }
    }
  }
</script>

<style>
  .foot_container{
    z-index: 999;
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height:1.11rem;
  }
  .foot_box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:20%;
    height:1.11rem;
    float:left;
    background-color: #fafafa;
  }
  .icon{
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
