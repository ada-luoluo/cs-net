<template>
<div class="tu-1 development-bg">
     <div class="development-content">
       <div class="content development-txt" data-aos="zoom-in">
         <h1>{{ $t("edit.edit01") }}</h1>
         <p>{{ $t("edit.edit02") }}</p>
         <p>{{ $t("edit.edit03") }}</p>
         <p>{{ $t("edit.edit04") }}</p>
       </div>
     </div>
</div>
  <section class="topservice content">
    <div>
      <ul>
        <li data-aos="fade-up" data-aos-delay="200">
          <span class="icon">
            <img src="@/assets/img/2023-2.svg">
          </span>
          <strong>{{ $t("edit.edit05") }}</strong>
          <p>{{ $t("edit.edit06") }}</p>
        </li>
        <li  data-aos="fade-up" data-aos-delay="400">
          <span class="icon">
            <img src="@/assets/img/2023-3.svg">
          </span>
          <strong>{{ $t("edit.edit07") }}</strong>
          <p>{{ $t("edit.edit08") }}</p>
      </li>
        <li  data-aos="fade-up" data-aos-delay="600">
         <span class="icon">
            <img src="@/assets/img/2023-4.svg">
          </span>
          <strong>{{ $t("edit.edit09") }}</strong>
          <p>{{ $t("edit.edit10") }}</p>
      </li>
        <li data-aos="fade-up" data-aos-delay="800">
          <span class="icon">
            <img src="@/assets/img/2023-5.svg">
          </span>
        <strong>{{ $t("edit.edit11") }}</strong>
        <p>{{ $t("edit.edit12") }}</p>
      </li>
      </ul>
      <p class="clear"></p>
    </div>
  </section>


  <section class="content">
    <div class="description spaceblock">
      <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("edit.edit13") }}</h2>
      <p class="subtitle" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("edit.edit14") }}</p>
      <div class="content_description">
        <div data-aos="fade-left" data-aos-delay="600">
            <img src="@/assets/img/2023-10.png" class="des-left-tu">
        </div>
        <div class="bluedote block_txt flex vertical" data-aos="fade-right"  data-aos-delay="700">
          <ul>
            <li>
              <router-link :to="{ path: `/${$i18n.locale}/customize` }">
                {{ $t("edit.edit15") }}
              </router-link>
              <div class="sm-p">
                <p>{{ $t("edit.edit16") }}</p>
                <p>{{ $t("edit.edit17") }}</p>
              </div>
            </li>

            <li>
              <router-link :to="{ path: `/${$i18n.locale}/website` }">
                {{ $t("edit.edit18") }}
              </router-link>
            <div class="sm-p">
              <p>{{ $t("edit.edit19") }}</p>
              <p>{{ $t("edit.edit20") }}</p>
            </div>
            </li>

            <li>
              <router-link :to="{ path: `/${$i18n.locale}/app` }">
               {{ $t("edit.edit21") }}
              </router-link>
            <div class="sm-p">
              <p>{{ $t("edit.edit22") }}</p>
              <p>{{ $t("edit.edit23") }}</p>
            </div>
            </li>

            <li>
              <router-link :to="{ path: `/${$i18n.locale}/wechat` }">
               {{ $t("edit.edit24") }}
              </router-link>
            <div class="sm-p">
              <p>{{ $t("edit.edit25") }}</p>
              <p>{{ $t("edit.edit26") }}</p>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>


  <div class="ad-2024">
    <div class="content">
      <img src="@/assets/img/2024-b-1.jpg"  data-aos="fade-up" data-aos-easing="ease">
    </div>
  </div>

  <section class="txt-3">
    <div class="content">
      <div class="tabs__section"  data-aos="fade-left" data-aos-delay="600">
        <section class="tabs">
          <div>
            <h2>{{ $t("edit.edit27") }}</h2>
            <p>{{ $t("edit.edit28") }}</p>
            <p>{{ $t("edit.edit29") }}</p>
<!--            <img src="@/assets/img/2023-13.jpg">-->
<!--            <img src="@/assets/img/2023-14.jpg">-->
          </div>
        </section>
      </div>
    </div>
  </section>

  <project Active="0"></project>
</template>

<script>
import project from "@/components/Project";

export default {
  name: "development",
  components:{
    project
  },
}
</script>

<style scoped>
.ad-2024{
   padding-bottom: 100px;
}
@media only screen and (min-width: 0px) and (max-width:767px){
  .ad-2024{
    padding-bottom: 50px;
  }
}
</style>