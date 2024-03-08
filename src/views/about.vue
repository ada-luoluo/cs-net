<template>
  <div class="about-banner">
    <div class="about-b-txt"  data-aos="zoom-in">
      <div>
       <!--  <h3 data-aos="zoom-in">2004 - 2024 <span></span>{{ $t("about.about01") }}</h3>-->
        <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("about.about03") }}</h1>
        <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("about.about04") }}</h1>
        <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800" style="font-weight: normal">{{ $t("about.about02") }}</h2>
      </div>
    </div>
  </div>

  <div class="about-intro">
      <div class="about-intro-img">
      </div>
      <div class="about-intro-txt">
        <h1 data-aos="fade-left" data-aos-delay="200">{{ $t("index.name") }}</h1>
        <div data-aos="fade-left" data-aos-delay="600">
        <p>{{ $t("video.subtitles1") }}</p>
        <p>{{ $t("video.subtitles2") }}</p>
        <p>{{ $t("video.subtitles3") }}{{ $t("video.subtitles4") }}{{ $t("video.subtitles5") }}</p>
        <p>{{ $t("video.subtitles6") }}{{ $t("video.subtitles7") }}{{ $t("video.subtitles8") }}{{ $t("video.subtitles9") }}</p>
        </div>

        <div class="about-txt-video" data-aos="fade-left">
          <a :href="$t('about.about35')" target="_blank">
            <img src="@/assets/img/play_icon.png"><span>{{ $t("about.about34") }}</span>
          </a>
        </div>

      </div>
    </div>

  <div class="common-tb-120 about-ln">
      <div class="content">
        <div class="about-ln-title">
          <h1 data-aos="zoom-in">{{ $t("about.about05") }}</h1>
        </div>
        <div class="about-ln-list">
          <ul>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
              <div class="about-ln-txt">
                <div>
                  <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("about.about06") }}</h1>
                  <div class="about-ln-2"  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1000">
                    <span class="line-ln"></span>
                    <h3>{{ $t("about.about07") }}</h3>
                  </div>
                  <p  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="600">{{ $t("about.about08") }}</p>
                </div>
              </div>
              <img src="@/assets/img/2023-35.jpg" >
            </li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
              <div class="about-ln-txt">
                <div>
                  <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("about.about09") }}</h1>
                  <div class="about-ln-2"  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1000">
                    <span class="line-ln"></span>
                    <h3>{{ $t("about.about10") }}</h3>
                  </div>
                  <p  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="600">{{ $t("about.about11") }}</p>
                </div>
              </div>
              <img src="@/assets/img/2023-36.jpg" >
            </li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="600">
              <div class="about-ln-txt">
                <div>
                  <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("about.about13") }}</h1>
                  <div class="about-ln-2"  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1000">
                    <span class="line-ln"></span>
                    <h3>{{ $t("about.about14") }}</h3>
                  </div>
                  <p  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="700">{{ $t("about.about15") }}</p>
                </div>
              </div>
              <img src="@/assets/img/2023-37.jpg" >
            </li>
            <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="800">
              <div class="about-ln-txt">
                <div>
                  <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("about.about16") }}</h1>
                  <div class="about-ln-2"  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1000">
                    <span class="line-ln"></span>
                    <h3>{{ $t("about.about17") }}</h3>
                  </div>
                  <p  data-aos="fade-up" data-aos-easing="ease" data-aos-delay="600">{{ $t("about.about18") }}</p>
                </div>
              </div>
              <img src="@/assets/img/2023-38.jpg" >
            </li>
          </ul>
        </div>
      </div>
  </div>

  <div class="common-tb-120">
    <div class="content">
      <div class="about-serve">
        <h1 data-aos="zoom-in">{{ $t("about.about19") }}</h1>
      </div>
      <div class="fuwu-1">
        <ul>
          <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
            <div class="w-simImg simImg_spec simImg_spec3">
              <div class="image-w">
                <router-link :to="{ path: `/${$i18n.locale}/development` }">
                  <div class="imgBB">
                    <div class="img"><img src="@/assets/img/2023-40.jpg"/></div>
                  </div>
                  <div class="caption w-img-caption">
                    <div class="captionbg bg_main"></div>
                    <div class="caption-text">
                      <div class="caption-text-in">
                        <h3>{{ $t("about.about22") }}</h3>
                        <p>{{ $t("about.about23") }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
          <li  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
            <div class="w-simImg simImg_spec simImg_spec3">
              <div class="image-w">
                <router-link :to="{ path: `/${$i18n.locale}/mall` }">
                  <div class="imgBB">
                    <div class="img"><img src="@/assets/img/2023-41.jpg"/></div>
                  </div>
                  <div class="caption w-img-caption">
                    <div class="captionbg bg_main"></div>
                    <div class="caption-text">
                      <div class="caption-text-in">
                        <h3>{{ $t("about.about24") }}</h3>
                        <p>{{ $t("about.about25") }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="600">
            <div class="w-simImg simImg_spec simImg_spec3">
              <div class="image-w">
                <router-link :to="{ path: `/${$i18n.locale}/it` }">
                  <div class="imgBB">
                    <div class="img"><img src="@/assets/img/2023-39.jpg"/></div>
                  </div>
                  <div class="caption w-img-caption">
                    <div class="captionbg bg_main"></div>
                    <div class="caption-text">
                      <div class="caption-text-in">
                        <h3>{{ $t("about.about20") }}</h3>
                        <p>{{ $t("about.about21") }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="fuwu-1">
        <ul>
          <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="800">
            <div class="w-simImg simImg_spec simImg_spec3">
              <div class="image-w">
                <router-link :to="{ path: `/${$i18n.locale}/customize` }">
                  <div class="imgBB">
                    <div class="img"><img src="@/assets/img/2023-42.jpg"/></div>
                  </div>
                  <div class="caption w-img-caption">
                    <div class="captionbg bg_main"></div>
                    <div class="caption-text">
                      <div class="caption-text-in">
                        <h3>{{ $t("about.about26") }}</h3>
                        <p>{{ $t("about.about27") }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1000">
            <div class="w-simImg simImg_spec simImg_spec3">
              <div class="image-w">
                <router-link :to="{ path: `/${$i18n.locale}/website` }">
                  <div class="imgBB">
                    <div class="img"><img src="@/assets/img/2023-44.jpg"/></div>
                  </div>
                  <div class="caption w-img-caption">
                    <div class="captionbg bg_main"></div>
                    <div class="caption-text">
                      <div class="caption-text-in">
                        <h3>{{ $t("about.about28") }}</h3>
                        <p>{{ $t("about.about29") }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1200">
            <div class="w-simImg simImg_spec simImg_spec3">
              <div class="image-w">
                <router-link :to="{ path: `/${$i18n.locale}/APP` }">
                  <div class="imgBB">
                    <div class="img"><img src="@/assets/img/2023-46.jpg"/></div>
                  </div>
                  <div class="caption w-img-caption">
                    <div class="captionbg bg_main"></div>
                    <div class="caption-text">
                      <div class="caption-text-in">
                        <h3>{{ $t("about.about30") }}</h3>
                        <p>{{ $t("about.about31") }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1400">
            <div class="w-simImg simImg_spec simImg_spec3">
              <div class="image-w">
                <router-link :to="{ path: `/${$i18n.locale}/wechat` }">
                  <div class="imgBB">
                    <div class="img"><img src="@/assets/img/2023-47.jpg"/></div>
                  </div>
                  <div class="caption w-img-caption">
                    <div class="captionbg bg_main"></div>
                    <div class="caption-text">
                      <div class="caption-text-in">
                        <h3>{{ $t("about.about32") }}</h3>
                        <p>{{ $t("about.about33") }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="common-bottom common-padding common-tb-120">
    <div class="common-bottom-content">
      <request-form></request-form>
    </div>
  </div>

</template>

<script>
import requestForm from "@/components/requestForm";
export default {
  name: "about",
  components:{
    requestForm
  },
  methods:{

  }
}
</script>

<style scoped>

</style>