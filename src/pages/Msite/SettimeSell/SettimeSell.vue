<template>
  <div class="timesell">
    <div class="timeleft">
      <p>严选限时购</p>
      <div>
        <span>03</span>
        <span>:</span>
        <span>16</span>
        <span>:</span>
        <span>00</span>
      </div>
      <p>下一场15:00开始</p>
    </div>
    <div class="timeright">

    </div>
  </div>
</template>

<script>
  export default {

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
