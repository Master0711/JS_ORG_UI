<template>
  <div style="padding:10px;box-sizing: border-box;">
    <div style="display: flex;padding: 0 10px;">
      <div style="width:210px;display:flex;padding-left: 100px;">
        <img src="static/image/personalinformation.jpg">
        <img src="static/image/design.png" style="width:34px;height:34px;padding-top:10px;padding-left: 10px;">
      </div>
    </div>
    <div style="display: flex;flex-direction: column;margin-left: 60px;">
      <div style="display: flex;margin-top: 30px;">
        <div style="margin-left: 90px;width: 130px;height: 130px;background: cornsilk;">
          <img :src="avatar" style="width: 100%;height: 100%;cursor: pointer;" @click="showChangeavatar">
        </div>
        <div style="margin-left: 30px;width: 330px;height: 130px;display: flex;
            flex-direction: row;padding: 10px;box-sizing: border-box;">
          <div style="display: flex;flex-direction: column;width: 200px;">
            <div style="font-size: 25px;display: flex;align-items: center;">
              <span style="margin-top: -3px;margin-left: 5px;font-family: lpc;text-align: center;">&#xE13D;</span>
              <span
                style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 25px;">{{information.realname}}</span>
            </div>
            <div style="display: flex;align-items: center;margin-top: 5px;">
              <img src="static/image/student-card.png"
                style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
              <span
                style="margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 20px;">{{information.student_id}}</span>
            </div>
            <div style="display: flex;align-items: center;margin-top: 12px;">
              <img src="static/image/gmail.png" style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
              <span
                style="margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 20px;">{{information.email}}</span>
            </div>
          </div>
          <div style="margin: 10px 0 0 -20px;width: 70px;height: 70px;">
            <span v-if="information.sex == 0"
              style="font-size: 50px;font-family: lpc;color: rgba(0,153,204,1);text-align: center;">&#x2642;</span>
            <span v-if="information.sex == 1"
              style="font-size: 50px;font-family: lpc;color: rgba(208,125,156,1);text-align: center;">&#x2640;</span>
          </div>
        </div>
      </div>
      <div style="padding: 10px;box-sizing: border-box;margin-top: 20px;margin-left: 90px;width: 500px;height: 220px;
        display: flex;">
        <div style="display: flex;" v-if="show == 'show'">
          <div style="max-width: 350px;">
            <div style="display: flex;align-items: center;margin-top: 5px;margin-left: 10px;">
              <img src="static/image/school.png" style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
              <span
                style="margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 30px;">{{information.college}}</span>
              <span
                style="margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 30px;">{{information.discipline}}</span>
            </div>
            <div style="display: flex;align-items: center;margin-top: 15px;margin-left: 10px;">
              <img src="static/image/grades.png" style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
              <span
                style="width: 220px;text-align: center;margin-top: 13px;
                                font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 30px;">{{information.grade}}</span>
            </div>
            <div style="display: flex;align-items: center;margin-top: 15px;margin-left: 10px;">
              <img src="static/image/tel_number.png" style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
              <span
                style="width: 220px;text-align: center;margin-top: 13px;
                                      font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 30px;">{{information.telephone}}</span>
            </div>
            <div style="display: flex;align-items: center;margin-top: 15px;margin-left: 10px;">
              <img src="static/image/garland.png" style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
              <span
                style="width: 220px;text-align: center;margin-top: 13px;
                                            font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 30px;">{{information.birthday}}</span>
            </div>
          </div>
          <div style="width: 70px;height: 70px;margin-top: 60px;margin-left: -10px;cursor: pointer;">
            <img src="static/image/key.png" style="width: 100%;height: 100%">
          </div>
        </div>
        <div style="max-width: 550px;" v-if="show == 'edit'">
          <div style="display: flex;align-items: center;margin-top: 5px;margin-left: 10px;">
            <img src="static/image/school.png" style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
            <span style="margin-top: 13px;margin-left: 30px;">
              <el-input :placeholder=information.college suffix-icon="el-icon-date" size="medium"
                style="width: 170px;font-size: 10px;" v-model="college"></el-input>
            </span>
            <span style="margin-top: 13px;margin-left: 20px;">
              <el-input id="discipline" :placeholder=information.discipline suffix-icon="el-icon-date" size="medium"
                style="width: 170px;font-size: 10px;" v-model="discipline"></el-input>
            </span>
          </div>
          <div style="display: flex;align-items: center;margin-top: 15px;margin-left: 10px;">
            <img src="static/image/grades.png" style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
            <span style="width: 220px;text-align: center;margin-left:-15px;">
              <el-select v-model="grade" :placeholder=information.grade style="width: 120px;font-size: 10px;"
                size="medium">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div style="display: flex;align-items: center;margin-top: 15px;margin-left: 10px;">
            <img src="static/image/tel_number.png" style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
            <span style="width: 220px;text-align: center;">
              <el-input :placeholder=information.telephone suffix-icon="el-icon-date" v-model="telephone"
                style="width: 150px;font-size: 10px;" size="medium"></el-input>
            </span>
          </div>
          <div style="display: flex;align-items: center;margin-top: 15px;margin-left: 10px;">
            <img src="static/image/garland.png" style="margin-top: 3px;margin-left: 5px;width: 30px;height: 30px;">
            <span style="width: 220px;text-align: center;">
              <el-date-picker v-model="birthday" type="date" :placeholder=information.birthday size="medium"
                style="width: 150px;">
              </el-date-picker>
            </span>
          </div>
        </div>
      </div>
      <div>
        <el-button v-if="show == 'show'" type="primary" plain size="mini" @click="show = 'edit'"
          style="margin-left: 350px;margin-top: 15px;height: 35px;">修改信息
        </el-button>
        <el-button v-if="show == 'edit'" type="primary" plain size="mini" @click="updateinformation"
          style="margin-left: 350px;margin-top: 15px;height: 35px;">确定修改
        </el-button>
      </div>
    </div>
    <div id="changeavatarwindow" style="display:none;">
      <up-image></up-image>
    </div>
  </div>
