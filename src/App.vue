<template>
  <div id="app">
    <header>
      <button class="back"></button>
      <p @click="showModal">活动规则</p>
    </header>
    <div class="content">
      <lottery
        @lotteryClick="lotteryClick"
        @lotteryDone="lotteryDone"
        :lottery-start="lotteryStart"
        :lottery-prizenum="prizeNum"
        :lottery-prizeno="prizeNo"
        lottery-bg="https://venler.github.io/demo/vue-lottery/static/turnplate-bg.png"
        content-bg="https://venler.github.io/demo/vue-lottery/static/turntable.png"
        pointer-bg="https://venler.github.io/demo/vue-lottery/static/pointer.png"
        :lottery-width="['85%', '35%']"
      />
      <button @click="lotteryClick"><i></i> 看视频可免费抽奖</button>
      <p>已有38959人参与</p>
    </div>
    <modal
      name="ruleText"
      :width="'80%'"
      class="modalStyle"
    >
      <div class="modalContent">
        <div class="words">
          12312313
        </div>
        <div class="vue-dialog-buttons">
          <button
            type="button"
            class="vue-dialog-button"
            style="flex: 1 1 100%"
            @click="$modal.hide('ruleText')"
          >
            关闭
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Lottery from "./components/lottery.vue";

export default {
  name: "App",
  components: {
    Lottery,
  },
  data() {
    return {
      lotteryStart: 0,
      prizeNo: 1, //中奖的下标
      prizeNum: 8, //奖品总数,由1开始
      prizeList: [
        "200万里通积分",
        "288元万里通积分红包",
        "50万里通积分",
        "10万里通积分",
        "感谢参与",
        "88元万里通积分红包",
        "100万里通积分",
        "888元万里通积分红包",
      ],
      modelOption: {
        title: "活动规则",
        text: "Lorem ipsum dolor sit amet, ...",
        buttons: [
          {
            title: "好的",
            handler: () => {
              this.$modal.hide("dialog");
            },
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    lotteryClick() {
      this.lotteryStart = 1;
      let randomNum = 1 + parseInt(Math.random() * this.prizeNum);
      this.prizeNo = randomNum;
    },
    lotteryDone(res) {
      this.lotteryStart = 0;
      let index = res.prizeNo - 1;
      alert(this.prizeList[index]);
    },
    showMsg(text) {
      this.$toast(text, {
        duration: 4000,
      });
    },
    showModal() {
      this.$modal.show("ruleText");
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 28px;
  background: #07073d;
}
header {
  height: 32px;
  box-sizing: border-box;
  padding-left: 23px;
  padding-right: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #fff;
  margin-bottom: 144px;
}
.lottery_wraper {
  width: 74.17%;
}
.content {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.back {
  width: 32px;
  height: 32px;
  background: url("./assets/images/back_ic@2x.png") no-repeat center;
  background-size: 16px 16px;
  border-radius: 0;
  margin: 0;
}
button {
  width: 200px;
  height: 40px;
  background: linear-gradient(180deg, #fde69f, #fdcf5b);
  border-radius: 20px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bb2c00;
  font-size: 14px;
}
button i {
  width: 18px;
  height: 18px;
  display: block;
  background: url("./assets/images/play.png") no-repeat left top;
  background-size: contain;
  margin-right: 5px;
}
button + p {
  color: #fff;
  font-size: 14px;
  line-height: 20px;
}
header p {
  height: 30px;
  line-height: 30px;
}
.modalStyle {
  font-size: 12px;
}
.modalExit {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
}
/* body .vue-dialog-buttons {
  position: absolute;
  left: 0;
  bottom: 0;
} */
.modalContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.words {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
