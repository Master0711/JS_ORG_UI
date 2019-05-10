<template>
  <div style="width: 500x;height: 525px;background-image: url();
        background-repeat: no-repeat;background-size: 100% 100%;justify-content: center;display: flex;" ref="laa">
    <div style="display: flex;flex-direction: column;">
      <div style="width:370px;display: flex;flex-direction: column;padding:10px;">
        <div style="display:flex;">
          <img src="static/image/register_font1.jpg">
          <img src="static/image/registration.png" style="width:24px;height:24px;padding-top:22px;">
        </div>
        <div style="padding: 10px;width: 420px;display: flex;flex-direction: column;margin-left: -50px;">
          <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 25px;padding-left: 15px;">注册</div>
          <div class="demo-input-suffix" style="margin: 5px;">
            <el-input @focus="tips('#firstname','你的姓/名是?',4)" id="firstname" placeholder="姓" v-model="firstname"
              style="width: 100px;font-size: 10px;" size="medium">
              <i slot="suffix" class="el-input__icon el-icon-s-check"></i>
            </el-input>
            <el-input @focus="tips('#secondname','你的姓/名是?',1)" id="secondname" placeholder="名"
              suffix-icon="el-icon-date" v-model="secondname" style="width: 120px;font-size: 10px;margin-left: 10px;"
              size="medium"></el-input>
            <el-input @focus="tips('#studentid','你的学生号是?',2)" id="studentid" placeholder="学号" suffix-icon="el-icon-date"
              v-model="studentid" style="width: 110px;font-size: 10px;margin-left: 10px;" size="medium"></el-input>
          </div>
          <div class="demo-input-suffix" style="margin: 5px 5px 0 5px;">
            <!-- <span style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-right: 50px;">学号</span> -->
            <el-input @focus="tips('#college','请完整填入你的学院?',4)" id="college" placeholder="学院" suffix-icon="el-icon-date"
              v-model="college" style="width: 170px;font-size: 10px;" size="medium"></el-input>
            <el-input @focus="tips('#discipline','请完整填入你的专业?',2)" id="discipline" placeholder="专业"
              suffix-icon="el-icon-date" v-model="discipline" style="width: 170px;font-size: 10px;margin-left: 10px;"
              size="medium"></el-input>
          </div>
          <div class="demo-input-suffix" style="margin:5px;">
            <el-select v-model="grade" placeholder="年级" style="width: 120px;font-size: 10px;" size="medium">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <span
              style="margin-left: 30px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 20px;">性别:</span>
            <span v-bind:class="{midimg:sex==0}" id="boyimg" style="margin-left: 20px;
              font-family: lpc;color: rgba(0,153,204,1);cursor: pointer;" @click="changesex('boy')">&#x2642;</span>
            <span v-bind:class="{midimg:sex!=0}" id="girlimg" style="margin-left: 20px;
              font-family: lpc;color: rgba(208,125,156,1);cursor: pointer;" @click="changesex('girl')">&#x2640;</span>
          </div>
          <div class="demo-input-suffix" style="margin: 5px">
            <span style="margin-left: 5px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 20px;">
              生日:</span>
            <el-date-picker v-model="birthday" type="date" placeholder="选择日期" size="medium"
              style="margin-left: 15px;width: 150px;">
            </el-date-picker>
            <span @click="birtips('#birmessage','提供生日资料将确保 JS Association 提供与你年龄相应的使用体验。','2')" id="birmessage" style="color: rgb(100, 102, 241);font-size: 15px;padding-left: 10px;
              font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;cursor: pointer;">为什么需要提供生日信息?</span>
          </div>
          <div class="demo-input-suffix" style="margin: 5px;display: flex;align-items: center;">
            <el-input @focus="tips('#email','我们将会向你的邮箱发送一封邮件，以确认你的身份','4')" id="email" placeholder="Email"
              suffix-icon="el-icon-date" v-model="email" style="width: 180px;font-size: 10px;" size="medium"></el-input>
            <el-row style="margin-left: 15px;">
              <el-button type="primary" icon="el-icon-message" circle size="small" @click="sendEmail"></el-button>
            </el-row>
            <el-input @focus="tips('#vervode','输入邮件中所提到的验证码','2')" id="vervode" placeholder="您收到的验证码"
              suffix-icon="el-icon-date" v-model="vervode" style="width: 140px;
                font-size: 10px;margin-left: 15px;" size="medium"></el-input>
          </div>
          <div class="demo-input-suffix" style="margin: 5px;display: flex;align-items: center;">
            <span style="color: rgb(119, 119, 119);font-size: 10px;padding-left: 10px;
              font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">后续登陆所需密钥</span>
            <span style="margin-left: 15px;font-family: lpc;font-size: 30px;text-align: center;color: rgb(0, 153, 204)">
              &#xE8D7;</span>
            <el-input @focus="tips('#password','请确保密码不少于六个字符，且应包括数字、字母和符号（例如！和&）这些元素','2')" id="password"
              placeholder="输入密钥" suffix-icon="el-icon-date" v-model="password" show-password
              style="width: 150px;font-size: 10px;margin-left: 20px;" size="medium"></el-input>
          </div>
          <div class="demo-input-suffix" style="margin: 5px;display: flex;align-items: center;">
            <span style="margin-left: 15px;font-family: lpc;font-size: 30px;text-align: center;color: rgb(0, 153, 204)">
              &#xE7F2;</span>
            <el-input @focus="tips('#telephone','后续即将提供手机验证功能','1')" id="telephone" placeholder="移动电话"
              suffix-icon="el-icon-date" v-model="telephone" style="width: 150px;font-size: 10px;margin-left: 20px;"
              size="medium"></el-input>
            <span style="color: rgb(119, 119, 119);font-size: 10px;padding-left: 10px;
              font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">后续用于登陆验证及密码找回</span>
          </div>
          <div class="demo-input-suffix" style="margin: 5px;display: flex;align-items: center;">
            <span style="color: rgb(119, 119, 119);font-size: 10px;padding-left: 10px;
                font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">点击注册，即表示你同意接受我们的条款、数据使用政策和 Cookie 政策。
              你可能会收到我们的邮件或者短信通知。</span>
          </div>
          <div class="demo-input-suffix"
            style="margin: 10px 5px;display: flex;align-items: center;justify-content: center;">
            <el-row>
              <el-button type="success" plain style="width: 150px;" @click="register">注册</el-button>
            </el-row>
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

  .midimg {
    font-size: 25px;
  }

