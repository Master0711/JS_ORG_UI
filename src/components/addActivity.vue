<template>
  <div style="width: 800px;height: 500px;padding:0px 10px;display:flex;flex-direction: column;
    align-items: center;">
    <div style="display:flex;align-items: center;justify-content: center;">
      <img src="static/image/addActivity.jpg">
    </div>
    <div
      style="width: 80%;margin-top: 10px;display: flex;flex-direction: column;justify-content: center;align-items: center;">
      <div style="padding: 10px;">
        <img src="static/image/bg2.jpg" style="width: 300px;height: 135px;">
      </div>
      <div
        style="font-family: lpc;margin-top: 5px;margin-left: -62px;text-align: center;display: flex;align-items: center;">
        <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          活动名及地点:
        </span>
        <span style="margin-left: 20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          <el-input v-model="activityName" placeholder="请输入活动名称" size="medium"></el-input>
        </span>
        <span style="margin-left: 20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          <el-input v-model="place" placeholder="请输入活动地点" size="medium"></el-input>
        </span>
      </div>
      <div
        style="font-family: lpc;margin-top: 15px;margin-left: -42px;text-align: center;display: flex;align-items: center;">
        <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          开始日期 :
        </span>
        <el-date-picker v-model="startingdate" type="date" placeholder="活动开始日期" style="width: 150px;margin-left: 20px;"
          size="small">
        </el-date-picker>
        <span style="margin-left: 20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          开始时间 :
        </span>
        <el-time-select v-model="startingtime" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
          placeholder="活动开始时间" style="width: 150px;margin-left: 20px;" size="small">
        </el-time-select>
      </div>
      <div
        style="font-family: lpc;margin-top: 15px;margin-left: -42px;text-align: center;display: flex;align-items: center;">
        <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          截止日期 :
        </span>
        <el-date-picker v-model="deadlinedate" type="date" placeholder="活动截止日期" style="width: 150px;margin-left: 20px;"
          size="small">
        </el-date-picker>
        <span style="margin-left: 20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          截止时间 :
        </span>
        <el-time-select v-model="deadlinetime" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
          placeholder="活动截止时间" style="width: 150px;margin-left: 20px;" size="small">
        </el-time-select>
      </div>
      <div style="text-align: center;display: flex;margin-top: 15px;width: 85%;padding-left: 12px;">
        <span style="font-family: lpc;font-size: 20px;text-align: center;">
          &#xF582;
        </span>
        <span
          style="line-height: 20px;max-width: 300px;margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          活动简介 :
        </span>
      </div>
      <div style="text-align: center;display: flex;margin-top: 15px;width: 80%;padding-left: 10px;">
        <el-input type="textarea" :rows="3" placeholder="请添加活动的主要内容" v-model="introduction">
        </el-input>
      </div>
      <el-button @click="addActivitys" style="margin-top: 10px;margin-left: 250px;">添加活动</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addActivity',
    data() {
      return {
        activityName: '',
        deadlinedate: '',
        deadlinetime: '',
        startingtime: '',
        startingdate: '',
        place: '',
        introduction: '',
      }
    },
    methods: {
      addActivitys() {
        if (this.activityName == '' || this.deadlinedate == '' || this.deadlinetime == '' || this.startingtime == '' ||
          this.startingdate == '' || this.place == '' || this.introduction == '') {
          this.$notify({
            title: 'warning',
            message: '活动信息不完整',
            type: 'warning'
          });
        } else {
          this.axios({
            method: "POST",
            url: 'http://localhost:8080/ssm/activity/initActivity',
            data: {
              activityName: this.activityName,
              deadlinedate: this.deadlinedate,
              deadlinetime: this.deadlinetime,
              startingtime: this.startingtime,
              startingdate: this.startingdate,
              place: this.place,
              introduction: this.introduction,
            }
          }).then((res) => {
            if (res.data.status == "success") {
              this.$notify({
                title: res.data.status,
                message: "活动添加成功！",
                type: 'success'
              });
            }
            if (res.data.status == "someerror") {
              this.$notify.info({
                title: res.data.status,
                message: "服务器内部错误，请稍后重试！",
              });
            }
          }).catch((err) => {
            this.$notify.error({
              title: 'error',
              message: '服务器开小差了，请稍后重试!'
            });
          });
        }

      }
    }
  }

</script>
