<template>
  <div class="common-padding">
    <div class="home-banner">
      <div class="home-video">
        <div id="subtitle" data-aos="fade-right" >
          <div class="welcome">
            <h1><span>{{ $t("index.welcome") }}</span>{{ $t("index.come") }}</h1>
            <h1>{{ $t("index.name") }}</h1>
          </div>
          <span v-for="(subtitle, index) in displaySubtitles" :key="index" :class="{ 'subtitle': true}">{{ subtitle.text }}</span>
          <div class="in-banner-more">
            <router-link :to="{ path: `/${$i18n.locale}/about` }">
              {{ $t("project.JiaZaiGD") }}
            </router-link>
          </div>
        </div>

<!--        <div id="container">-->
<!--          <div  style="position: relative">-->
<!--            <img src="@/assets/img/2023-48.png" class="people-quan" id="myImage"  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="600">-->
<!--            <img src="@/assets/img/2023-11.png" data-aos="fade-left" data-aos-delay="300" class="people">-->
<!--          </div>-->
<!--        </div>-->

        <div class="swiper-wrap" data-aos="fade-left" data-aos-delay="300">
          <swiper
              :autoplay="{
            delay:2000,
            disableOnInteraction: false,
           }"
              :effect="'cards'"
              :grabCursor="true"
              :modules="modules"
              class="mySwiper"
          >
            <swiper-slide>
                <router-link :to="{ path: `/${$i18n.locale}/development` }">
                  {{ $t("menu.customize") }}
                </router-link>
              </swiper-slide>
            <swiper-slide>
              <router-link :to="{ path: `/${$i18n.locale}/mall` }">
              {{ $t("menu.store") }}
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ path: `/${$i18n.locale}/it` }">
              {{ $t("menu.it") }}
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link :to="{ path: `/${$i18n.locale}/tvp` }">
              {{ $t("menu.tvp") }}
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
// import required modules
import { Pagination,Autoplay,EffectCards } from "swiper";

export default {
  name: "homeBanner",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay, EffectCards],
    };
  },
  data() {
    return {
      videoSrc: this.$t('video.url'), // 视频路径
      chineseSubtitles: [
        { startTime: 0, endTime: 13, text: this.$t('video.subtitles1') },
        { startTime: 14, endTime: 23, text: this.$t('video.subtitles2') },
        { startTime: 24, endTime: 37, text: this.$t('video.subtitles3') },

      ],
      chineseSimpleSubtitles: [
        { startTime: 0, endTime: 8, text: this.$t('video.subtitles1') },
        { startTime: 9, endTime: 15, text: this.$t('video.subtitles2') },
        { startTime: 16, endTime: 24, text: this.$t('video.subtitles3') },
      ],
      englishSubtitles: [
        { startTime: 0, endTime: 10, text: this.$t('video.subtitles1') },
        { startTime: 12, endTime: 19, text: this.$t('video.subtitles2') },
        { startTime: 19.5, endTime: 30.8, text: this.$t('video.subtitles3') },
      ],
      currentSubtitles: [],
      currentTime: 0,
      // originalX: 0, // 图片初始位置的x坐标
      // originalY: 0, // 图片初始位置的y坐标
    };
  },
  methods: {
    updateSubtitle() {
      this.currentTime = Math.floor(this.$refs.player.currentTime);

      // 根据当前语言选择对应的字幕数组
      let subtitles = this.$i18n.locale === 'en' ? this.englishSubtitles : this.chineseSubtitles;

      // 根据当前时间动态显示对应的字幕
      this.currentSubtitles = subtitles.filter(subtitle => {
        return this.currentTime >= subtitle.startTime && this.currentTime <= subtitle.endTime;
      });
    },

  },


  computed: {
    // 根据当前语言选择对应的字幕数组
    displaySubtitles() {
      switch (this.$i18n.locale) {
        case 'en':
          return this.englishSubtitles;
        case 'hk':
          return this.chineseSubtitles;
        case 'cn':
          return this.chineseSimpleSubtitles;
        default:
          return this.chineseSubtitles;
      }
    },
  },

};
</script>


<style scoped>

.welcome{
  padding-bottom: 20px;
}

.welcome h1{
  font-size: 50px;
}

.welcome h1 span{
  font-size: 60px;
  color: var(--background);
}


.home-video {
  width: 100%;
  display: flex;
  align-items:  center;
  justify-content: center;
  padding-bottom: 40px;
}
#player {
  /*视频512 加背景542*/
  background:url("~@/assets/img/home_pic03.png") no-repeat;
  background-size: 100%;
  padding: 15px;
  width: 512px;
}
#subtitle {
  color: #000;
  padding-right: 100px;
}

.subtitle{
  width: 100%;
  display: block;
  padding: 3px 0;
  font-size:18px;
}

.active{
  color:var(--background);
  font-weight: bold;
}

.en .home-video{
  padding-left: 100px;
  padding-right: 100px;
}

.en .welcome h1 {
  font-size: 40px;
}
.en .welcome h1 span{
  padding-right: 10px;
  font-size: 48px;
}

.en .subtitle{
  font-size: 16px;
}

@media only screen and (min-width:1200px) and (max-width:1600px){
  .welcome h1, .en .welcome h1{
    font-size: 36px;
  }
  .welcome h1 span{
    font-size:48px;
  }

  #subtitle {
    padding-right: 50px;
  }

}

@media only screen and (min-width:0px) and (max-width:1200px){

  .home-video{
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }

  .welcome h1{
    font-size: 24px;

  }
  .welcome h1 span, .en .welcome h1 {
    font-size: 30px;
  }
  #subtitle {
    width: 100%;
    padding-right: 0;
  }
  #player{
    margin-bottom: 20px;
  }
  .en .home-video{
    padding-left: 0;
    padding-right: 0;
  }

}

@media only screen and (min-width:0px) and (max-width:768px){
#player{
  width: 100%;
  height: inherit;
}
  .welcome{
    padding-bottom: 5px;
  }
  .welcome h1 span, .en .welcome h1 span{
    font-size: 24px;
  }
  .welcome h1, .en .welcome h1{
    font-size: 20px
  }


  #subtitle{
    padding-top: 15px;
  }

  .swiper-wrap{
    display: none;
  }
}



</style>