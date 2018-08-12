<template>
  <div>
    <div class="new_products_msite">
      <div class="new_products_list_wrap">
        <div class="new_products_list">
          <div class="new_products_one_wrap" v-for="(newcate,index) in cateList.newItemList" :key="index">
            <div class="new_products_list_one">
              <div class="new_products_list_img">
                <img :src="newcate.listPicUrl" alt="">
              </div>
              <div class="new_products_detail">
                <span class="new_products_show">七夕推荐</span>
                <p class="new_products_titleone">{{newcate.name}}</p>
                <p class="new_products_introduce">{{newcate.simpleDesc}}</p>
                <p class="new_products_price">¥{{newcate.retailPrice}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed: {
      ...mapState(['cateList'])
    },
    methods: {
      _initNewProductScroll() {
        new BScroll('.new_products_msite', {
          click: true,
          scrollX: true,
          scrollY: false
        })
      },
    },
    mounted() {
      this._initNewProductScroll()
    }
  }
</script>

<style lang="less">
  .new_products_msite{
    width: 100%;
  }
  .new_products_list_wrap{
    width: 20rem;
    height: 4.6rem;
  }
  .new_products_list{

    height: 4.6rem;

    background-color: white;
    margin-top: 0.2rem;
  }
  .new_products_list_one{
    margin-left: .4rem;
    width: 3.4rem;
    height: 4.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .new_products_list_one .new_products_list_img{
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .new_products_list_one .new_products_list_img img{
    width:100%;
  }
  .new_products_detail{
    text-align: left;
    width:3.4rem ;
  }
  .new_products_detail .new_products_show{
    font-size: .17333rem;
    line-height: .35333rem;
    background-color: #e5686d;
    color: white;
    padding: 0 0.1rem;
    border-radius: 0.1rem;
  }
  .new_products_introduce{
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
    margin-bottom: .18667rem;
    font-size: .29rem;
    color: #7f7f7f;
    line-height: .4rem;
    padding-right: .13333rem;
  }
  .new_products_titleone{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: .32333rem;
    line-height: .42333rem;
    color: #333;
  }
  .new_products_detail .new_products_price{
    color: #b4282d;
    margin-top: -0.1rem;
  }
  .new_products_one_wrap{
    display: inline-block;
  }
</style>
