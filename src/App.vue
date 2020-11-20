<template>
  <div id="app">
    <lottery
      @lotteryClick="lotteryClick"
      @lotteryDone="lotteryDone"
      :lottery-start="lotteryStart"
      :lottery-prizenum="8"
      :lottery-prizeno="1"
      lottery-bg="https://venler.github.io/demo/vue-lottery/static/turnplate-bg.png"
      content-bg="https://venler.github.io/demo/vue-lottery/static/turntable.png"
      pointer-bg="https://venler.github.io/demo/vue-lottery/static/pointer.png"
      :lottery-width="['85%', '35%']"
    />
  </div>
</template>

<script>
import Lottery from './components/lottery.vue'

export default {
  name: 'App',
  components: {
    Lottery
  },
  data(){
    return{
         lotteryStart: 0,
            prizeNo: 1,
            prizeNum: 8,
            prizeList: ['200万里通积分', '288元万里通积分红包', '50万里通积分', '10万里通积分', '感谢参与', '88元万里通积分红包', '100万里通积分', '888元万里通积分红包']
    }
  },
  methods:{
     lotteryClick () {
            this.lotteryStart = 1
            let randomNum = 1 + parseInt(Math.random() * this.prizeNum)
            this.prizeNo = randomNum
        },
        lotteryDone (res) {
            this.lotteryStart = 0
            let index = res.prizeNo - 1
            console.log(this.prizeList[index])
        }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
