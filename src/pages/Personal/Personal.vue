<template>
  <div class="person_content">
    <div class="person_content_img">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <mt-button class="btn_one">手机号码登录</mt-button>
    <mt-button class="btn_two">邮箱帐号登录</mt-button>
    <p class="person_phone_log">手机号快捷注册 <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-youjiantou"></use>
    </svg>
    </p>
    <div class="person_bottom">
      <div class="person_bottom_content">
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icons64x6461"></use>
          </svg>
          微信
        </p>

        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qq"></use>
          </svg>
          QQ
        </p>

        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibo"></use>
          </svg>
          微博</p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {}
</script>

<style lang="less">
  .person_content{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .person_content_img{
    width: 100%;
    height: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  .person_content_img img{
    width: 3.57333rem;
    height: 1.2rem;
  }
  .person_content .btn_one{
    background-color: #B4282D;
    height: 1rem;
    color: white;
    width: 90%;
    margin: 0.3rem 0;
  }
  .person_content .btn_two{
    background-color: #fff;
    color: #B4282D;
    width: 90%;
    height: 1rem;
    border: 0.01rem solid #B4282D;
  }
  .person_phone_log{
    margin: 0.3rem 0;
    color: #333;
    font-size: .27333rem;
    text-align: center;
    width: 100%;
  }
  .person_phone_log .icon{
    font-size: .2733rem;
    color: #666;
  }
  .person_bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
  }
  .person_bottom_content{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .person_bottom_content .icon{
    font-size: 0.35rem;
    line-height: 0.4rem;
  }
  .person_bottom_content p{
    color: #979797;
    padding: 0 .53333rem;
  }
  .person_bottom_content p:nth-child(1){
    border-right: 1px solid #979797;
  }
  .person_bottom_content p:nth-child(2){
    border-right: 1px solid #979797;
  }


</style>
