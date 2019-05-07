<template>
  <div style="width:180px;padding: 10px;overflow-y: auto;overflow-x: hidden;">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" style="min-height:490px;" v-bind:class="{longmenu:!isCollapse}" id="menu">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span slot="title">个人中心</span>
        </template>
        <el-menu-item index="1-1" class="childrenitem" style="min-width: 180px;">信息查看/修改</el-menu-item>
        <el-menu-item index="1-2" class="childrenitem" style="min-width: 180px;">权限升级</el-menu-item>
        <el-submenu index="1-3">
          <template slot="title">个人中心管理端</template>
          <el-menu-item index="1-3-1" class="childrenitem" style="min-width: 180px;">注册审核</el-menu-item>
          <el-menu-item index="1-3-2" class="childrenitem" style="min-width: 180px;">成员信息</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">活动</span>
        </template>
        <el-menu-item index="2-1">活动展示</el-menu-item>
        <el-menu-item index="2-2">活动报名</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">活动中心管理端</template>
          <el-menu-item index="2-3-1">参与人员</el-menu-item>
          <el-menu-item index="2-3-2">活动发起</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">乘车系统</span>
        </template>
        <!-- <el-menu-item index="2-1">报名乘车 -->
          <router-link to="showEmployment" tag="el-menu-item">
            报名乘车
          </router-link>
        <!-- </el-menu-item> -->
        <!-- <el-menu-item index="2-2">乘车记录</el-menu-item> -->
        <router-link to="employmentReview" tag="el-menu-item">
            乘车记录
          </router-link>
        <el-submenu index="1-3">
          <template slot="title">活动中心管理端</template>
          <router-link to="ticketIng" tag="el-menu-item" index="2-3-1">
            参与人员
          </router-link>
          <el-menu-item index="2-3-2">活动发起</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <div class="circle" style="margin-left: 130px;margin-top: 5px;" @click="showicon(false)" v-show="change"><span style="font-family: lpc">&#xE72B;</span></div>
    <div class="circle" style="margin-left: 20px;margin-top: 5px;" @click="showicon(true)" v-show="!change"><span style="font-family: lpc">&#xE72A;</span></div>
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 490px;
  }
  .childrenitem{
    height:45px;
    line-height:45px;
    min-width: 180px;
  }

  @font-face {
    font-family: lpc;
    src: url(../../static/font/segmdl2.ttf);
  }
  .circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.507);
    /* line-height: 50px; */
    text-align: center;
    background: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .longmenu{
    width: 180px;
  }

</style>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        change:true,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showicon(param){
        this.isCollapse = !param;
        if (!param) {
          this.change = false;
          console.log(this.$refs.menu);
          // this.$refs.menu.style.width = '70px';
          // document.getElementById("menu").className = 'el-menu--collapse el-menu';
          // document.getElementById("menu").setAttribute('style' ,'min-height:490px;width:70px;');
        }else{
          this.change = true;
        }
      },
    }
  };

</script>
