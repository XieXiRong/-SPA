<template>
  <div class="headerTop">
    <div class="headertitle">
    </div>
    <div class="searchBtn">
      <span>搜索商品, 共11784款好物</span>
    </div>
  </div>
</template>

<script>

  export default {
    methods:{

    },
    mounted(){

    }
  }
</script>

<style lang="less">
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
  font-size: .30333rem;
  background-color: #ededed;
  border-radius: .10667rem;
  margin: 0.08rem 0.1rem 0 0.1rem;
}
.searchBtn span{
  line-height: .74667rem;
  color: #333;
  padding-left: 0.6rem;
}

</style>
