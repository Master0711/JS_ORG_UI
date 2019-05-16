<template>
  <div style="width: 85%;height: 580px;background-image: url(static/image/bg2.jpg);
            background-repeat: no-repeat;background-size: 100% 100%;margin: 5px;border-radius: 5% 5% 45% 5%;
            display: flex;align-items: center;justify-content: center;flex-direction: column;">
    <div style="width:100%;height:100%;background-color:rgba(255,255,255,0.5);
                display: flex;flex-direction: row;align-items: center;justify-content: center;">
      <md-card style="width: 100%;height: 400px;">
        <md-card-media class="swiper-inner" style="height: 400px;">
          <!-- swiper -->
          <swiper :options="swiperOption" style="height: 400px;">
            <swiper-slide style="width: 300px;height: 400px;background-color: rgb(238, 238, 238 , 0.04)"
              v-for="(item,index) in announcementlist" :key="item">
              <div class="active">
                <div style="width: 100%;height: 70px;">
                  <p class="activep">{{item.theme}}</p>
                  <p class="activep2">{{item.time}}</p>
                </div>
                <div style="width:100%;">
                  <img src="static/image/James-2.jpg" class="activeimg">
                </div>
                <div style="width: 90%;font-size: 15px;padding: 10px;min-height: 98px;max-height: 98px;
                  overflow-x: hidden; overflow-y: auto;" class="activep">
                  <div style="min-height: 98px;max-height: 98px;width: 300px;overflow-x: hidden;">
                      {{item.content}}
                  </div>
                </div>
                <div style="font-size: 15px;text-align: right;padding-right: 15px;margin-top: 5px;" class="activep">了解详情click</div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </md-card-media>
      </md-card>
    </div>
    <div style="display: flex;flex-direction: row-reverse;width: 100%;">
      <div style="margin-top: -60px;text-align: right;font-size: 45px;color: red;opacity: 0.6;">activity</div>
    </div>
  </div>
</template>

<style>
  .active {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
  }

  .activeimg {
    width: 100%;
    height: 180px;
    border-radius: 5%;
  }

  .activep {
    text-align: center;
    font-family: 'Arial', 'STKaiti', '黑体', '宋体', sans-serif;
    font-size: 23px;
  }

  .activep2 {
    text-align: center;
    font-family: 'Arial', 'STKaiti', '黑体', '宋体', sans-serif;
    font-size: 23px;
    text-align: left;
    font-size: 10px;
    color: #fff;
    margin: 20px 0 0 20px;
  }

  .swiper-container {
    height: 300px;
    width: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
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

  .swiperfont {
    font-size: 20px;
    font-family: 'Arial', 'NSimSun', '黑体', '宋体', sans-serif;
    color: white;
    padding-left: 70px;
  }

  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

</style>


<script>
  import 'swiper/dist/css/swiper.css'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    name: "layoutBg3",
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          },
        },
        pagination: {
          el: '.swiper-pagination'
        },
        announcementlist: [],
      }
    },
    components: {
      swiper,
      swiperSlide,
      LocalSwiper: VueAwesomeSwiper.swiper,
      LocalSlide: VueAwesomeSwiper.swiperSlide,
    },
    methods: {
      getannouncementlist() {
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/announcement/getShowNotice',
          data: {}
        }).then((res) => {
          if (res.data.status == "success") {
            this.announcementlist = res.data.announcementlist;
            this.$notify({
              title: res.data.status,
              message: "通知获取成功！",
              type: 'success'
            });
          }
          if (res.data.status == "someerror") {
            this.$notify.info({
              title: res.data.status,
              message: "服务器内部错误，请稍后重试！",
            });
          }
        }).catch((err) => {
          this.$notify.error({
            title: 'error',
            message: '服务器开小差了，请稍后重试!'
          });
        });
      },
    },
    mounted() {
      this.getannouncementlist();
    }
  };

</script>
