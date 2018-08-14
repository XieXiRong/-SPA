<template>
  <div class="shiwu_header_wrap">
    <div class="shiwu_header">
      <div class="shiwu_header_home">
        <svg class="icon" aria-hidden="true"  @click="$router.push('/msite')">
          <use xlink:href="#icon-shouye"></use>
        </svg>
      </div>
      <div class="shiwu_header_title">

      </div>
      <div class="shiwu_header_fuc">
        <svg class="icon" aria-hidden="true"  @click="$router.push('/msite')">
          <use xlink:href="#icon-xingtaiduICON_sousuo---copy"></use>
        </svg>
        <svg class="icon" aria-hidden="true"  @click="$router.push('/msite')">
          <use xlink:href="#icon-qicheqianlian-"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .shiwu_header_wrap{
    width: 100%;
    height: 1rem;
    background-color: #FAFAFA;

  }
  .shiwu_header_wrap .shiwu_header{
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    height: 1rem;
    position: relative;
  }
  .shiwu_header_title{
    width: 2rem;
    position: absolute;
    top: 0.25rem;
    right: 0.51rem;
    bottom: 0;
    left: 1rem;
    margin: auto;
    background: no-repeat  url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
    background-size: 1.8rem 0.6rem;
  }
.shiwu_header_fuc{
  position: absolute;
  right: 0;
  float: right;
}
  .shiwu_header_fuc .icon:first-child{
    margin-right: 0.2rem;
  }
  .icon{
    font-size: 0.5rem;
  }
</style>