</template>

<style>
  @font-face {
    font-family: lpc;
    src: url(../../static/font/segmdl2.ttf);
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
import upImage from "@/components/upImage"
  export default {
    name: 'personalInf',
    components:{
      upImage,
    },
    data() {
      return {
        information: [],
        show: 'show',
        college: '',
        discipline: '',
        options: [{
          value: '本科一年级',
          label: '本科一年级'
        }, {
          value: '本科二年级',
          label: '本科二年级'
        }, {
          value: '本科三年级',
          label: '本科三年级'
        }, {
          value: '本科四年级',
          label: '本科四年级'
        }, {
          value: '硕士',
          label: '硕士'
        }, {
          value: '博士及以上',
          label: '博士及以上'
        }, {
          value: '其他',
          label: '其他'
        }],
        grade: '',
        telephone: '',
        birthday: '',
        avatar:'',
      }
    },
    methods: {
      getInformation() {
        let model = this;
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/user/getInformation',
          data: {}
        }).then((res) => {
          if (res.data.status == "success") {
            this.information = res.data.information;
            this.college = res.data.information.college;
            this.discipline = res.data.information.discipline;
            this.grade = res.data.information.grade;
            this.telephone = res.data.information.telephone;
            this.birthday = res.data.information.birthday;
            this.avatar = res.data.information.avatar;
          }
          if (res.data.status == "someerror") {
            this.$notify.info({
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
      updateinformation() {
        this.show = 'show';
        if (this.college == this.information.college && this.discipline == this.information.discipline &&
          this.grade == this.information.grade && this.telephone == this.information.telephone &&
          this.birthday == this.information.birthday) {
          this.$notify.info({
            title: 'Tips',
            message: '你没有带动任何信息，不需要修改'
          });
        } else {
          let model = this;
          this.axios({
            method: "POST",
            url: 'http://localhost:8080/ssm/user/updateinformation',
            data: {
              college: this.college,
              discipline: this.discipline,
              grade: this.grade,
              birthday: this.birthday,
              telephone: this.telephone,
            }
          }).then(function (res) {
            if (res.data.status == "success") {
              model.getInformation();
              model.$notify({
                title: 'success',
                message: '修改个人信息成功！',
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
      },
      showChangePassword(){
        
      },
      showChangeavatar(){
        layer.open({
          type: 1,
          skin: "layer_bg",
          area: ["350px", "160px"],
          title: "Change avatar",
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $("#changeavatarwindow")
        });
      },
    },
    mounted() {
      this.getInformation();
    }
  }

</script>
