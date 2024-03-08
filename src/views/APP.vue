<template>
  <div class="tu-1 tu-website tu-app">
    <div class="b-txt">
      <div class="center-p" data-aos="zoom-in">
        <div>

          <h1>{{ $t("edit.edit54") }}</h1>
          <h2>{{ $t("edit.edit55") }}</h2>
          <p>{{ $t("edit.edit53") }}</p>
        </div>
      </div>
    </div>
  </div>
<!--  -->
  <section class="content">
    <div class="description spaceblock">
      <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
        {{ $t("edit.edit56") }}
      </h2>
      <div class="content_description">
        <div data-aos="fade-left" data-aos-delay="500">
          <img src="@/assets/img/2023-20.png" class="des-left-tu">
        </div>
        <div class="bluedote block_txt flex vertical des-right-txt" data-aos="fade-right"  data-aos-delay="700">
          <div>
            <p>{{ $t("edit.edit57") }}
            </p>
            <p>{{ $t("edit.edit58") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

<!--    -->
  <div class="web-001">
    <div class="content">
      <div class="web-002">
        <div class="web-003" data-aos="zoom-in">
          <h1>{{ $t("edit.edit59") }}</h1>
          <p>{{ $t("edit.edit60") }}</p>
          <p>{{ $t("edit.edit61") }}</p>
        </div>
        <div class="new-layout-txt web-004">
          <div v-for="(item, index) in data" :key="index" class="new-layout-part" data-aos="zoom-in">
            <div class="new-layout-title" @click="handleClick(index)">
              <h1>{{ item.title }}</h1>
              <div class="arrow-wrapper" :class="{ 'hide-container': item.showText }">
                <div class="arrow-container" >
                  <div class="arrow">
                    <img src="@/assets/img/new01.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="new01" :class="{ 'show-text': item.showText }">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- 开发流程 -->
  <div class="lc">
   <div class="content">
    <div class="app-lc" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100">
    <h1>{{ $t("edit.edit62") }}</h1>
    <p>{{ $t("edit.edit63") }}</p>
    <div class="app-lc-list">
      <ul>
        <li data-aos="fade-right" data-aos-delay="200">
          <img src="@/assets/img/2023-21.png">
          <p>{{ $t("edit.edit64") }}</p>
        </li>
        <li data-aos="fade-right" data-aos-delay="400">
          <img src="@/assets/img/2023-22.png">
          <p>{{ $t("edit.edit65") }}</p>
        </li>
        <li data-aos="fade-right" data-aos-delay="600">
          <img src="@/assets/img/2023-23.png">
          <p>{{ $t("edit.edit66") }}</p>
        </li>
        <li data-aos="fade-right" data-aos-delay="800">
          <img src="@/assets/img/2023-24.png">
          <p>{{ $t("edit.edit67") }}</p>
        </li>
        <li data-aos="fade-right" data-aos-delay="1000">
          <img src="@/assets/img/2023-25.png">
          <p>{{ $t("edit.edit68") }}</p>
        </li>
        <li data-aos="fade-right" data-aos-delay="1200">
          <img src="@/assets/img/2023-26.png">
          <p>{{ $t("edit.edit69") }}</p>
        </li>
        <li data-aos="fade-right" data-aos-delay="1400">
          <img src="@/assets/img/2023-27.png">
          <p>{{ $t("edit.edit70") }}</p>
        </li>
      </ul>
    </div>
  </div>
  </div>
  </div>

  <project Active="2"></project>

 <bottom-offer></bottom-offer>

  <div class="common-bottom common-padding common-tb-120">
    <div class="common-bottom-content">
      <request-form></request-form>
    </div>
  </div>

</template>

<script>
import bottomOffer from "@/components/bottomOffer";
import requestForm from "@/components/requestForm";
import project from "@/components/Project";


export default {
  name: "APP",
  components:{
    bottomOffer,
    requestForm,
    project
  },
  data() {
    return {
      data: [
        { title: this.$t("page.appName1"),
          content: this.$t("page.appTxt1"),
          showText: true
        },
        { title: this.$t("page.appName2"),
          content: this.$t("page.appTxt2"),
          showText: true
        },
        { title: this.$t("page.appName3"),
          content: this.$t("page.appTxt3"),
          showText: true
        }
      ]
    };
  },
  methods: {
    // handleClick(index) {
    //   this.data.forEach((item, i) => {
    //     item.showText = i === index;
    //   });
    // }
  }
}
</script>

<style scoped>

</style>