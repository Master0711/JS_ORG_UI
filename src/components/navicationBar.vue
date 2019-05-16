<template>
  <div style="width:100%;">
    <div style="width: 100%;height:65px;display: flex;flex-direction: column;
        position: sticky;z-index: 1000;top: 0px;background-color: white;" v-show="show_nav">
      <div style="width: 100%;height:65px;display: flex;justify-content: space-between;">
        <div style="width: 50%;height: 100%;display: flex;align-items: center;margin-left: 240px;cursor: pointer;"
          @click="goBackTohome">
          <img src="static/image/boat.png" style="width: 45px;height: 45px;">
          <p style="margin: 20px;font-size: 20px;padding-top: 20px;">JS Association</p>
        </div>
        <div style="width: 50%;height: 100%;display: flex;align-items: center;">
          <div style="width: 250px;height: 100%;display: flex;align-items: center;margin-top: 25px;">
            <span class="NavigationBar">
              <router-link to="eventsGallery" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">活动
              </router-link>
            </span>
            <span class="NavigationBar">
              <router-link to="eventsList" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">公告
              </router-link>
            </span>
            <span class="NavigationBar">
              <router-link to="addActivity" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">乘车
              </router-link>
            </span>
            <span class="NavigationBar">
              <router-link to="addTrain" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">就业
              </router-link>
            </span>
          </div>
          <div style="margin: 0px 0px 0px 45px;">
            <img id="login" src="static/image/avatar.jpg" style="width: 35px;height: 35px;"
              @mousemove="setList('login','loginchild')">
            <div id="loginchild" style="display: none;background-color: rgba(68, 68, 68, 0.452);
                            margin: 5px 0 0 -40px;" @mousemove="setList('login','loginchild')"
              @mouseout="outList('loginchild')">
              <div>
                <button class="sbutton write button_style loginbutton" @click="loginclick()">注册/登陆</button>
              </div>
              <div>
                <button class="sbutton write button_style loginbutton">个人中心</button>
              </div>
              <div>
                <button class="sbutton write button_style loginbutton" @click="loginout">退出登陆</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 930px;height: 1px;margin: auto;background-color: black;overflow: hidden;
            opacity: 0.2;"></div>
    </div>
    <div style="width: 100%;height:65px;display: flex;flex-direction: column;
            position: sticky;z-index: 1000;top: 0px;background-color: white;" v-show="!show_nav">
      <div style="width: 100%;height:65px;display: flex;justify-content: space-between;">
        <div style="width: 50%;height: 100%;display: flex;align-items: center;margin-left: 40px;">
          <img src="static/image/boat.png" style="width: 45px;height: 45px;">
          <p style="margin-left: 20px;font-size: 20px;margin-top: -10px;">JS Association</p>
          <p style="font-size: 10px;margin-top: 45px;margin-left: -60px;">Our Cloud home</p>
        </div>
        <div style="height: 100%;display: flex;align-items: center;">
          <div style="width: 250px;height: 100%;display: flex;align-items: center;margin-top: 25px;">
            <span class="NavigationBar">
              <a href class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">活动</a>
            </span>
            <span class="NavigationBar">
              <a href class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">公告</a>
            </span>
            <span class="NavigationBar">
              <a href class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">招聘信息</a>
            </span>
            <span class="NavigationBar">
              <a href class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">关于我们</a>
            </span>
          </div>
          <div style="margin: 0px 45px 0px 15px;">
            <img id="loginf" src="static/image/avatar.jpg" style="width: 35px;height: 35px;"
              @mousemove="setList('loginf','loginchildf')">
            <div id="loginchildf" style="display: none;background-color: rgba(68, 68, 68, 0.452);
                            margin: 5px 0 0 -40px;" @mousemove="setList('loginf','loginchildf')"
              @mouseout="outList('loginchildf')">
              <div>
                <button class="sbutton write button_style loginbutton" @click="loginclick()">注册/登陆</button>
              </div>
              <div>
                <button class="sbutton write button_style loginbutton">个人中心</button>
              </div>
              <div>
                <button class="sbutton write button_style loginbutton">退出登陆</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="loginwindow" class="banner" style="position: relative; width: 100%; height: 100%; display: flex; 
            justify-content: center; align-items: center;overflow: hidden;display: none;">
      <div v-show="model=='input'" class="login-blk" ref="id" style="height: 100%;padding: 10px 30px 20px 30px;">
        <div style="display: flex; justify-content: flex-start; align-items: center;">
          <img alt src="static/image/boat.png" style="width: 35px; height: auto;">
          <p style="margin: 0px 15px;padding-top: 10px;">JS Association</p>
        </div>
        <h2 style="color: rgba(0, 0, 0, 0.8);font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;padding-top: -20px;">账号
        </h2>
        <input class="usual" placeholder="电子邮件" v-model="email" style="height: 20px;">
        <span style="font-size: 12px;">
          没有账户?
          <a class="usual" @click="goRegister">创建一个</a>
        </span>
        <div>
          <button class="sbutton blue" style="float: right;" @click="next_step()">下一步</button>
        </div>
      </div>
      <div v-show="model=='pwd'" class="login-blk" ref="pwd" style="height: 100%;padding: 10px 30px 20px 30px;">
        <div style="display: flex; justify-content: flex-start; align-items: center;">
          <img alt src="static/image/boat.png" style="width: 35px; height: auto;">
          <p style="margin: 0px 15px;padding-top: 10px;">JS Association</p>
        </div>
        <div style="width: 100%; height: auto; margin-top: 5px; line-height: 25px;">
          <h2 style="color: rgba(0, 0, 0, 0.8);font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">输入密码</h2>
          <span style="display: flex; align-items: center;">
            <i style="margin: 0px 5px; font-family: Segoe MDL2; font-size: 12px; font-style: normal; color: rgba(36,36,36,0.8); cursor: pointer;font-family: lpc;"
              @click="model='input'">&#xE0A6;</i>
            <p style="font-size: 12px; color: rgba(36,36,36,0.6);">{{this.id}}</p>
          </span>
        </div>
        <input type="password" class="usual" placeholder="密码" v-model="pwd" style="height: 20px;">
        <a class="usual">忘记密码了</a>
        <div>
          <button class="sbutton blue" style="float: right;" @click="login_f">登录</button>
        </div>
      </div>
    </div>
    <div id="registerwindow" style="display: none;">
      <register></register>
    </div>
  </div>
