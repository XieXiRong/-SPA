<template>
  <div class="timesell">
    <div class="timeleft">
      <p>严选限时购</p>
      <div>
        <span ref="t_hour">03</span>
        <span>:</span>
        <span ref="t_minute">16</span>
        <span>:</span>
        <span ref="t_second">00</span>
      </div>
      <p>下一场15:00开始</p>
    </div>
    <div class="timeright">
      <img src="http://yanxuan.nosdn.127.net/b75ea04a65af5e5030db300b134595f8.png?imageView&quality=85&thumbnail=330x330" alt="">
      <div>
        <p>¥221</p>
        <p>¥221</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      //此处获得现在的时间
      const hour = new Date().getHours()
      const minute = new Date().getMinutes()
      const second = new Date().getSeconds()
      //时间判断


      function secondFloor() {
        //应该获取服务器提供的时间在进行定时器
        let second = this.$refs.t_second.innerText
        let minute = this.$refs.t_minute.innerText
        let hour = this.$refs.t_hour.innerText
        setInterval(()=>{
          second -= 1
          if(second<=0&&minute>=0&&hour>=0){

            this.$refs.t_second.innerText = second
          }
        },1000)
      }

      console.log(this.$refs.t_second.innerText);


    }
  }
</script>

<style lang="less" scoped>
.timesell{
  width: 100%;
  background-color: white;
  padding: .4rem .53333rem .4rem .74667rem;
  margin-bottom: .26667rem;
  height: 3.06667rem;
  display: -moz-flex;
  display: flex;
}
  .tiemsell .timeleft{
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
.tiemsell .timeleft span{
  font-size: .48rem;
  line-height: 1rem;
  margin-bottom: .32rem;
  color: #333;
  letter-spacing: .16rem;
}
</style>
