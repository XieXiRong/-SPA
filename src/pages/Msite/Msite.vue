<template>
  <div class="msit_content">
  <div class="navlist">
    <Swipe/>
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
    <div class="products">
      <div  class="product">
        <p>品牌制造商直供</p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </div>
    </div>
    <div class="products_product">
      <div v-for="(catepro,index) in cateList.tagList" :key="index" class="products_item">
        <div class="product_single">
          <div class="product_single_detail">
            <p>{{catepro.name}}</p>
            <p>{{catepro.floorPrice}}元起</p>
            <span v-show="catepro.newOnShelf">上新</span>
          </div>
          <div class="product_single_img">
            <img :src="catepro.appListPicUrl" alt="">
          </div>
        </div>
      </div>

    </div>
    <div class="new_products">
      <div class="new_products">
        <p class="new_products_first">新品首发</p>
        <div class="new_products_all">
          <p>查看全部</p>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrfill_l"></use>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <NewProduct :scrollclass1="'new_scroll_product'" :newcates="cateList.newItemList"/>
    <div class="new_products">
      <div class="new_products">
        <p class="new_products_first">人气推荐 · 好物精选</p>
        <div class="new_products_all">
          <p>查看全部</p>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrfill_l"></use>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <NewProduct :scrollclass2="'new_scroll_msite'" :newcates="cateList.popularItemList"/>
    <SettimeSell/>
  </div>
    <Cover/>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swipe from '../../components/Swipe/Swipe'
  import NewProduct from '../../components/newProduct/newProduct'
  import SettimeSell from './SettimeSell/SettimeSell'
  import {mapState} from 'vuex'
  import Cover from './Cover/Cover'
  export default {
    data(){
      return{
        showcover:true
      }
    },
    components:{
      Swipe,
      NewProduct,
      SettimeSell,
      Cover
    },
    computed:{
      ...mapState(['cateList'])
    },
    methods:{

    },
    mounted(){

    }


  }
</script>

<style lang="less" scoped>
  .msit_content{
    width: 100%;
    margin-bottom: 3rem;
    background-color: #fff;
  }
  .navlist {
    overflow: hidden;
  }

  .products {
    background-color: white;
    height: 1.06667rem;
    font-size: .42667rem;
    display: flex;
    align-items: center;
    margin-top: 0.15rem;
  }

  .product {
    width: 50%;
    margin: 0 auto;
  }

  .products p {
    display: inline-block;
  }

  .products .icon {

    display: inline-block;
    font-size: 0.4rem;
  }

  .products_product {
    width: 100%;
    position: relative;
    height: 6.24rem;
    overflow: hidden;
    font-size: 0;
  }

  .products_product .products_item {
    width: 50%;
    display: inline-block;
    height: 3.12rem;
    background-color: white;
  }
  .products_product .products_item .product_single{
    overflow: hidden;
    width: 97%;
    height: 3.02rem;
    margin: 0.05rem auto;
    background-color: #F4F4F4;
    position: relative;
  }
  .product_single .product_single_detail{
    position: absolute;
    left: 0;
    top: 0;
    padding: .26667rem 0 0 .26667rem;
    width: 100%;
    z-index: 4;
    font-size: .27333rem;
  }
  .product_single .product_single_detail p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #333;
    line-height: .35333rem;
    margin-bottom: .08rem;
  }
  .product_single .product_single_detail span{
    color: gold;
    border: 1px solid goldenrod;
    border-radius: 0.1rem;
    line-height: 0.6rem;
    padding: 0.01rem 0.09rem;
    text-align: center;
  }
  .product_single .product_single_img{
    position: absolute;
    right: 0;
    bottom: -47px;
    padding: 0 .2rem .2rem 0;
    height: 100%;
  }
  .product_single .product_single_img img{
    width: 100%;
    max-height: 2.8rem;
    padding-top: 0.3rem;

  }
  .new_products{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 3rem;
    background: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png") no-repeat 50% 100%;
  }
  .new_products_first{
    line-height: 1.3rem;
    text-align: center;
    font-size: .48rem;
    color: #8BA0B6;
    margin-top: 0.5rem;
  }
  .new_products_all{
    position: relative;
    width: 3rem;
    height: .74667rem;
    font-size: .37333rem;
    line-height: .74667rem;
    background: #D8E5F1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .new_products_all p{
    text-align: center;
    color: #8BA0B6;


  }
  .new_products_all .icon{
    vertical-align: middle;
  }
  new_products2{
  background: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png") no-repeat 50% 100%;
}
</style>
