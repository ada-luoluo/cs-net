<template>
  <div class="tu-1 tu-website tu-wechat">
    <div class="b-txt">
      <div class="center-p">
        <div data-aos="zoom-in">
          <h1>{{ $t("edit.edit71") }}</h1>
          <p>{{ $t("edit.edit72") }}</p>
          <p>{{ $t("edit.edit73") }}</p>
        </div>
      </div>
    </div>
  </div>

    <div class="content wechat-c-txt">
      <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("edit.edit87") }}</h1>
      <div class="mini-g-list">
        <ul>
          <li data-aos="fade-right" data-aos-delay="200">
            <img src="@/assets/img/2023-28.png">
            <p>{{ $t("edit.edit74") }}</p>
          </li>
          <li data-aos="fade-right" data-aos-delay="400">
            <img src="@/assets/img/2023-29.png">
            <p>{{ $t("edit.edit75") }}</p>
          </li>
          <li data-aos="fade-right" data-aos-delay="600">
            <img src="@/assets/img/2023-30.png">
            <p>{{ $t("edit.edit76") }}</p>
          </li>
          <li  data-aos="fade-right" data-aos-delay="800">
            <img src="@/assets/img/2023-31.png">
            <p>{{ $t("edit.edit77") }}</p>
          </li>
        </ul>
      </div>
    </div>


  <!--  -->


<div class="common-tb-120">
  <section class="content">
    <div class="description spaceblock">
      <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("edit.edit78") }}</h2>
      <div class="content_description content-3">
        <div data-aos="fade-left" data-aos-delay="500">
          <img src="@/assets/img/2023-32.png" class="des-left-tu">
        </div>
        <div class="bluedote block_txt flex vertical des-right-txt wechat01-right-txt" data-aos="fade-right"  data-aos-delay="700">
          <div>
            <p>{{ $t("edit.edit79") }}</p>
            <p>{{ $t("edit.edit80") }}</p>
            <p>{{ $t("edit.edit81") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  <div class="common-tb-120 gzh">
  <section class="content">
    <div class="description spaceblock">
      <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("edit.edit82") }}</h2>
      <div class="content_description content2 content-3">
        <div data-aos="fade-left" data-aos-delay="500">
          <img src="@/assets/img/2023-33.png" class="des-left-tu">
        </div>
        <div class="bluedote block_txt flex vertical des-right-txt wechat01-right-txt"  data-aos="fade-right"  data-aos-delay="700">
          <div>
            <p>{{ $t("edit.edit83") }}</p>
            <p>{{ $t("edit.edit84") }}</p>
            <p>{{ $t("edit.edit85") }}</p>
            <p>{{ $t("edit.edit86") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>


  <project Active="3"></project>

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
  name: "wechat",
  components:{
    bottomOffer,
    requestForm,
    project
  },
  data() {
    return {
      data: [
        { title: this.$t("page.wechatName1"),
          content: this.$t("page.wechatTxt1"),
          showText: true
        },
        { title: this.$t("page.wechatName2"),
          content: this.$t("page.wechatTxt2"),
          showText: false
        },
        { title: this.$t("page.wechatName3"),
          content: this.$t("page.wechatTxt3"),
          showText: false
        },
      ]
    };
  },
  methods: {
    handleClick(index) {
      this.data.forEach((item, i) => {
        item.showText = i === index;
      });
    }
  }
}
</script>

<style scoped>
.new-layout{
  background: url("~@/assets/img/wechat-case.jpg") center center no-repeat;
}
</style>