</template>

<style>
  @font-face {
    font-family: lpc;
    src: url(../../static/font/segmdl2.ttf);
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  .NavigationBar {
    margin: 7px;
  }

  .NavigationBarp {
    font-size: 15px;
    text-align: center;
  }

  a:link {
    text-decoration: none;
  }

  a:hover {
    border-bottom: 2px solid rgba(89, 22, 245, 0.493);
  }

  .loginbutton {
    border: 0px;
    margin: 5px 0px;
    color: #fff;
    font-family: "Arial", "STKaiti", "黑体", "宋体", sans-serif;
    font-size: 15px;
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
import register from "@/components/register"
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from "vuex";
  export default {
    name: "navicationBar",
    data() {
      return {
        scroll: '',
        show_nav: true,
        model: "input",
        id: "",
        pwd: "",
        email: '',
        publickey: '',
        encryptpwd: '',
      };
    },
    components: {
      register
    },
    computed: {
      ...mapState({
        user: "user"
      }),
    },
    methods: {
      setList: function (pr1, pr2) {
        var child = document.getElementById(pr2);
        var td2 = document.getElementById(pr1);
        var t = td2.offsetTop;
        var l = td2.offsetLeft;
        child.style.position = "absolute";
        child.style.left = l;
        child.style.top = t;
        child.style.display = "block";
      },
      scrollFunc: function (e) {
        e = e || window.event;
        let scroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        var fullheight = document.body.offsetHeight;
        if (e.wheelDelta) {
          var a = e.wheelDelta;
          if (a > 0) {
            scroll -= fullheight / 6;
            if (scroll > 600) {
              this.show_nav = false;
            } else {
              this.show_nav = true;
            }
          }
          if (a < 0) {
            scroll += fullheight / 6;
            if (scroll > 600) {
              this.show_nav = false;
            } else {
              this.show_nav = true;
            }
          }
        }
      },
      outList: function (pr2) {
        document.getElementById(pr2).style.display = "none";
      },
      loginclick: function () {
        layer.open({
          type: 1,
          skin: "layer_bg",
          area: ["440px", "280px"],
          title: "login",
          shade: 0,
          maxmin: true,
          anim: 1,
          content: $("#loginwindow")
        });
      },
      next_step() {
        this.getpublickey();
        this.model = "pwd";
      },
      getpublickey() {
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/user/getpublickey",
            data: {}
          })
          .then((res) => {
            if (res.data.status == "success") {
              this.publickey = res.data.publickey;
              console.log(this.publickey);

            }
            if (res.data.status == "someerror") {
              this.$notify.info({
                title: res.data.status,
                message: "公钥获取失败，请稍后重试！"
              });
            }
          })
          .catch((err) => {
            this.$notify.error({
              title: "error",
              message: "服务器开小差了，请稍后重试!"
            });
          });
      },
      login_f() {
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(this.publickey);
        this.encryptpwd = encrypt.encrypt(this.pwd);
        console.log(this.encryptpwd);
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/user/login",
            data: {
              studentid: this.email,
              encryptpwd: this.encryptpwd,
            }
          })
          .then((res) => {
            if (res.data.status == "success") {
              if (res.data.message == "password is correct") {
                this.$notify({
                  title: 'success',
                  message: '登录成功',
                  type: 'success'
                });
                layer.closeAll();
                this.$router.push("/mainBody");
              } else {
                this.$notify.info({
                  title: "账号或密码错误",
                  message: res.data.message
                });
              }
            }
            if (res.data.status == "someerror") {
              this.$notify.info({
                title: res.data.status,
                message: "初始化活动状态出错！"
              });
            }
          })
          .catch((err) => {
            this.$notify.error({
              title: "error",
              message: "服务器开小差了，请稍后重试!"
            });
          });
      },
      identitycheck() {
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/user/identitycheck",
            data: {}
          })
          .then((res) => {
            if (res.data.status == "success") {
              if (!res.data.islogin) {
                this.$router.push("/home");
                this.$notify.info({
                  title: "tips",
                  message: "您尚未登录，请登陆后重试！"
                });
              }
            }
            if (res.data.status == "someerror") {
              this.$notify.info({
                title: res.data.status,
                message: "请稍后重试！"
              });
            }
          })
          .catch((err) => {
            this.$notify.error({
              title: "error",
              message: "服务器开小差了，请稍后重试!"
            });
          });
      },
      initActivity() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/activity/adjustActivity",
            data: {}
          })
          .then(function (res) {
            if (res.data.status == "success") {

            }
            if (res.data.status == "someerror") {
              model.$notify.info({
                title: res.data.status,
                message: "初始化活动状态出错！"
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
      initTrain() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/train/adjustTrainList",
            data: {}
          })
          .then(function (res) {
            if (res.data.status == "success") {

            }
            if (res.data.status == "someerror") {
              model.$notify.info({
                title: res.data.status,
                message: "初始化活动状态出错！"
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
      goBackTohome() {
        this.$router.push("/home");
      },
      loginout() {
        console.log("jjjj");
        this.$router.push("/home");
        this.logout();
      },
      ...mapMutations(["logout"]),
      ...mapActions(["login"]),
      goRegister(){
        layer.closeAll();
        layer.open({
          type: 1,
          skin: "layer_bg",
          area: ["560px", "600px"],
          title: "register now",
          shade: 0,
          maxmin: true,
          anim: 1,
          content: $("#registerwindow")
        });
      },
    },
    watch: {
      $route(to, from) {
        console.log(to.path);
        if (to.path != "/home") {
          this.identitycheck();
        }
      }
    },
    mounted() {
      if (document.addEventListener) {
        document.addEventListener('scroll', this.scrollFunc, false);
      }
      window.onmousewheel = document.onmousewheel = this.scrollFunc;
      this.initActivity();
      this.initTrain();
    }
  };

</script>
