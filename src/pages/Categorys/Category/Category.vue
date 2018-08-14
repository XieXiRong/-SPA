<template>
  <div>
    <div class="categorys_right_img">
      <img :src="cateTitle[current].bannerUrl" alt="">
    </div>
    <div class="categorys_right_fenlei">
      <p>{{cateTitle[current].name}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    props:{
      cateTitle:Array,
      current:Number
    }
  }
</script>

<style lang="less" scoped>
  .categorys_right_img{
    width: 100%;
    height: 2.56rem;
    display: table;
    background-size: 100% 100%;

  }
  .categorys_right_img img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  .categorys_right_fenlei{
    width: 100%;
    height: 1.44rem;
    line-height: 1.44rem;
    text-align: center;
    font-size: .32rem;
    color: #333;
  }
</style>
