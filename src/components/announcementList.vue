<template>
  <div style="max-width: 700px;padding: 0px 20px;">
    <div style="display: flex;padding: 0 10px;">
      <div style="width:210px;display:flex;padding-left: 150px;">
        <img src="static/image/notification.jpg">
        <img src="static/image/notificationmini.png" style="width:24px;height:24px;padding-top:22px;">
        <el-button type="primary" plain @click="showwindow" size="mini" 
            style="margin-left: 100px;margin-top: 10px;height: 40px;">立即新增</el-button>
      </div>
    </div>
    <el-table height="490"
      :data="announcementList.filter(data => !search || data.theme.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;">
      <el-table-column label="主题" prop="theme"></el-table-column>
      <el-table-column label="内容" prop="content"></el-table-column>
      <el-table-column label="发布时间" prop="time"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入活动关键字" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="delAnnouncement(scope.row)">Event overview</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="addwindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">新增公告
        </div>
        <div style="padding: 10px;">
          <img src="static/image/bg2.jpg" style="width: 300px;height: 135px;">
        </div>
        <div
          style="font-family: lpc;margin-top: 5px;margin-left: -62px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xE113;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            公告主题 :
          </span>
          <span style="margin-left: 20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            <el-input v-model="theme" placeholder="请输入公告主题" size="medium"></el-input>
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 85%;padding-left: 12px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xF582;
          </span>
          <span
            style="line-height: 20px;max-width: 300px;margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            主要内容 :
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 80%;padding-left: 10px;">
          <el-input type="textarea" :rows="6" placeholder="请添加公告的主要内容" v-model="content">
          </el-input>
        </div>
        <div style="text-align: center;display: flex;margin-top: 13px;width: 25%;padding-left: 200px;">
          <el-button type="primary" plain @click="addAnnouncement">立即新增</el-button>
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
    name: "announcementList",
    data() {
      return {
        announcementList: [],
        search: '',
        theme: '',
        content: '',
      }
    },
    methods: {
      getAnnouncementList() {
        let model = this;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/announcement/listannouncement',
          data: {}
        }).then(function (res) {
          if (res.data.status == "success") {
            model.announcementList = res.data.list;
            model.$notify({
              title: res.data.status,
              message: "获取公告列表成功！",
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
      },
      showwindow() {
        layer.open({
          type: 1,
          skin: 'layer_bg',
          area: ['450px', '550px'],
          title: 'New announcement',
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $('#addwindow'),
        });
      },
      addAnnouncement() {
        let model = this;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/announcement/addannouncement',
          data: {
            theme: model.theme,
            content: model.content,
          }
        }).then(function (res) {
          if (res.data.status == "success") {
            model.$notify({
              title: res.data.status,
              message: "添加公告成功！",
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
        this.getAnnouncementList();
      },
      delAnnouncement(item){
        let model = this;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/announcement/delannouncement',
          data: {
            uuid: item.uuid,
          }
        }).then(function (res) {
          if (res.data.status == "success") {
            model.$notify({
              title: res.data.status,
              message: "删除公告成功！",
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
        location.reload();
      },
    },
    mounted() {
      this.getAnnouncementList();
    },
  };

</script>
