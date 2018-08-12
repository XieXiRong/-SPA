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
  import {} from 'vuex'
export default {
  components:{
    FootGuide,
    Header
  },
  mounted(){
    this.$store.dispatch('getMsiteDates')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 body
   cursor pointer
   margin-bottom 5rem
   background-color: #f4f4f4
   height 100%
  .foot_guide_list
    width 100%
    height 1.2rem
    position fixed
    border-top 1px solid #999;
    bottom 0
</style>
