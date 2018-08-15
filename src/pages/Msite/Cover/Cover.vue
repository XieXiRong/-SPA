<template>
  <div class="cover_wrap" v-if="showcover">
      <div class="cover_main">
        <p> <span class="line"></span> 新人专享礼 <span class="line"></span> </p>
        <p>感谢使用网易严选, 已为你准备了一份专享礼</p>
        <div class="cover_middle">
          <div class="cover_item">
            <img src="http://yanxuan.nosdn.127.net/a1ebcdbeb2c90cc9d57770dec87460d7.jpg?imageView&quality=85&thumbnail=232y232" alt="">
          </div>
          <div class="cover_item_right">
            <p>抽屉收纳柜 三层</p>
            <p>让收纳事半功倍</p>
            <p><span class="cover_now">¥59.00</span> <span class="cover_count">¥99.00<span class="cover_down"></span></span></p>
          </div>
        </div>
        <mt-button class="btn_one">领券立减¥100.00</mt-button>
        <mt-button class="btn_two">查看更多特惠商品</mt-button>
      </div>
      <div class="cover_close" @click="showcover = false">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png" alt="">
      </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        showcover:true
      }
    },

    mounted(){
      console.log(this.showcover);
    }
  }
</script>

<style lang="less" scoped>
.cover_wrap{
  z-index: 22;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

  .cover_main{
    width: 5.5rem;
    height: 6.22667rem;
    background-color: #fff;
    border-radius: .21333rem;
    padding: .4rem .32rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
.cover_main p:first-child{
  font-size: .43333rem;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
  top: -0.5rem;
  font-weight: 700;
}
  .line{
    display: inline-block;
    width: .53333rem;
    height: .05333rem;
    background-color: #333;
    margin: 0 0.05rem;
  }
.cover_main p:nth-child(2){
  position: relative;
  top: -0.4rem;
  font-size: .25rem;
  text-align: center;
}
  .cover_middle{
    width: 90%;
    margin: 0 auto;
    height: 2.3rem;
    background-color: #f4f4f4;
    border-radius: 0.1rem;
  }
.cover_item{
  float: left;
  width: 45%;
  height: 100%;
  background-color: palevioletred;
}
.cover_item img{
  width: 100%;
  height: 100%;
  border-radius: 0.1rem;
}
  .cover_item_right{
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 55%;

  }
  .cover_item_right p:first-child{
    position: relative;
    top: -19px;
    font-size: .27333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 400;
  }
.cover_item_right p:nth-child(2){
  position: relative;
  top: -0.2rem;
  border: 1px solid #7f7f7f;
  border-radius: .05333rem;
  padding: 0 .10667rem;
  height: .4rem;
  line-height: .4rem;
}
.cover_item_right p:nth-child(3){
  display: flex;
  align-items: center;
  justify-content: center;

}
.cover_item_right .cover_now{
  color: #b4282d;
  font-size: 0.3rem;
}
.cover_item_right .cover_count{
  margin-left: 0.1rem;
  color: #999;
  font-size: 0.3rem;
  position: relative;
}
  .cover_down{

    height: 0.04rem;
    width: 100%;
    position: absolute;
    background-color: #999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin:auto;
  }
.btn_one{
  width: 90%;
  height: 1rem;
  background-color: #b4282d;
  color: #fff;
  font-size: .27333rem;
  margin-top: .53333rem;
  border-radius: .08333rem;
  text-align: center;
  line-height: 1rem;
}
.btn_two{
  width: 90%;
  height: 1rem;
  background-color: white;
  color: black;
  font-size: .27333rem;
  margin-top: .23333rem;
  border-radius: .08333rem;
  text-align: center;
  line-height: 1rem;
  border: 0.01rem solid #7f7f7f;
}
  .cover_close{
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    top: 0.5rem;
    right: 0.3rem;
  }
.cover_close img{
  width: 100%;
  height: 100%;
}
</style>
