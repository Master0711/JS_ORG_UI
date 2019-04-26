<template>
  <div style="width: 850px;height: 525px;background-image: url();
        background-repeat: no-repeat;background-size: 100% 100%;justify-content: center;display: flex;">
    <div style="display: flex;flex-direction: column;">
      <div style="width:370px;display: flex;flex-direction: column;padding:10px;">
        <div style="display:flex;">
          <img src="static/image/register_font1.jpg">
          <img src="static/image/registration.png" style="width:24px;height:24px;padding-top:22px;">
        </div>
        <div style="padding: 10px;width: 420px;display: flex;flex-direction: column;margin-left: -50px;">
          <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 25px;padding-left: 15px;">注册</div>
          <div class="demo-input-suffix" style="margin: 5px;">
            <el-input @focus="tips('#firstname','你的姓/名是?',4)" id="firstname" placeholder="学号" v-model="firstname" style="width: 100px;font-size: 10px;" size="medium">
              <i slot="suffix" class="el-input__icon el-icon-s-check"></i>
            </el-input>
            <el-input @focus="tips('#secondname','你的姓/名是?',1)" id="secondname" placeholder="名" suffix-icon="el-icon-date" v-model="secondname"
              style="width: 120px;font-size: 10px;margin-left: 10px;" size="medium"></el-input>
            <el-input @focus="tips('#studentid','你的学生号是?',2)" id="studentid" placeholder="学号" suffix-icon="el-icon-date" v-model="studentid"
              style="width: 110px;font-size: 10px;margin-left: 10px;" size="medium"></el-input>
          </div>
          <div class="demo-input-suffix" style="margin: 5px 5px 0 5px;">
            <!-- <span style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-right: 50px;">学号</span> -->
            <el-input @focus="tips('#college','请完整填入你的学院?',4)" id="college" placeholder="学院" suffix-icon="el-icon-date" v-model="college"
              style="width: 170px;font-size: 10px;" size="medium"></el-input>
            <el-input @focus="tips('#discipline','请完整填入你的专业?',2)" id="discipline" placeholder="专业" suffix-icon="el-icon-date" v-model="discipline"
              style="width: 170px;font-size: 10px;margin-left: 10px;" size="medium"></el-input>
          </div>
          <div class="demo-input-suffix" style="margin:5px;">
            <el-input placeholder="年级" suffix-icon="el-icon-date" v-model="grade" style="width: 120px;font-size: 10px;"
              size="medium"></el-input>
            <span
              style="margin-left: 30px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 20px;">性别:</span>
            <span style="margin-left: 20px;font-family: lpc;color: rgba(0,153,204,1);font-size: 25px;">&#x2642;</span>
            <span style="margin-left: 20px;font-family: lpc;color: rgba(208,125,156,1);font-size: 15px;">&#x2640;</span>
          </div>
          <div class="demo-input-suffix" style="margin: 5px">
            <span
              style="margin-left: 5px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 20px;">
              生日:</span>
            <el-date-picker v-model="birthday" type="date" placeholder="选择日期" size="medium" 
              style="margin-left: 15px;width: 150px;">
            </el-date-picker>
            <span @mousemove="tips('#birmessage','提供生日资料将确保 JS Association 提供与你年龄相应的使用体验。','2')" id="birmessage" style="color: rgb(100, 102, 241);font-size: 15px;padding-left: 10px;
              font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">为什么需要提供生日信息?</span>
          </div>
          <div class="demo-input-suffix" style="margin: 5px;display: flex;align-items: center;">
              <el-input @focus="tips('#email','我们将会向你的邮箱发送一封邮件，以确认你的身份','4')" 
                id="email" placeholder="Email" suffix-icon="el-icon-date" v-model="email"
                style="width: 180px;font-size: 10px;" size="medium"></el-input>
              <el-row style="margin-left: 15px;">
                  <el-button type="primary" icon="el-icon-message" circle size="small"></el-button>
              </el-row>
              <el-input @focus="tips('#vervode','输入邮件中所提到的验证码','2')" id="vervode" placeholder="您收到的验证码" suffix-icon="el-icon-date" v-model="vervode" style="width: 140px;
                font-size: 10px;margin-left: 15px;" size="medium"></el-input>
          </div>
          <div class="demo-input-suffix" style="margin: 5px;display: flex;align-items: center;">
            <span style="color: rgb(119, 119, 119);font-size: 10px;padding-left: 10px;
              font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">后续登陆所需密钥</span>
            <span
              style="margin-left: 15px;font-family: lpc;font-size: 30px;text-align: center;color: rgb(0, 153, 204)">
              &#xE8D7;</span>
            <el-input @focus="tips('#password','请确保密码不少于六个字符，且应包括数字、字母和符号（例如！和&）这些元素','2')" 
              id="password" placeholder="移动电话" suffix-icon="el-icon-date" v-model="password"
              style="width: 150px;font-size: 10px;margin-left: 20px;" size="medium"></el-input>
          </div>
          <div class="demo-input-suffix" style="margin: 5px;display: flex;align-items: center;">
            <span
              style="margin-left: 15px;font-family: lpc;font-size: 30px;text-align: center;color: rgb(0, 153, 204)">
              &#xE7F2;</span>
            <el-input @focus="tips('#telephone','后续即将提供手机验证功能','1')" id="telephone" placeholder="移动电话" suffix-icon="el-icon-date" v-model="telephone"
              style="width: 150px;font-size: 10px;margin-left: 20px;" size="medium"></el-input>
            <span style="color: rgb(119, 119, 119);font-size: 10px;padding-left: 10px;
              font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">后续用于登陆验证及密码找回</span>
          </div>
          <div class="demo-input-suffix" style="margin: 5px;display: flex;align-items: center;">
              <span style="color: rgb(119, 119, 119);font-size: 10px;padding-left: 10px;
                font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">点击注册，即表示你同意接受我们的条款、数据使用政策和 Cookie 政策。
                你可能会收到我们的邮件或者短信通知。</span>
          </div>
          <div class="demo-input-suffix" style="margin: 10px 5px;display: flex;align-items: center;justify-content: center;">
            <el-row>
                <el-button type="success" plain style="width: 150px;">注册</el-button>
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
        sex: "",
        college: "",
        discipline: "",
        grade: "",
        email: "",
        vervode:"",
        password: "",
        telephone: "",
        birthday:"",
      };
    },
    methods: {
      tips(id,message,flag){  
        layer.tips(message, id, {
          tips: [flag, '#3d4579c2'],
          time: 3000,
        });
      },
    }
  };

</script>
