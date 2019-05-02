<template>
    <div style="width:100%;">
        <div style="width: 100%;height:65px;display: flex;flex-direction: column;
        position: sticky;z-index: 1000;top: 0px;background-color: white;" v-show="show_nav">
            <div style="width: 100%;height:65px;display: flex;justify-content: space-between;">
                <div style="width: 50%;height: 100%;display: flex;align-items: center;margin-left: 240px;">
                    <img src="static/image/boat.png" style="width: 45px;height: 45px;">
                    <p style="margin: 20px;font-size: 20px;padding-top: 20px;">JS Association</p>
                </div>
                <div style="width: 50%;height: 100%;display: flex;align-items: center;">
                    <div style="width: 250px;height: 100%;display: flex;align-items: center;margin-top: 25px;">
                        <span class="NavigationBar">
                            <!-- <p class="NavigationBarp">活动</p> -->
                            <!-- <a href="" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;"></a> -->
                            <router-link to="showActivity" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">
                                活动</router-link>
                        </span>
                        <span class="NavigationBar">
                            <router-link to="eventsGallery" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">
                                公告</router-link>
                        </span>
                        <span class="NavigationBar">
                            <router-link to="addActivity" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">
                                测试</router-link>
                        </span>
                        <span class="NavigationBar">
                            <a href="" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">关于我们</a>
                        </span>
                    </div>
                    <div style="margin: 0px 0px 0px 45px;">
                        <img id="login" src="static/image/avatar.jpg" style="width: 35px;height: 35px;" 
                            @mousemove="setList('login','loginchild')">
                        <div id="loginchild" style="display: none;background-color: rgba(68, 68, 68, 0.452);
                            margin: 5px 0 0 -40px;" @mousemove="setList('login','loginchild')" @mouseout="outList('loginchild')">
                            <div>
                                <button class="sbutton write button_style loginbutton" @click="loginclick()">
                                    注册/登陆
                                </button>
                            </div>
                            <div>
                                <button class="sbutton write button_style loginbutton">
                                    个人中心
                                </button>
                            </div>
                            <div>
                                <button class="sbutton write button_style loginbutton">
                                    退出登陆
                                </button>
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
                            <a href="" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">活动</a>
                        </span>
                        <span class="NavigationBar">
                            <a href="" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">公告</a>
                        </span>
                        <span class="NavigationBar">
                            <a href="" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">招聘信息</a>
                        </span>
                        <span class="NavigationBar">
                            <a href="" class="NavigationBarp" style="color: #000;padding-bottom: 2.5px;">关于我们</a>
                        </span>
                    </div>
                    <div style="margin: 0px 45px 0px 15px;">
                        <img id="loginf" src="static/image/avatar.jpg" style="width: 35px;height: 35px;" 
                            @mousemove="setList('loginf','loginchildf')">
                        <div id="loginchildf" style="display: none;background-color: rgba(68, 68, 68, 0.452);
                            margin: 5px 0 0 -40px;" @mousemove="setList('loginf','loginchildf')" @mouseout="outList('loginchildf')">
                            <div>
                                <button class="sbutton write button_style loginbutton" @click="loginclick()">
                                    注册/登陆
                                </button>
                            </div>
                            <div>
                                <button class="sbutton write button_style loginbutton">
                                    个人中心
                                </button>
                            </div>
                            <div>
                                <button class="sbutton write button_style loginbutton">
                                    退出登陆
                                </button>
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
                    <img alt="" src="static/image/boat.png" style="width: 35px; height: auto;" />
                    <p style="margin: 0px 15px;padding-top: 10px;">JS Association</p>
                </div>
                <h2 style="color: rgba(0, 0, 0, 0.8);font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;padding-top: -20px;">账号</h2>
                <input class="usual" placeholder="电子邮件或电话" v-model="id" style="height: 20px;"/>
                <span style="font-size: 12px;">没有账户?<a class="usual">创建一个</a></span>
                <div><button class="sbutton blue" style="float: right;" @click="next_step()">下一步</button></div>
            </div>
            <div v-show="model=='pwd'" class="login-blk" ref="pwd" style="height: 100%;padding: 10px 30px 20px 30px;">
                <div style="display: flex; justify-content: flex-start; align-items: center;">
                    <img alt="" src="static/image/boat.png" style="width: 35px; height: auto;" />
                    <p style="margin: 0px 15px;padding-top: 10px;">JS Association</p>
                </div>
                <div style="width: 100%; height: auto; margin-top: 5px; line-height: 25px;">
                    <h2 style="color: rgba(0, 0, 0, 0.8);font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">输入密码</h2>
                    <span style="display: flex; align-items: center;">
                        <i style="margin: 0px 5px; font-family: Segoe MDL2; font-size: 12px; font-style: normal; color: rgba(36,36,36,0.8); cursor: pointer;font-family: lpc;" @click="model='input'">&#xE0A6;</i>
                        <p style="font-size: 12px; color: rgba(36,36,36,0.6);">{{this.id}}</p>
                    </span>
                </div>
                <input type="password" class="usual" placeholder="密码" v-model="pwd" style="height: 20px;"/>
                <a class="usual">忘记密码了</a>
                <div><button class="sbutton blue" style="float: right;">登录</button></div>
            </div>
        </div>
    </div>
        
</template>

<style>
    @font-face {
        font-family: lpc;
        src: url(../../static/font/segmdl2.ttf);
    }
    * { 
        padding:0; 
        margin:0; 
        border:0; 
    } 
    .NavigationBar{
        margin: 7px;
    }
    .NavigationBarp{
        font-size: 15px;
        text-align: center;
    }
    a:link{
        text-decoration:none;
    }
    a:hover{
        border-bottom:  2px solid rgba(89, 22, 245, 0.493);
    }
    .loginbutton{
        border: 0px;
        margin: 5px 0px;
        color: #fff;
        font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;
        font-size: 15px;
    }
</style>


<script>
// import SweetVue from '../../static/JavaScript/SweetVue-1.0.0.js'
export default {
    name:'navicationBar',
    data () {
        return {
            show_nav:true,
            model:'input',
            id:'',
            pwd:'',
        }
    },
    methods: {
        setList: function(pr1,pr2) {
             var child = document.getElementById(pr2); 
             var td2 = document.getElementById(pr1); 
             var t=td2.offsetTop; 
             var l=td2.offsetLeft; 
             child.style.position="absolute" ; 
             child.style.left = l; 
             child.style.top = t ; 
             child.style.display="block";
        },
        outList:function(pr2){
            document.getElementById(pr2).style.display="none";
        },
        loginclick:function(){
            layer.open({
            type: 1
            ,skin: 'layer_bg'
            ,area: ['440px', '280px']
            ,title: 'login'
            ,shade: 0.6
            ,maxmin: true
            ,anim: 1
            ,content:$('#loginwindow')
          });
        },
        next_step() {
            if (!(RegularManager.isPhone(this.id) || RegularManager.isEmail(this.id))) {
                Sweet.barWarning(1, "当前帐号既不是电子邮件也不是电话");
                return 0;
            }
            else {
                this.model = "pwd";
            }
        },
        login(){
            console.log(this.id);
        },
    }
}
</script>

