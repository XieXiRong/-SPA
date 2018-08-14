<template>
  <div id="app">
    <Header v-if="$route.path==='/msite'"/>
    <ShiwuHeader v-if="$route.path==='/shiwu'||$route.path==='/personal'"/>
    <router-view/>
    <FootGuide v-if="$route.path!=='/personal'"/>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import ShiwuHeader from './components/ShiwuHeader/ShiwuHeader'
  import FootGuide from './components/FootGuide/FootGuide'
export default {
  components:{
    FootGuide,
    Header,
    ShiwuHeader
  },
  mounted(){
    this.$store.dispatch('getMsiteDates')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../static/css/mixins.styl"
  body
    background-color: #F2F5F4
   #app
     width 100%
     height 100%

</style>
