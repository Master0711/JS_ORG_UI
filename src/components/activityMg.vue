<template>
  <div style="max-width: 750px;height: 500px;padding:0px 10px;display:flex;flex-direction: column;
        align-items: center;">
    <div style="display: flex;padding: 0 10px;display: flex;flex-direction: column;">
      <div>
        <div style="width:210px;display:flex;margin-left: -50px;">
          <img src="static/image/activitymanagement.jpg">
          <!-- <img src="static/image/camping-tent.png" style="width:24px;height:24px;padding-top:22px;"> -->
        </div>
      </div>
      <div style="padding: 10px;margin-right: 50px;margin-top: 5px;display: flex;flex-direction: row-reverse;">
        <el-tag type="info" class="tag" @click="show = 5">已取消</el-tag>
        <el-tag class="tag" @click="show = 4">暂无文案</el-tag>
        <el-tag type="info" class="tag" @click="show = 3">已结束</el-tag>
        <el-tag type="warning" class="tag" @click="show = 2">等待开始</el-tag>
        <el-tag type="success" class="tag" @click="show = 1">正在报名</el-tag>
      </div>
    </div>
    <div v-show="show == '4'" style="width: 100%;">
      <el-table :data="notwritten" style="width: 95%" max-height="480">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="活动名称">
                <span>{{ props.row.activityName }}</span>
              </el-form-item>
              <el-form-item label="开始时间">
                <span>{{ props.row.startingtime }}</span>
              </el-form-item>
              <el-form-item label="活动地点">
                <span>{{ props.row.place }}</span>
              </el-form-item>
              <el-form-item label="活动介绍">
                <span>{{ props.row.introduction }}</span>
              </el-form-item>
              <el-form-item label="截止时间">
                <span>{{ props.row.deadline }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="活动名称" prop="activityName">
        </el-table-column>
        <el-table-column label="开始时间" prop="startingtime">
        </el-table-column>
        <el-table-column label="活动地点" prop="place">
        </el-table-column>
        <el-table-column label="撰写文案">
          <template slot-scope="scope">
            <el-button size="mini" @click="addActivityOverView(scope.row)">撰写</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-show="show == '2'" style="width: 100%;">
      <el-table :data="nostarted" style="width: 95%" max-height="420">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="活动名称">
                <span>{{ props.row.activityName }}</span>
              </el-form-item>
              <el-form-item label="开始时间">
                <span>{{ props.row.startingtime }}</span>
              </el-form-item>
              <el-form-item label="活动地点">
                <span>{{ props.row.place }}</span>
              </el-form-item>
              <el-form-item label="活动介绍">
                <span>{{ props.row.introduction }}</span>
              </el-form-item>
              <el-form-item label="截止时间">
                <span>{{ props.row.deadline }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="活动名称" prop="activityName">
        </el-table-column>
        <el-table-column label="开始时间" prop="startingtime">
        </el-table-column>
        <el-table-column label="活动地点" prop="place">
        </el-table-column>
        <el-table-column label="导出名单/取消活动">
          <template slot-scope="scope" style="display: flex;">
            <el-button size="mini" @click="exportlist(scope.row)">导出</el-button>
            <el-button size="mini" @click="cancelactivity(scope.row)">取消</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-show="show == '3'" style="width: 100%;">
      <el-table :data="over" style="width: 95%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="活动名称">
                <span>{{ props.row.activityName }}</span>
              </el-form-item>
              <el-form-item label="开始时间">
                <span>{{ props.row.startingtime }}</span>
              </el-form-item>
              <el-form-item label="活动地点">
                <span>{{ props.row.place }}</span>
              </el-form-item>
              <el-form-item label="活动介绍">
                <span>{{ props.row.introduction }}</span>
              </el-form-item>
              <el-form-item label="截止时间">
                <span>{{ props.row.deadline }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="活动名称" prop="activityName">
        </el-table-column>
        <el-table-column label="开始时间" prop="startingtime">
        </el-table-column>
        <el-table-column label="活动地点" prop="place">
        </el-table-column>
      </el-table>
    </div>
    <div v-show="show == '1'" style="width: 100%;">
      <el-table :data="registering" style="width: 95%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="活动名称">
                <span>{{ props.row.activityName }}</span>
              </el-form-item>
              <el-form-item label="开始时间">
                <span>{{ props.row.startingtime }}</span>
              </el-form-item>
              <el-form-item label="活动地点">
                <span>{{ props.row.place }}</span>
              </el-form-item>
              <el-form-item label="活动介绍">
                <span>{{ props.row.introduction }}</span>
              </el-form-item>
              <el-form-item label="截止时间">
                <span>{{ props.row.deadline }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="活动名称" prop="activityName">
        </el-table-column>
        <el-table-column label="开始时间" prop="startingtime">
        </el-table-column>
        <el-table-column label="活动地点" prop="place">
        </el-table-column>
        <el-table-column label="取消活动">
          <template slot-scope="scope" style="display: flex;">
            <el-button size="mini" @click="addActivityOverView(scope.row)">取消</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-show="show == '5'" style="width: 100%;">
      <el-table :data="cancel" style="width: 95%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="活动名称">
                <span>{{ props.row.activityName }}</span>
              </el-form-item>
              <el-form-item label="开始时间">
                <span>{{ props.row.startingtime }}</span>
              </el-form-item>
              <el-form-item label="活动地点">
                <span>{{ props.row.place }}</span>
              </el-form-item>
              <el-form-item label="活动介绍">
                <span>{{ props.row.introduction }}</span>
              </el-form-item>
              <el-form-item label="截止时间">
                <span>{{ props.row.deadline }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="活动名称" prop="activityName">
        </el-table-column>
        <el-table-column label="开始时间" prop="startingtime">
        </el-table-column>
        <el-table-column label="活动地点" prop="place">
        </el-table-column>
      </el-table>
    </div>
    <div id="writewindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">{{activity_activityName}}
        </div>
        <div style="padding: 10px;cursor: pointer;" @click="showuploadimage">
          <img src="static/image/bg2.jpg" style="width: 250px;height: 100px;">
        </div>
        <div
          style="font-family: lpc;margin-top: 5px;margin-left: -195px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">&#xED28;</span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">发布日期 :
            {{initiate_time}}</span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 85%;padding-left: 12px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">&#xF582;</span>
          <span
            style="line-height: 20px;max-width: 300px;margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">活动简介
            :</span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 80%;padding-left: 10px;">
          <el-input type="textarea" :rows="6" placeholder="请添加描述" v-model="activityContent"></el-input>
        </div>
        <div style="text-align: center;display: flex;margin-top: 35px;width: 25%;padding-left: 200px;">
          <el-button type="primary" plain>立即报名</el-button>
        </div>
      </div>
    </div>
    <div id="uploadimagewindow" style="display: none">
      <div style="padding: 10px 5px;max-width: 350px;max-height: 150px;background-color: rgba(240, 240, 240, 0.959);
            display: flex;justify-content: center;">
        <el-upload class="upload-demo" ref="upload" action="http://localhost:8080/ssm/activity/Addeventpicture"
          :on-preview="handlePreview" :on-remove="handleRemove" :auto-upload="false" :limit=5
          :on-exceed="handleFileLimit">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip"
            style="margin-top: 10px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">只能上传jpg/png文件，且不超过500kb</div>
          <div slot="tip" class="el-upload__tip"
            style="margin-top: 10px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">第一张为展示的头图，后续图片可选择多张</div>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<style>
  .tag {
    margin-left: 5px;
    cursor: pointer;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  a:hover {
    color: rgb(0, 0, 0);
    text-decoration: none;
    border-bottom: 0px solid rgba(89, 22, 245, 0.493);
  }

</style>

<script>
  export default {
    name: 'activityMg',
    data() {
      return {
        show: '1',
        registering: [],
        nostarted: [],
        over: [],
        notwritten: [],
        cancel: [],
        activity_activityName: '',
        initiate_time: '',
        activityContent: '',
        activityId: '',
      }
    },
    methods: {
      getActivityList() {
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/activity/getactivitylist',
          data: {}
        }).then((res) => {
          if (res.data.status == "success") {
            this.registering = res.data.registering;
            this.nostarted = res.data.nostarted;
            this.over = res.data.over;
            this.notwritten = res.data.notwritten;
            this.cancel = res.data.cancel;
            this.$notify({
              title: res.data.status,
              message: "活动列表获取成功！",
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
      },
      addActivityOverView(row) {
        console.log(row.activityId);
        this.activity_activityName = row.activityName;
        this.initiate_time = row.startingtime;
        this.activityId = row.activityId;
        layer.open({
          type: 1,
          skin: "layer_bg",
          area: ["450px", "550px"],
          title: "Sign up",
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $("#writewindow")
        });
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleFileLimit() {
        this.$notify({
          title: 'warning',
          message: '最多只能选择5张图片!',
          type: 'warning'
        });
      },
      showuploadimage() {
        this.storageactivityid();
        layer.open({
          type: 1,
          skin: "layer_bg",
          area: ["350px", "230px"],
          title: "upload image",
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $("#uploadimagewindow")
        });
      },
      storageactivityid() {
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/activity/storageactivityid',
          data: {
            activityId: this.activityId,
          }
        }).then((res) => {
          if (res.data.status == "success") {
            this.$notify({
              title: res.data.status,
              message: "存储活动id成功！",
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
      },
      cancelactivity(param) {
        this.activityId = param.activityId;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/activity/cancelactivity',
          data: {
            activityId: this.activityId,
          }
        }).then((res) => {
          if (res.data.status == "success") {
            this.$notify({
              title: res.data.status,
              message: "活动取消成功！",
              type: 'success'
            });
            this.getActivityList();
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
      },
      exportlist(param) {
        this.activityId = param.activityId;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/activity/exportlist',
          data: {
            activityId: this.activityId,
          }
        }).then((res) => {
          if (res.data.status == "success") {
            this.$notify({
              title: res.data.status,
              message: "导出活动名单成功！",
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
      },
    },
    mounted() {
      this.getActivityList();
    }
  }

</script>
