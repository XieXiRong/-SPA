<template>
  <div id="app">
    <Header/>
    <router-view/>
    <div class="foot_guide_list">
      <FootGuide/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import FootGuide from './components/FootGuide/FootGuide'
export default {
  components:{
    FootGuide,
    Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 body
   background-color: #f4f4f4
  .foot_guide_list
    width 100%
    height 1.2rem
    position fixed
    border-top 1px solid #999;
    bottom 0
</style>
