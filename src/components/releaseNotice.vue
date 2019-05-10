<template>
  <div style="width: 800px;height: 500px;padding:0px 10px;display:flex;flex-direction: column;
    align-items: center;">
    <div style="display:flex;align-items: center;justify-content: center;">
      <img src="static/image/releasenotice.jpg">
    </div>
    <div style="width:100%;height:50%;display:flex;flex-direction:column;justify-content:center;
        align-items:center;" @click="showwindow">
      <div style="margin-top: 100px;width:60%;height:100%;border:1px dashed #999;border-radius:4px;display:flex;
        align-items:center;justify-content:center;cursor:pointer;">
        <img src="static/image/plus.png" style="width: 100px;height: 100px;" />
      </div>
    </div>
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

<script>
  export default {
    name: 'releaseNotice',
    data() {
      return {
        theme: '',
        content: '',
      }
    },
    methods: {
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
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/announcement/addannouncement',
          data: {
            theme: this.theme,
            content: this.content,
          }
        }).then((res) => {
          if (res.data.status == "success") {
            this.$notify({
              title: res.data.status,
              message: "添加公告成功！",
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
          model.$notify.error({
            title: 'error',
            message: '服务器开小差了，请稍后重试!'
          });
        });
      },
    },
    mounted() {

    },
  }

</script>
