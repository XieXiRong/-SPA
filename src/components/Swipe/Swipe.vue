<template>
  <div class="msiteSwipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(cate,index) in cateList.cateList" :key="index">
        <img :src="cate.bannerUrl" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['cateList'])
    },
  }
</script>

<style lang="less">
  .msiteTips {
    background-color: white;
    width: 100%;
    height: .96rem;
    padding: 0 .2rem;
    display: flex;
    align-items: center;
  }

  .msiteTips div {
    margin-left: 0.2rem;
  }

  .msiteTips .icon {
    color: red;
    font-size: 0.25rem;
    display: inline-block;
    vertical-align: middle;
  }

  .msiteSwipe {
    margin-top: 1.8rem;
    width: 100%;
    height: 3.8rem;
  }

  .msiteSwipe img {
    width: 100%;
    height: 100%;
  }

</style>
