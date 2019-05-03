<template>
  <div style="width: 850px;height: 500px;padding:0px 10px;">
    <div style="display: flex;padding: 0 10px;">
      <div>
        <div style="width:210px;display:flex;padding-left: 200px;">
          <img src="static/image/activity_title.jpg">
          <img src="static/image/camping-tent.png" style="width:24px;height:24px;padding-top:22px;">
        </div>
      </div>
      <div style="padding: 10px;margin-right: 10px;margin-top: 5px;display: flex;flex-direction: row-reverse;">
        <el-tag class="tag" @click="show = 4">我参与的</el-tag>
        <el-tag type="info" class="tag" @click="show = 3">已结束</el-tag>
        <el-tag type="warning" class="tag" @click="show = 2">等待开始</el-tag>
        <el-tag type="success" class="tag" @click="show = 1">正在报名</el-tag>
      </div>
    </div>
    <div style="display: flex;justify-content: flex-start;flex-direction: row;flex-wrap: wrap;overflow-y: scroll;
    overflow-x: hidden;height:460px;">
      <div style="margin-left: 10px;" v-for="item in registering" v-show="show == 1" @click="clickreg(item)">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover" style="width: 350px;height: 260px;border: white;cursor: pointer;">
              <div style="width: 100%;height: 100%;">
                <img src="static/image/bg2.jpg" style="width: 100%;height: 175px;;">
              </div>
              <div style="display: flex;margin: 5px;">
                <span class="fontitem">{{item.activityName}}</span>
                <span
                  style="font-family: lpc;width: 21px;height: 21px;text-align: center;padding-top: 3px;">&#xE76C;</span>
              </div>
              <div style="margin-top: 8px;">
                <span class="timeitems" style="margin-left: 7px;">地点：{{item.place}}</span>
                <span class="timeitems" style="margin-left: 10px;">开始时间：{{item.startingtime}}</span>
                <span class="timeitems" style="margin-left: 15px;color: rgb(56, 56, 95);">立即报名</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div style="margin-left: 10px;" v-for="item in about_to_start" v-show="show == 2" @click="clickaboutstart(item)">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover" style="width: 350px;height: 260px;border: white;cursor: pointer;">
              <div style="width: 100%;height: 100%;">
                <img src="static/image/bg2.jpg" style="width: 100%;height: 175px;;">
              </div>
              <div style="display: flex;margin: 5px;">
                <span class="fontitem">{{item.activityName}}</span>
                <span
                  style="font-family: lpc;width: 21px;height: 21px;text-align: center;padding-top: 3px;">&#xE76C;</span>
              </div>
              <div style="margin-top: 8px;">
                <span class="timeitems" style="margin-left: 7px;">地点：{{item.place}}</span>
                <span class="timeitems" style="margin-left: 10px;">时间：{{item.startingtime}}</span>
                <span class="timeitems" style="margin-left: 15px;color: rgb(56, 56, 95);">查看详情</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div style="margin-left: 10px;" v-for="item in over" v-show="show == 3" @click="clickover(item)">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover" style="width: 350px;height: 260px;border: white;cursor: pointer;">
              <div style="width: 100%;height: 100%;">
                <img src="static/image/bg2.jpg" style="width: 100%;height: 175px;;">
              </div>
              <div style="display: flex;margin: 5px;">
                <span class="fontitem">{{item.activityName}}</span>
                <span
                  style="font-family: lpc;width: 21px;height: 21px;text-align: center;padding-top: 3px;">&#xE76C;</span>
              </div>
              <div style="margin-top: 8px;">
                <span class="timeitems" style="margin-left: 7px;">地点：{{item.place}}</span>
                <span class="timeitems" style="margin-left: 10px;">时间：{{item.startingtime}}</span>
                <span class="timeitems" style="margin-left: 15px;color: rgb(56, 56, 95);">查看详情</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div v-show="show == 4" style="display: flex;flex-direction: row;flex-wrap: wrap;">
        <div style="margin-left: 10px;" v-for="item in in_registering" @click="clickreg(item)">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-card shadow="hover" style="width: 350px;height: 260px;border: white;cursor: pointer;">
                <div style="width: 100%;height: 100%;">
                  <img src="static/image/bg2.jpg" style="width: 100%;height: 175px;;">
                </div>
                <div style="display: flex;margin: 5px;">
                  <span class="fontitem">{{item.activityName}}</span>
                  <span
                    style="font-family: lpc;width: 21px;height: 21px;text-align: center;padding-top: 3px;">&#xE76C;</span>
                </div>
                <div style="margin-top: 8px;">
                  <span class="timeitems" style="margin-left: 7px;">地点：{{item.place}}</span>
                  <span class="timeitems" style="margin-left: 10px;">开始时间：{{item.startingtime}}</span>
                  <span class="timeitems" style="margin-left: 15px;color: rgb(56, 56, 95);">立即报名</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div style="margin-left: 10px;" v-for="item in in_about_to_start" @click="clickaboutstart(item)">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-card shadow="hover" style="width: 350px;height: 260px;border: white;cursor: pointer;">
                <div style="width: 100%;height: 100%;">
                  <img src="static/image/bg2.jpg" style="width: 100%;height: 175px;;">
                </div>
                <div style="display: flex;margin: 5px;">
                  <span class="fontitem">{{item.activityName}}</span>
                  <span
                    style="font-family: lpc;width: 21px;height: 21px;text-align: center;padding-top: 3px;">&#xE76C;</span>
                </div>
                <div style="margin-top: 8px;">
                  <span class="timeitems" style="margin-left: 7px;">地点：{{item.place}}</span>
                  <span class="timeitems" style="margin-left: 10px;">时间：{{item.startingtime}}</span>
                  <span class="timeitems" style="margin-left: 15px;color: rgb(56, 56, 95);">查看详情</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div style="margin-left: 10px;" v-for="item in in_over" @click="clickover(item)">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-card shadow="hover" style="width: 350px;height: 260px;border: white;cursor: pointer;">
                <div style="width: 100%;height: 100%;">
                  <img src="static/image/bg2.jpg" style="width: 100%;height: 175px;;">
                </div>
                <div style="display: flex;margin: 5px;">
                  <span class="fontitem">{{item.activityName}}</span>
                  <span
                    style="font-family: lpc;width: 21px;height: 21px;text-align: center;padding-top: 3px;">&#xE76C;</span>
                </div>
                <div style="margin-top: 8px;">
                  <span class="timeitems" style="margin-left: 7px;">地点：{{item.place}}</span>
                  <span class="timeitems" style="margin-left: 10px;">时间：{{item.startingtime}}</span>
                  <span class="timeitems" style="margin-left: 15px;color: rgb(56, 56, 95);">查看详情</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div id="regwindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">{{activity_activityName}}
        </div>
        <div style="padding: 10px;">
          <img src="static/image/bg2.jpg" style="width: 350px;height: 175px;">
        </div>
        <div
          style="font-family: lpc;margin-top: 5px;margin-left: -40px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xED28;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            开始日期 : {{activity_startingtime}}
          </span>
          <span style="margin-left: 20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            报名截止 : {{activity_deadline}}
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 85%;padding-left: 12px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xE128;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            活动地点 : {{activity_place}}
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 85%;padding-left: 12px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xF582;
          </span>
          <span
            style="line-height: 20px;max-width: 300px;margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            活动简介 : {{activity_content}}
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 35px;width: 25%;padding-left: 200px;">
          <el-button type="primary" plain @click="signup" v-if="!isapply">立即报名</el-button>
          <el-button type="danger" plain @click="dropout" v-if="isapply">取消报名</el-button>
        </div>
      </div>
    </div>
    <div id="abountstartwindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">{{activity_activityName}}
        </div>
        <div style="padding: 10px;">
          <img src="static/image/bg2.jpg" style="width: 350px;height: 175px;">
        </div>
        <div
          style="font-family: lpc;margin-top: 5px;margin-left: -97px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xED28;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            开始日期 : {{activity_startingtime}}
          </span>
          <span
            style="margin-left: 20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;color: brown;">
            已截止
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 85%;padding-left: 12px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xE128;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            活动地点 : {{activity_place}}
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 85%;padding-left: 12px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xF582;
          </span>
          <span
            style="line-height: 20px;max-width: 300px;margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            活动简介 : {{activity_content}}
          </span>
        </div>
      </div>
    </div>
    <div id="overwindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">{{activity_activityName}}
        </div>
        <div style="padding: 10px;">
          <img src="static/image/bg2.jpg" style="width: 350px;height: 175px;">
        </div>
        <div
          style="font-family: lpc;margin-top: 5px;margin-left: -97px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xED28;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            开始日期 : {{activity_startingtime}}
          </span>
          <span
            style="margin-left: 20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;color: brown;">
            已结束
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 85%;padding-left: 12px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xE128;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            活动地点 : {{activity_place}}
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 85%;padding-left: 12px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xF582;
          </span>
          <span
            style="line-height: 20px;max-width: 300px;margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            活动简介 : {{activity_content}}
          </span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<style>
  @font-face {
    font-family: lpc;
    src: url(../../static/font/segmdl2.ttf);
  }

  .tag {
    margin-left: 5px;
    cursor: pointer;
  }

  .rightitem {
    margin-top: 15px;
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

  .timeitems {
    font-family: 微软雅黑, Segoe MDL2, Segoe MDL2;
    margin-top: 8px;
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #040404;
  }

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
    name: 'showActivity',
    data() {
      return {
        show: 1,
        activity_id: '',
        activity_headpicture: '',
        activity_activityName: '',
        activity_place: '',
        activity_startingtime: '',
        activity_deadline: '',
        activity_content: '',
        activity_isteam: false,
        inActivityList: [],
        registering: [],
        about_to_start: [],
        over: [],
        in_registering: [],
        in_about_to_start: [],
        in_over: [],
        isapply: false,
      }
    },
    methods: {
      getActivityList() {
        let model = this;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/activity/getactivitylist',
          data: {}
        }).then(function (res) {
          model.registering = res.data.registering;
          model.about_to_start = res.data.nostarted;
          model.over = res.data.over;
          if (res.data.status == "success") {
            model.registering = res.data.registering;
            model.about_to_start = res.data.nostarted;
            model.over = res.data.over;
            model.in_registering = res.data.in_registering;
            model.in_about_to_start = res.data.in_about_to_start;
            model.in_over = res.data.in_over;
            model.$notify({
              title: res.data.status,
              message: "活动列表获取成功！",
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
      clickreg(item) {
        this.activity_id = item.activityId;
        this.activity_activityName = item.activityName;
        this.activity_startingtime = item.startingtime;
        this.activity_deadline = item.deadline;
        this.activity_place = item.place;
        this.activity_content = item.introduction;
        if (this.inActivityList.indexOf(this.activity_id) > -1) {
          this.isapply = true;
        }
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
      clickover(item) {
        this.activity_id = item.activityId;
        this.activity_activityName = item.activityName;
        this.activity_startingtime = item.startingtime;
        this.activity_deadline = item.deadline;
        this.activity_place = item.place;
        this.activity_content = item.introduction;
        if (this.inActivityList.indexOf(this.activity_id) > -1) {
          this.isapply = true;
        }
        layer.open({
          type: 1,
          skin: 'layer_bg',
          area: ['450px', '550px'],
          title: 'details of the event',
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $('#overwindow'),
        });
      },
      clickaboutstart(item) {
        this.activity_id = item.activityId;
        this.activity_activityName = item.activityName;
        this.activity_startingtime = item.startingtime;
        this.activity_deadline = item.deadline;
        this.activity_place = item.place;
        this.activity_content = item.introduction;
        if (this.inActivityList.indexOf(this.activity_id) > -1) {
          this.isapply = true;
        }
        layer.open({
          type: 1,
          skin: 'layer_bg',
          area: ['450px', '550px'],
          title: 'details of the event',
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $('#abountstartwindow'),
        });
      },
      signup() {
        let model = this;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/activity/signup',
          data: {
            activityId: this.activity_id,
          }
        }).then(function (res) {
          if (res.data.status == "success") {
            model.$notify({
              title: res.data.status,
              message: "报名成功！",
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
        this.getActivityList();
      },
      dropout() {
        let model = this;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/activity/dropout',
          data: {
            activityId: this.activity_id,
          }
        }).then(function (res) {
          if (res.data.status == "success") {
            model.$notify({
              title: res.data.status,
              message: "取消报名成功！",
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
        // this.getActivityList();
        // this.getinlist();
      },
      getinlist() {
        let model = this;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/activity/participatedProjectsList',
          data: {}
        }).then(function (res) {
          if (res.data.status == "success") {
            model.inActivityList = res.data.list;
            console.log(model.inActivityList);
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
    },
    mounted() {
      this.getActivityList();
      this.getinlist();
    }
  }

</script>
