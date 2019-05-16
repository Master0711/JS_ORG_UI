<template>
  <div style="width:180px;padding: 10px;overflow-y: auto;overflow-x: hidden;">
    <!-- 普通会员菜单栏 -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" style="min-height:490px;" v-bind:class="{longmenu:!isCollapse}" id="menu"
      v-show="role == 'ordinary'">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span slot="title">个人中心</span>
        </template>
        <router-link to="personalInf" tag="el-menu-item" class="childrenitem" style="min-width: 180px;" index="1-1">
          信息查看/修改
        </router-link>
        <el-submenu index="1-2" v-if="isdirector">
          <template slot="title">会员管理端</template>
          <router-link to="rideRecord" tag="el-menu-item" index="1-2-1">
            系内成员
          </router-link>
          <router-link to="rideRecord" tag="el-menu-item" index="1-2-2">
            审核注册
          </router-link>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">活动</span>
        </template>
        <router-link to="eventsGallery" tag="el-menu-item" class="childrenitem" style="min-width: 180px;" index="2-1">
          活动展示
        </router-link>
        <router-link to="eventsList" tag="el-menu-item" class="childrenitem" style="min-width: 180px;" index="2-2">
          活动报名
        </router-link>
        <router-link to="showActivity" tag="el-menu-item" class="childrenitem" style="min-width: 180px;" index="2-3">
          我的活动
        </router-link>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">通知</span>
        </template>
        <router-link to="eventsGallery" tag="el-menu-item" class="childrenitem" style="min-width: 180px;" index="3-1">
          查看通知
        </router-link>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">乘车系统</span>
        </template>
        <router-link to="trainList" tag="el-menu-item">
          查看车次
        </router-link>
        <router-link to="rideRecord" tag="el-menu-item">
          乘车记录
        </router-link>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">就业系统</span>
        </template>
        <el-menu-item index="5-1">职业标签</el-menu-item>
        <el-menu-item index="2-2">获取推荐</el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- 管理会员 -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" style="min-height:490px;height: 490px;overflow-y:scroll;overflow-x: hidden;"
      v-bind:class="{longmenu:!isCollapse}" id="menu" v-show="role == 'menber'">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span slot="title">个人中心</span>
        </template>
        <router-link to="personalInf" tag="el-menu-item" class="childrenitem" style="min-width: 180px;" index="1-1">
          信息查看/修改
        </router-link>
        <el-submenu index="1-2">
          <template slot="title">会员管理端</template>
          <router-link to="memberInformation" tag="el-menu-item" index="1-2-1">
            会员信息
          </router-link>
          <router-link to="registrationReview" tag="el-menu-item" index="1-2-2">
            审核注册
          </router-link>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">活动</span>
        </template>
        <router-link to="eventsGallery" tag="el-menu-item" class="childrenitem" style="min-width: 180px;" index="2-1">
          活动展示
        </router-link>
        <router-link to="eventsList" tag="el-menu-item" class="childrenitem" style="min-width: 180px;" index="2-2">
          活动报名
        </router-link>
        <router-link to="showActivity" tag="el-menu-item" class="childrenitem" style="min-width: 180px;" index="2-3">
          我的活动
        </router-link>
        <el-submenu index="2-3">
          <template slot="title">活动管理端</template>
          <router-link to="addActivity" tag="el-menu-item" index="2-3-1">
            发布活动
          </router-link>
          <router-link to="activityMg" tag="el-menu-item" index="2-3-2">
            活动列表
          </router-link>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">通知</span>
        </template>
        <router-link to="announcementList" tag="el-menu-item" class="childrenitem" style="min-width: 180px;"
          index="3-1">
          查看通知
        </router-link>
        <el-submenu index="3-2">
          <template slot="title">通知管理端</template>
          <router-link to="releaseNotice" tag="el-menu-item" index="3-2-1">
            发布通知
          </router-link>
          <router-link to="announcementList" tag="el-menu-item" index="3-2-2">
            删除通知
          </router-link>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">乘车系统</span>
        </template>
        <router-link to="trainList" tag="el-menu-item" index="4-1">
          查看车次
        </router-link>
        <router-link to="rideRecord" tag="el-menu-item" index="4-2">
          乘车记录
        </router-link>
        <el-submenu index="4-3">
          <template slot="title">乘车管理端</template>
          <router-link to="addTrain" tag="el-menu-item" index="4-3-1">
            发布车次
          </router-link>
          <router-link to="rideRecord" tag="el-menu-item" index="4-3-2">
            查看车次
          </router-link>
          <router-link to="ticketIng" tag="el-menu-item" index="4-3-3">
            票务审核
          </router-link>
        </el-submenu>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">就业系统</span>
        </template>
        <router-link to="careerLabel" tag="el-menu-item" index="5-1">
          职业标签
        </router-link>
        <router-link to="recommend" tag="el-menu-item" index="5-2">
          获取推荐
        </router-link>
        <el-submenu index="5-3">
          <template slot="title">就业管理端</template>
          <router-link to="employmentReview" tag="el-menu-item" index="5-3-1">
            就业信息审核
          </router-link>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div class="circle" style="margin-left: 130px;margin-top: 5px;" @click="showicon(false)" v-show="change"><span
        style="font-family: lpc">&#xE72B;</span></div>
    <div class="circle" style="margin-left: 20px;margin-top: 5px;" @click="showicon(true)" v-show="!change"><span
        style="font-family: lpc">&#xE72A;</span></div>
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 490px;
  }

  .childrenitem {
    height: 45px;
    line-height: 45px;
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
    text-align: center;
    background: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .longmenu {
    width: 180px;
  }

</style>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        change: true,
        role: 'menber',
        isdirector: true,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showicon(param) {
        this.isCollapse = !param;
        if (!param) {
          this.change = false;
        } else {
          this.change = true;
        }
      },
    }
  };

</script>
