<template>
  <div>
    <el-input v-model="activityName" placeholder="活动名称"></el-input>
    <el-input v-model="place" placeholder="活动地点"></el-input>
    <el-input v-model="introduction" placeholder="活动简介"></el-input>
    <el-date-picker v-model="deadline" type="date" placeholder="报名截止时间">
    </el-date-picker>
    <el-date-picker v-model="startingtime" type="date" placeholder="活动开始时间">
    </el-date-picker>
    <el-radio v-model="isteam" label=false>不组队</el-radio>
    <el-radio v-model="isteam" label=true>组队</el-radio>
    <el-button @click="addActivitys">默认按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: 'addActivity',
    data() {
      return {
        activityName: '',
        deadline: '',
        startingtime: '',
        place: '',
        introduction: '',
        isteam: false,
      }
    },
    methods: {
      addActivitys() {
        console.log(this.startingtime);
        if (this.activityName == '' || this.deadline == '' || this.startingtime == '' ||
          this.place == '' || this.introduction == '') {
          this.$notify({
            title: '活动信息不完整',
            message: '活动信息不完整',
            type: 'warning'
          });
        } else {
          let model = this;
          this.axios({
            method: "POST",
            url: 'http://localhost:8080/ssm/activity/initActivity',
            data: {
                activityName: this.activityName,
                deadline: this.deadline,
                startingtime: this.startingtime,
                place: this.place,
                introduction: this.introduction,
                isteam: this.isteam,
            }
          }).then(function (res) {
            if (res.data.status == "success") {
              model.$notify({
                title: res.data.status,
                message: "活动添加成功！",
                type: 'success'
              });
            }
            if (res.data.status == "someerror") {
              model.$notify.info({
                title: res.data.status,
                message: "服务器内部错误，请稍后重试！",
              });
            }
          }).catch(function (err) {
            model.$notify.error({
              title: 'error',
              message: '服务器开小差了，请稍后重试!'
            });
          });
        }

      }
    }
  }

</script>
