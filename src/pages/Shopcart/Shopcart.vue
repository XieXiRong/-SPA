<template>

  <div class="shopcart">
      <div class="shopcart_head_content">
        <p>购物车</p>
        <div class="shopcart_right">
          <p>领券</p>
        </div>
      </div>
      <div class="content">
        <div class="cartimg1">
          <div class="cartimg"></div>
        </div>

        <div class="cart_login">
          <p>登陆</p>
        </div>
      </div>



  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">
  .shopcart{
    width: 100%;
    height: 1rem;
    background-color: #fff;
  }
  .shopcart_head_content{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1rem;
    width: 90%;
    margin: 0 auto;
    position: relative;

  }
  .shopcart_head_content>p{
    font-size: 0.4rem;
  }
  .shopcart_right{
    position: absolute;
    right: 0.1rem;
    font-size: 0.3rem;
    color: #B4282D;
  }

  .cartimg1{
    width: 3.30667rem;
    height: 3.30667rem;
    position: absolute;
    top: -2rem;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .cartimg{
    width: 100%;
    height: 100%;
    background:no-repeat url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
    background-size:100% 100%;
  }
  .cart_login{
    margin: auto;
    width: 5.5rem;
    height: 1rem;
    font-size: .4rem;
    line-height: 1.0rem;
    color: #fff;
    background-color: #b4282d;
    border-radius: .1rem;
    text-align: center;
    position: absolute;
    top: 2.2rem;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
