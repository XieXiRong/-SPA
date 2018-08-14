<template>
 <div>
    <div class="categorys_right_detail" >

      <!--/此处便利/-->
      <div v-if="cateData[current]" v-for="(subCate,index) in cateData[current].subCateList" :key="index" class="categorys_right_single">
        <div class="categorys_right_single2">
          <img :src="subCate.bannerUrl" alt="">
          <p>{{subCate.frontName}}</p>
        </div>
      </div>

      <div class="categorys_right_single">
        <div class="categorys_right_single2">
          <img src="http://yanxuan.nosdn.127.net/8952fd240503a0f098d23795b5a0a699.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>鞋包配饰2件</p>
          <p>6.5折</p>
        </div>
      </div>
      <div class="categorys_right_single">
        <div class="categorys_right_single2">
          <img src="http://yanxuan.nosdn.127.net/8952fd240503a0f098d23795b5a0a699.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>鞋包配饰2件</p>
          <p>6.5折</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      cateData:Array,
      current:Number
    },
  }
</script>

<style lang="less" scoped>


  .categorys_right_detail{
    width: 100%;
    height: 100%;
  }
  .categorys_right_detail .categorys_right_single{
    overflow: hidden;
    display: inline-block;
    margin-right: .1rem;
    font-size: 0;
    width: 1.63rem;
    height: 2.4rem;
    margin-bottom: 0.2rem;
  }
  .categorys_right_single2{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .categorys_right_single2 img{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    margin-top: -0.2rem;
  }
  .categorys_right_single2 p{
    margin-top: -0.15rem;
    font-size: .22rem;
    white-space: pre-line;
    color: #333;
    text-align: center;
    line-height: .4rem;
  }

</style>
