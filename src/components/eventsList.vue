<template>
  <div style="max-width: 700px;padding: 10px;">
    <el-table
      :data="activity_nowrite.filter(data => !search || data.activityName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="Release time" prop="initiate_time"></el-table-column>
      <el-table-column style="padding-left: 10px;" label="ActivityName" prop="activityName"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入活动关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="addActivityOverView(scope.row)">Event overview</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="regwindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">{{activity_activityName}}
        </div>
        <div style="padding: 10px;">
          <img src="static/image/bg2.jpg" style="width: 250px;height: 100px;">
        </div>
        <div
          style="font-family: lpc;margin-top: 5px;margin-left: -195px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xED28;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            发布日期 : {{initiate_time}}
          </span>
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
          <el-input type="textarea" :rows="6" placeholder="请添加描述" v-model="activityContent">
          </el-input>
        </div>
        <div style="text-align: center;display: flex;margin-top: 35px;width: 25%;padding-left: 200px;">
          <el-button type="primary" plain>立即报名</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  body .layer_bg .layui-layer-content {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  body .layer_bg .layui-layer-title {
    background-color: rgba(173, 171, 171, 0.205);
  }

</style>

<script>
  export default {
    name: "eventsList",
    data() {
      return {
        activity_nowrite: [],
        search: '',
        activity_activityName: '',
        initiate_time: '',
        activityContent: '',

      };
    },
    methods: {
      getActivityList() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/activity/getActivityShow_nowrite",
            data: {}
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.activity_nowrite = res.data.activity_nowrite;
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
      },
      addActivityOverView(row) {
        console.log(row.activityId);
        this.activity_activityName = row.activityName;
        this.initiate_time = row.initiate_time;
        layer.open({
          type: 1,
          skin: 'layer_bg',
          area: ['450px', '550px'],
          title: 'Sign up',
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $('#regwindow'),
        });
      },
    },
    mounted() {
      this.getActivityList();
    }
  };

</script>
