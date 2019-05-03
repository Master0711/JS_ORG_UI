<template>
  <div style="width: 850px;height: 500px;display: flex;flex-direction: column;padding: 10px;">
    <div style="width:100%;display: flex;flex-direction: column;
        padding:5px 5px 5px 5px;margin-top: -15px;">
      <div style="width:370px;display:flex;padding-left: 70px;">
        <img src="static/image/exhibition.jpg">
        <img src="static/image/hot-air-balloon.png" style="width:24px;height:24px;padding-top:22px;padding-left:10px;">
        <img src="static/image/karaoke.png" style="width:24px;height:24px;padding-top:18px;padding-left:30px;">
        <img src="static/image/person-fight-punch.png"
          style="width:24px;height:24px;padding-top:22px;padding-left:30px;">
        <img src="static/image/activities.png" style="width:24px;height:24px;padding-top:15px;padding-left:30px;">
        <img src="static/image/sun-umbrella.png" style="width:24px;height:24px;padding-top:22px;padding-left:30px;">
      </div>
    </div>
    <div style="display: flex;justify-content: flex-start;flex-direction: row;flex-wrap: wrap;overflow-y: scroll;
        overflow-x: hidden;">
      <div style="margin-left: 10px;" v-for="(item,index) in activityList"
        v-bind:class="{rightitem:booleanlist[index]}">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover" style="width: 350px;height: 260px;border: white;cursor: pointer;">
              <div style="width: 100%;height: 100%;">
                <img src="static/image/bg2.jpg" style="width: 100%;height: 175px;;">
              </div>
              <div style="display: flex;margin: 5px;">
                <div class="fontitem">{{item.activityContent}}</div>
                <span
                  style="font-family: lpc;width: 21px;height: 21px;text-align: center;padding-top: 3px;">&#xE76C;</span>
              </div>
              <div class="timeitem">4-30</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style>
  @font-face {
    font-family: lpc;
    src: url(../../static/font/segmdl2.ttf);
  }

  .rightitem {
    margin-top: 20px;
  }

  .fontitem {
    font-family: 微软雅黑, Segoe MDL2, Segoe MDL2;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
    color: #040404;
  }

  .timeitem {
    font-family: 微软雅黑, Segoe MDL2, Segoe MDL2;
    margin-top: 8px;
    padding: 0px 0 0 305px;
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #040404;
  }

</style>

<script>
  export default {
    name: "eventsGallery",
    data() {
      return {
        activityList: [],
        booleanlist: []
      };
    },
    methods: {
      getActivityList() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/activity/getActivityShow",
            data: {}
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.activityList = res.data.activityList;
            }
            if (res.data.status == "someerror") {
              model.$notify.info({
                title: res.data.status,
                message: "服务器内部错误，请稍后重试！"
              });
            }
          })
          .catch(function (err) {
            model.$notify.error({
              title: "error",
              message: "服务器开小差了，请稍后重试!"
            });
          });
      }
    },
    mounted() {
      for (let index = 0; index < 1000; index++) {
        if (index % 2 != 0) {
          this.booleanlist[index] = true;
        } else {
          this.booleanlist[index] = false;
        }
      }
      this.getActivityList();
    }
  };

</script>
