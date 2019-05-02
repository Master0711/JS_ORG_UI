<template>
  <div style="width: 850px;height: 500px;display: flex;flex-direction: column;padding: 10px;">
    <div
      style="width:100%;display: flex;flex-direction: column;justify-content: center;align-items: center;
        padding:0px 5px 5px 5px;margin-top: -15px;">
      <div style="width:370px;display:flex;padding-left: 350px;">
        <img src="static/image/activity_title.jpg">
        <img src="static/image/camping-tent.png" style="width:24px;height:24px;padding-top:22px;">
      </div>
    </div>
    <div
      style="display: flex;justify-content: flex-start;flex-direction: row;flex-wrap: wrap;overflow-y: scroll;
        overflow-x: hidden;">
      <div style="margin-left: 10px;">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover" style="width: 350px;height: 260px;border: white;cursor: pointer;">
              <div style="width: 100%;height: 100%;">
                <img src="static/image/bg2.jpg" style="width: 100%;height: 175px;;">
              </div>
              <div style="display: flex;margin: 5px;">
                <div class="fontitem">captain 6 获得NBA2K总冠军captain 6 获得NBA2K总冠军</div>
                <span style="font-family: lpc;width: 21px;height: 21px;text-align: center;padding-top: 3px;">&#xE76C;</span>
              </div>
              <div class="timeitem">4-30</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div style="margin-left: 10px;margin-top: 20px;">
            <el-row :gutter="12">
              <el-col :span="8">
                <el-card shadow="hover" style="width: 350px;height: 260px;border: white;cursor: pointer;">
                  <div style="width: 100%;height: 100%;">
                    <img src="static/image/bg1.jpg" style="width: 100%;height: 175px;;">
                  </div>
                  <div style="display: flex;margin: 5px;">
                    <div class="fontitem">captain 6 获得NBA2K总冠军captain 6 获得NBA2K总冠军</div>
                    <span style="font-family: lpc;width: 21px;height: 21px;text-align: center;padding-top: 3px;">&#xE76C;</span>
                  </div>
                  <div class="timeitem">4-30</div>
                </el-card>
              </el-col>
            </el-row>
          </div>
      <div style="margin-left: 5px;">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover" style="width: 350px;height: 250px;">
              鼠标悬浮时显示
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div style="margin-left: 5px;margin-top: 15px;">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover" style="width: 350px;height: 250px;">
              鼠标悬浮时显示
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style>
    @font-face {
        font-family: lpc;
        src: url(../../static/font/segmdl2.ttf);
    }
    .rightitem{
        margin-top: 15px;
    }
    .fontitem{
        font-family: 微软雅黑,Segoe MDL2,Segoe MDL2;
        font-size: 16px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:nowrap; 
        width: 90%;
        color: #040404;
    }
    .timeitem{
        font-family: 微软雅黑,Segoe MDL2,Segoe MDL2;
        margin-top: 8px;
        padding: 0px 0 0 305px;
        font-size: 13px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:nowrap; 
        color: #040404;
    }

</style>

<script>
  export default {
    name: 'eventsGallery',
    methods: {
      changecolor(){
          
      }  
    },
  }

</script>
