<template>
  <div style="width: 85%;height: 580px;margin: 5px;border-radius: 5%;">
    <div style="width:100%;height:100%;background-color:rgba(255,255,255,0.1);display: flex;
                flex-direction: column;align-items: center;justify-content: center;">
      <swiper ref="awesomeSwiperA" :options="swiperOptionA" @set-translate="onSetTranslate"
        style="width: 90%;height: 330px;padding-top: 30px;">
        <!-- slides -->
        <swiper-slide>
          <div class="swiperdiv" style="background-image: url(static/image/active1.jpg);">
            <p class="swiperfont">欧冠出局后又迎三场硬仗！
              曼联11天或输掉一个赛季，联赛要崩了</p>
            <div class="swiperfont" style="margin: 20px 0 0 20px;">
              <p style="color: #000;border: 1px solid rgb(0, 0, 0);">查看详情</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiperdiv" style="background-image: url(static/image/active3.jpg);">
            <p class="swiperfont">在法国街头，离圣母院远吗？</p>
            <div class="swiperfont" style="margin: 20px 0 0 20px;">
              <p style="color: #000;border: 1px solid rgb(0, 0, 0);">查看详情</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiperdiv" style="background-image: url(static/image/active4.jpg);">
            <p class="swiperfont">这么多乐谱，如何看得完！</p>
            <div class="swiperfont" style="margin: 20px 0 0 20px;">
              <p style="color: #000;border: 1px solid rgb(0, 0, 0);">查看详情</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiperdiv" style="background-image: url(static/image/active2.jpg);">
            <p class="swiperfont">静谧的小镇，一起去旅行 ~</p>
            <div class="swiperfont" style="margin: 20px 0 0 20px;">
              <p style="color: #000;border: 1px solid rgb(0, 0, 0);">查看详情</p>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div style="width: 100%;height: 200px;background-repeat: no-repeat;background-size: 100% 100%;
                    background-image: url(static/image/activebg1.jpg)">

      </div>
    </div>
  </div>
</template>

<style>
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
    name: 'layoutBg2',
    data() {
      return {
        swiperOptionA: {
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      onSetTranslate() {
        console.log('onSetTranslate')
      }
    }
  }
</script>
