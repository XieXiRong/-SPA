<template>
  <div class="headerWrap">
    <div class="headerTop">
      <div class="headertitle">
      </div>
      <div class="searchBtn">
        <span>搜索商品, 共11784款好物</span>
      </div>
    </div>
    <div class="navlist_wrap">
      <div class="nav">
        <div class="navcontainer">
          <router-link to="/msite"><div :class="{nav_active:$route.path==='/msite'}"><span>推荐</span></div></router-link>
          <router-link to="/item/jujia"><div :class="{nav_active:$route.path==='/item/jujia'}"><span>居家</span></div></router-link>
          <router-link to="/item/sheetbag"><div :class="{nav_active:$route.path==='/item/sheetbag'}"><span>鞋包服饰</span></div></router-link>
          <div><span>服装</span></div>
          <div><span>电器</span></div>
          <div><span>洗护</span></div>
          <div><span>饮食</span></div>
          <div><span>餐厨</span></div>
          <div><span>婴童</span></div>
          <div><span>文体</span></div>
          <div><span>特色区</span></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    methods:{
      _initNavScroll() {
        new BScroll('.nav', {
          click: true,
          scrollX: true,
          scrollY: false
        })
      },
    },
    mounted(){
      this._initNavScroll()
    }

  }
</script>

<style lang="less" scoped>
  .headerWrap{
    z-index: 20;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
.headerTop{
  background-color: white;
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
}
.headerTop .headertitle{
  width: 1.84rem;
  height: .53333rem;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
  display: inline-block;
  margin: .2rem .26667rem 0 .3rem;
  background-size: cover;
  background-position: center;

}
.headerSearch{

  width: 100%;
}
  .headSearch{
    float: right;
    border: 1px solid #999;
    width: 60%;
    height: 0.5rem;
    margin-top: 0.15rem;
    margin-right: 0.1rem;
    border-radius: 0.08rem;
  }
.searchBtn{
  width: 65%;
  justify-content: center;
  height: .74667rem;
  font-size: .28rem;
  background-color: #ededed;
  border-radius: .10667rem;
  margin: 0.08rem 0.1rem 0 0.1rem;

}
.searchBtn span{
  line-height: .74667rem;
  color: #999;
  padding-left: 0.6rem;
}
.navlist_wrap{
  width: 100%;
  overflow: hidden;
}
.nav {
  background-color: white;
  clear: both;
  width: 100%;
  height: 0.8rem;
}

.navcontainer {
  width: 15rem;
}

.navcontainer div {
  display: inline-block;
  padding: 0 .21333rem;
  line-height: .8rem;
  font-size: .37rem;
  color: #333;
  text-align: center;
}
  .navcontainer .nav_active{
    color: #b4282d;
  }
</style>
