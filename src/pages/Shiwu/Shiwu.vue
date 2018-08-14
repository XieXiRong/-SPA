<template>
  <div class="shiwu_wrap">
    <div class="shiwu_wrap2">
      <div class="swiper_top">
        <mt-swipe class="swip_show" :show-indicators="false">
          <mt-swipe-item v-for="(item,index) in shiwu.banner" :key="index">
            <div class="swipt">
              <div class="swiptimg">
                <img :src="item.picUrl" alt="">
              </div>
            </div>
          </mt-swipe-item>

        </mt-swipe>
      </div>
    </div>
    <div class="shiwu_wrap2">
      <div class="new_scroll_msite">
        <div class="new_products_msite">
          <div ref="newlist" class="new_products_list_wrap">
            <div  class="new_products_list">
              <div ref="newone" v-for="(item1,index) in shiwu.column" :key="index" class="new_products_one_wrap">
                <div class="new_products_list_one">
                  <span>{{item1.articleCount}}</span>
                  <img :src="item1.picUrl" alt="">
                </div>
                <div class="new_products_show">
                  <p>{{item1.title}}</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mid_content">
      <div class="pull_you">
        <p>为你推荐</p>
      </div>
      <div class="love_library">
        <div v-if="shiwu.zhenOne" class="love_detail">
           <div class="loveimg">
             <img :src="shiwu.zhenOne.picUrl" alt="">
           </div>
           <p class="love_detail_l"><span>{{shiwu.zhenOne.title}}</span><span>{{shiwu.zhenOne.priceInfo}}元起</span></p>
           <p class="love_detail_s">{{shiwu.zhenOne.subTitle}}</p>
        </div>
      </div>
      <div  v-if="shiwu.recommendOne" class="food_res love_library">
        <div class="food-left">
            <div>
              <img :src="shiwu.recommendOne.avatar" alt="">
              <span>{{shiwu.recommendOne.nickname}}</span>
            </div>
            <p>{{shiwu.recommendOne.title}}</p>
        </div>
        <div class="food-right">
          <img :src="shiwu.recommendOne.picUrl" alt="">
          <div>
            <span >{{shiwu.recommendOne.typeName}}</span>
          </div>
        </div>
      </div>
      <div  v-if="shiwu.recommendTwo" class="food_res love_library">
        <div class="food-left">
          <div>
            <img :src="shiwu.recommendTwo.avatar" alt="">
            <span>{{shiwu.recommendTwo.nickname}}</span>
          </div>
          <p>{{shiwu.recommendTwo.title}}</p>
        </div>
        <div class="food-right">
          <img :src="shiwu.recommendTwo.picUrl" alt="">
          <div>
            <span >{{shiwu.recommendTwo.typeName}}</span>
          </div>
        </div>
      </div>


      <div class="love_library">
        <div v-if="shiwu.zhenTwo" class="love_detail">
          <div class="loveimg">
            <img :src="shiwu.zhenTwo.picUrl" alt="">
          </div>
          <p class="love_detail_l"><span>{{shiwu.zhenTwo.title}}</span><span>{{shiwu.zhenTwo.priceInfo}}元起</span></p>
          <p class="love_detail_s">{{shiwu.zhenTwo.subTitle}}</p>
        </div>
      </div>
      <div v-if="shiwu.recommendThree" class="food_res love_library">
        <div class="food-left">
          <div>
            <img :src="shiwu.recommendThree.avatar" alt="">
            <span>{{shiwu.recommendThree.nickname}}</span>
          </div>
          <p>{{shiwu.recommendThree.title}}</p>
        </div>
        <div class="food-right">
          <img :src="shiwu.recommendThree.picUrl" alt="">
          <div>
            <span >{{shiwu.recommendThree.typeName}}</span>
          </div>
        </div>
      </div>
      <div class="food_res love_library">
        <div class="food-left">
          <div>
            <img src="http://yanxuan.nosdn.127.net/275bdc66f4d3f841c8879933f2593a27.png?imageView&quality=75&thumbnail=48y48" alt="">
            <span>饮食组：肉肉</span>
          </div>
          <p>半价吃到鲜爽小龙虾</p>
        </div>
        <div class="food-right">
          <div>
            <span >挑款师推荐</span>
          </div>
        </div>
      </div>
    </div>

    <!--//十点一刻-->
    <div class="eleven">
      <div class="eleven_title">
        <p>十点一刻</p>
      </div>
      <div class="eleven_wrap">
        <div ref="eleven" class="eleven_list">
          <div ref="elevenone" v-for="(talk,index) in shiwu.tenfifteen" :key="index" class="eleven_one">
              <p>- 今日话题 -</p>
              <p>{{talk.title}}</p>
            <p>{{talk.desc}}</p>
            <div class="eleven_talk">
              <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
              <span>{{talk.participantNum}}人参与话题</span>
            </div>
          </div>
          <div class="eleven_one eleven_all">
            <p>查看全部话题</p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrfill_l"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    methods: {
      _shiwuScroll() {
        let onelength = this.$refs.newone
        let total = onelength.length * 2.6
        this.$refs.newlist.style.width = total +'rem'
        new BScroll('.new_products_msite', {
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough:'vertical'
        })
      },
      _talkScroll(){
        let onelength = this.$refs.elevenone
        let total = onelength.length * 9
        this.$refs.eleven.style.width = total +'rem'

        new BScroll('.eleven_wrap',{
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough:'vertical'
        })
      },
    },
    components: {},
    computed: {
      ...mapState(['shiwu']),

    },
    mounted() {
      this.$store.dispatch('getShiwuDatas')

      new Swiper('.swiper-container', {
        direction: 'horizontal',
        spaceBetween: 0,
        loop: true,
        slidesPerView: 1,
        centeredSlides: true
      });

    },
    watch:{
      shiwu(val){
        this.$nextTick(()=>{
          this._shiwuScroll()
          this._talkScroll()
        })
      }
    },

  }
