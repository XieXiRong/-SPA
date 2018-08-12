<template>
<div>
  <Header/>
  <router-view></router-view>
  <FootGuide/>
</div>
</template>

<script>
  import FootGuide from '../../components/FootGuide/FootGuide'
  import Header from '../../components/Header/Header'
  export default {
    components:{
      FootGuide,
      Header,
    }
  }
</script>

<style lang="less">

</style>
