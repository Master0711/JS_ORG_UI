<template>
  <div style="width: 85%;height: 580px;
            background-repeat: no-repeat;background-size: 100% 100%;margin: 5px;
            display: flex;align-items: center;justify-content: center;flex-direction: column;">
    <div style="width:100%;height:100%;background-color:rgba(255,255,255,0.3);
                display: flex;flex-direction: column;justify-content: center;">
      <el-carousel :interval="40000" type="card" height="330px">
        <el-carousel-item v-for="item in reptiles"  :key="item">
          <h3 class="medium" style="width: 100%;height: 100%;">
            <div class="swiperdiv" v-bind:style="{backgroundImage:'url(' + item.bgimage + ')'}" style="display: flex;flex-direction: column;justify-content: flex-start;">
              <p class="swiperfont_f" style="width: 100%;text-align: center;padding-left: 0px;
                margin-top: 30px;font-size: 23px;">{{item.title}}</p>
              <p class="swiperfont_f" style="margin-top: 10px;">举办时间：{{item.time}}</p>
              <p class="swiperfont_f">举办地点：{{item.location}}</p>
              <div class="swiperfontspe_f">企业概要：{{item.content}}</div>
              <p class="swiperfont_f" style="margin-top: 10px;">岗位标签：{{item.tips}}</p>
              <div class="swiperfont_f">
                <p style="color: #000;border: 1px solid rgb(0, 0, 0);margin-left: 320px;">
                        <a :href="item.url" target="view_window" style="text-decoration: none;color:black;
                        border-bottom: 0px solid rgba(89, 22, 245, 0.493);">查看招聘简章</a></p>
              </div>
            </div>
          </h3>
        </el-carousel-item>
      </el-carousel>
      <div style="width: 100%;height: 200px;background-repeat: no-repeat;background-size: 100% 100%;
                    background-image: url(static/image/gentle-1180637.jpg)">
        <div style="display: flex;flex-direction: row;width: 100%;">
          <div
            style="margin-left: 70px;margin-top: 120px;text-align: right;font-size: 45px;color: rgb(49, 145, 235);opacity: 0.6;">
            Job Offers</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .swiperdiv {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    opacity: 0.9;
  }

  .swiperfont_f {
    font-size: 15px;
    font-family: 'Arial', 'NSimSun', '黑体', '宋体', sans-serif;
    color: rgb(0, 0, 0);
    padding-left: 70px;
    height: 40px;
    line-height: 30px;
  }
  .swiperfontspe_f{
    font-family: 'Arial', 'NSimSun', '黑体', '宋体', sans-serif;
    color: rgb(0, 0, 0);
    padding-left: 70px;
    line-height: 30px;
    font-size: 10px;
    max-width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;  
    -webkit-box-orient: vertical;
  }

</style>
<script>
  export default {
    name: 'layoutBg4',
    data() {
      return {
        bgimage: ["static/image/jobbg1.jpg", "static/image/jobbg2.jpg"],
        reptiles:[],
      }
    },
    methods: {
        getShowReptile(){
            this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/employment/getShowReptile",
            data: {}
          })
          .then((res) => {
            if (res.data.status == "success") {
                console.log(res.data);
                this.reptiles = res.data.reptiles;
            }
            if (res.data.status == "someerror") {
              this.$notify.info({
                title: res.data.status,
                message: "就业信息获取失败，请稍后重试！"
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
    },
    mounted () {
        this.getShowReptile();
    }
  }

</script>
