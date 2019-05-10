<template>
  <div style="width: 100%;height: auto;display: flex;flex-direction: column;
  justify-content: center;align-items: center;">
    <div style="width: 85%;height: 580px;background-image: url(static/image/bg1.jpg);
        background-repeat: no-repeat;background-size: 100% 100%;margin: 5px;">
      <div style="width:100%;height:100%;background-color:rgba(255,255,255,0.6);display: flex;flex-direction: column;">
        <div style="width: 100%;height: 60px;display: flex;flex-direction: row-reverse;">
          <img src="static/image/message.png" style="width: 60px;height: 60px;transform: rotate(140deg);
                    right: 100px;opacity: 0.5;margin: 15px 140px 0px 0px;">
          <img src="static/image/jsorg2.png" style="width: 760px;height: 200px;transform: rotate(0deg);
                right: 100px;opacity: 0.8;margin-top: 150px;padding-left: 200px;">
        </div>
        <div style="display: flex;flex-direction: row-reverse;">
          <div style="width: 260px;height: 360px;background-color: rgba(73, 72, 72, 0.6);border-radius: 6%;
                    margin: 30px 100px 0 0;position: relative;">
            <div style="margin: 10px;">
              <p class="welcomefont" style="font-size: 25px;">欢迎你来到：</p>
              <p class="welcomefont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;福大晋狮云端家园</p>
              <p class="welcomefont">在这里</p>
              <p class="welcomefont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你可以以游客身份</p>
              <p class="welcomefont">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;了解我们、接触我们</p>
              <p class="welcomefont">如果喜欢、加入我们</p>
              <p class="welcomefont">已是我们的一员?</p>
              <p class="welcomefont" style="font-size: 18px;text-align: center;">Have fun on our website</p>
            </div>
          </div>
        </div>
        <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin-top: 30px;">
          <img src="static/image/鼠标.png" style="height: 40px;width: 40px;opacity: 0.5;">
          <p style="padding-top: 10px;text-align: center;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif">
            向下滑动查看更多...</p>
        </div>
      </div>
    </div>
    <layout-bg2></layout-bg2>
    <layout-bg3></layout-bg3>
    <layout-bg4></layout-bg4>
    <foot></foot>
  </div>
</template>

<style>
  .welcomefont {
    font-size: 23px;
    font-family: 'Arial', 'STKaiti', '黑体', '宋体', sans-serif;
    line-height: 40px;
  }

</style>

<script>
  import layoutBg2 from "@/components/layoutBg2"
  import layoutBg3 from "@/components/layoutBg3"
  import layoutBg4 from "@/components/layoutBg4"
  import foot from "@/components/foot"
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from "vuex";
  export default {
    name: 'home',
    data() {
      return {

      }
    },
    components: {
      layoutBg2,
      foot,
      layoutBg3,
      layoutBg4
    },
    computed: {
      ...mapState({
        user: "user"
      }),
    },
    methods: {
      ...mapMutations(["logout"]),
      ...mapActions(["login"]),
    },
  }

</script>