</style>

<script>
  export default {
    name: "register",
    data() {
      return {
        studentid: "",
        realname: "",
        firstname: "",
        secondname: "",
        sex: 0,
        college: "",
        discipline: "",
        grade: "",
        email: "",
        vervode: "",
        password: "",
        telephone: "",
        birthday: "",
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
      };
    },
    methods: {
      tips(id, message, flag) {
        layer.tips(message, id, {
          tips: [flag, '#3d4579c2'],
          time: 3000,
        });
      },
      birtips(id, message, flag) {
        layer.tips(message, id, {
          tips: [flag, '#3d4579c2'],
          time: 3000,
        });
      },
      changesex(param) {
        if (param == 'boy') {
          this.sex = 0;
        } else if (param == 'girl') {
          this.sex = 1;
        }
      },
      sendEmail() {
        let model = this;
        if (this.studentid == '') {
          this.$notify({
            title: 'warning',
            message: '你的学号未填写!',
            type: 'warning'
          });
        } else if (this.email == '') {
          this.$notify({
            title: 'warning',
            message: '你的邮箱未填写!',
            type: 'warning'
          });
        } else {
          this.axios({
            method: "POST",
            url: 'http://localhost:8080/ssm/user/sendvervode',
            data: {
              email: this.email,
              student_id: this.studentid,
            }
          }).then(function (res) {
            if (res.data.status == "success") {
              model.$notify({
                title: res.data.status,
                message: res.data.message,
                type: 'success'
              });
            }
            if (res.data.status == "existed") {
              model.$notify.info({
                title: res.data.status,
                message: res.data.message,
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
      register() {
        let model = this;
        this.realname = this.firstname + this.secondname;
        // if (this.firstname == '' || this.secondname == '' || this.studentid == '' || this.grade == '' ||
        //   this.college== '' || this.discipline == '' || this.sex == '' || this.birthday == '' ||
        //   this.email == '' || this.vervode == '' || this.password == '' || this.telephone == '') {
        //     this.$notify({
        //     title: 'warning',
        //     message: '信息未填写完整！',
        //     type: 'warning'
        // });
        // }
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/user/register',
          data: {
            student_id: this.studentid,
            realname: this.realname,
            college: this.college,
            discipline: this.discipline,
            password: this.password,
            grade: this.grade,
            sex: this.sex,
            birthday: this.birthday,
            email: this.email,
            telephone: this.telephone,
            vervode: this.vervode,
          }
        }).then(function (res) {
          if (res.data.status == "success") {
            model.$notify({
              title: res.data.status,
              message: res.data.message,
              type: 'success'
            });
          }
          if (res.data.status == "codeerror") {
            model.$notify.info({
              title: res.data.status,
              message: res.data.message,
            });
          }
          if (res.data.status == "registered") {
            model.$notify.info({
              title: res.data.status,
              message: res.data.message,
            });
          }
        }).catch(function (err) {
          model.$notify.error({
            title: 'error',
            message: '服务器开小差了，请稍后重试!'
          });
        });
      },
    }
  };

</script>