</script>

<style lang="less" scoped>
  .shiwu_wrap{
    clear: both;
    margin-bottom: 5rem;
  }

  .shiwu_wrap2 {
    /*overflow: hidden;*/

  }
 .swiper_top{
   width: 100%;
   height: 4rem;
   margin-top: 0.2rem;
   background-color: grey;
 }
.swipt{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

 .swip_show .swiptimg{
   width: 90%;
   height: 100%;

 }
  .swiptimg img{
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
  }
  .new_scroll_msite {
    width: 100%;
    overflow: hidden;
  }

  .new_products_msite {
    width: 100%;
  }

  .new_products_list_wrap {

    height: 3rem;
  }

  .new_products_list {
    height: 3rem;

    background-color: white;
    margin-top: 0.2rem;
  }
  .new_products_list_one span{
    color: white;
    text-indent: 0.1rem;
    position: absolute;
    line-height: 0.5rem;
  }
  .new_products_list_one img{
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;

  }

  .new_products_list_one .new_products_list_img {
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .new_products_list_one .new_products_list_img img {
    width: 100%;
  }

  .new_products_detail {
    text-align: left;
    width: 3.4rem;
  }

  .new_products_detail .new_products_show {
    font-size: .17333rem;
    line-height: .35333rem;
    background-color: #e5686d;
    color: white;
    padding: 0 0.1rem;
    border-radius: 0.1rem;
  }

  .new_products_introduce {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: .18667rem;
    font-size: .29rem;
    color: #7f7f7f;
    line-height: .4rem;
    padding-right: .13333rem;
  }

  .new_products_titleone {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: .32333rem;
    line-height: .42333rem;
    color: #333;
  }

  .new_products_detail .new_products_price {
    color: #b4282d;
    margin-top: -0.1rem;
  }

  .new_products_one_wrap {
    display: inline-block;
    position: relative;
    width: 2.18667rem;
    height: 2.8rem;
    margin: .2rem;
    background-color: white;
  }
  .new_products_show{
    position: absolute;
    bottom: 0.1rem;
    color: #333;
    font-size: .32rem;
    line-height: 1;
    text-align: center;
    width: 2.45333rem;
    margin-left: -.13333rem;
  }
  .mid_content{
    background-color: #fff;
    margin-top: 0.3rem;
    text-align: center;
    height: 24rem;
  }
  .pull_you{
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .42667rem;
    height: 1.2rem;
    line-height: 1.6rem;
  }
  .love_library{
    width: 90%;
    margin: 0 auto;

  }
  .love_detail{
    border: 1px solid #d9d9d9;
    padding-bottom: 0.15rem;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .loveimg{
    border-radius: 0.1rem;
    width: 100%;
    height: 3.8rem;
    margin: 0 auto;
  }
  .loveimg img{
    width: 100%;
    height: 100%;
  }
  .love_detail_l{
    line-height: 1rem;
    text-align: left;
    margin-right: .4rem;
    font-size: .38rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
  }
  .love_detail_l span:nth-child(2){
    position: absolute;
   right: 0;
  }
  .love_detail_s{
    text-align: left;
    font-size: .27333rem;
    line-height: 1.2;
    color: #7f7f7f;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .food_res{
    height: 2.5rem;
    border: 1px solid #d9d9d9;
    border-radius: 0.1rem;
    margin-top: 0.3rem;
  }
  .food-left{
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    float: left;

  }
  .food-left p{
    padding-left: 0.15rem;
    line-height: 0.6rem;
    margin-right: .4rem;
    font-size: .39rem;
    text-overflow: ellipsis;
    white-space: normal;
    overflow: hidden;
  }
  .food-left div{
    padding-left: 0.15rem;
  }
  .food-left img{
    width: 0.46rem;
    height: 0.46rem;
    border-radius: 100%;
    vertical-align: middle;
  }
  .food-right{
    position: relative;
    text-align: left;
    float: left;
    width: 35%;
    height: 100%;
    background-size: 100% 100%;
  }
  .food-right img{
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
  }
  .food-right span{
    position: absolute;
    top: 0;
    left: 0.1rem;
    padding: 0 .11333rem;
    height: .48rem;
    line-height: .48rem;
    background-color: rgba(255,255,255,.9);
    border: 1px solid #d9d9d9;
    border-radius: .26667rem;
    color: #333;
    white-space: nowrap;
  }
  .eleven{
    margin-top: 0.2rem;
    background-color: #fff;
    height: 5.3rem;
    overflow: hidden;
    width: 100%;
  }
  .eleven .eleven_title{
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .42667rem;
    line-height: 1.6rem;
  }
  .eleven_wrap{
    width: 100%;
    height: 3.56rem;
  }
  .eleven_list{
    height: 3.56rem;
    margin-left: .4rem;
  }
  .eleven_one{
    margin-left: 0.2rem;
    margin-right: 0.3rem;
    float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 6rem;
    height: 3.46rem;
    border: 5px #E3E3E3 solid;
    border-radius: 0.1rem;
  }
 .eleven_one p:first-child{
   margin: 0 .10667rem;
   font-size: .32rem;
   color: #7f7f7f;
   margin-bottom: 0.3rem;
 }
  .eleven_one p:nth-child(2){
    font-size: .38rem;
    font-weight: 700;
    margin-bottom: .18667rem;
    line-height: 0.5rem;
  }
  .eleven_one p:nth-child(3){
    font-size: .37333rem;
    line-height: 1;
  }
  .eleven_talk{
    margin-top: 0.3rem;
  }
.eleven_talk img{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  vertical-align: middle;
}
  .eleven_all{
    flex-direction: row;
  }
  .eleven_all .icon{
    position: relative;
    bottom: 0.15rem;

  }
</style>
