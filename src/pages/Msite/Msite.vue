<template>
  <div class="navlist">
    <div class="nav">
      <div class="navcontainer">
        <div><span>推荐</span></div>
        <div><span>居家</span></div>
        <div><span>鞋包服饰</span></div>
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
    <div class="msiteSwipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../../static/images/wallhaven-661501.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../static/images/wallhaven-669703.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../static/images/wallhaven-663354.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../../static/images/wallhaven-679587.png" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="msiteTips">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-anonymous-iconfont"></use>
        </svg>
        <span class="msiteTipsText">网易自营品牌</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-anonymous-iconfont"></use>
        </svg>
        <span class="msiteTipsText">30天无忧退货</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-anonymous-iconfont"></use>
        </svg>
        <span class="msiteTipsText">48小时快速退款</span>
      </div>
    </div>
    <div class="provides">
      <div>
        <p>品牌制造商直供</p>
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    methods:{
      _initNavScroll(){
        new BScroll('.nav',{
          click:true,
          scrollX:true
        })
      },
    },
    computed:{

    },
    mounted(){
      this._initNavScroll()
    }
  }
</script>

<style lang="less">
  .navlist{
    overflow: hidden;
  }
.nav{
  background-color: white;
  clear: both;
  width: 100%;
  height: 0.8rem;
  margin-top: 0.1rem;

}
.navcontainer{
  width: 20rem;
}
  .navcontainer div{
    display: inline-block;
    padding: 0 .21333rem;
    line-height: .8rem;
    font-size: .37rem;
    color: #333;
    text-align: center;
  }
.msiteTips{
  background-color: white;
  width: 100%;
  height: .96rem;
  padding: 0 .2rem;
  display: flex;
  align-items: center;
}
  .msiteTips div{
  margin-left: 0.2rem;
  }
  .msiteTips .icon{
    color: red;
    font-size: 0.25rem;
    display: inline-block;
    vertical-align: middle;
  }
.msiteSwipe{
  width: 100%;
  height: 3.8rem;
}
  .msiteSwipe img{
    width: 100%;
    height: 100%;
  }
  .provides{
    background-color: white;
  }
</style>
