<template>
  <div class="tu-1 tu-website">
    <div class="b-txt">
        <div class="center-p"  data-aos="zoom-in">
          <div>

            <h1>{{ $t("edit.edit31") }}</h1>
            <h2>{{ $t("edit.edit32") }}</h2>
            <p>{{ $t("edit.edit30") }}</p>
          </div>
        </div>
    </div>
  </div>

    <section class="content">
      <div class="description spaceblock">
        <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{{ $t("edit.edit33") }}</h2>
        <div class="content_description">
          <div data-aos="fade-left" data-aos-delay="500">
              <img src="@/assets/img/2023-14.png" class="des-left-tu">
          </div>
          <div class="bluedote block_txt flex vertical" data-aos="fade-right"  data-aos-delay="700">
            <ul>
              <li>
                {{ $t("edit.edit34") }}
                <div class="sm-p">
                <p>{{ $t("edit.edit35") }}</p>
                <p>{{ $t("edit.edit36") }}</p>
                </div>
              </li>
              <li>
                {{ $t("edit.edit37") }}
                <div class="sm-p">
                  <p>{{ $t("edit.edit38") }}</p>
                </div>
              </li>
              <li>{{ $t("edit.edit39") }}
                <div class="sm-p">
                  <p>{{ $t("edit.edit40") }}</p>
                  <p>{{ $t("edit.edit41") }}</p>
                  <p>{{ $t("edit.edit42") }}</p>
                  <p>{{ $t("edit.edit43") }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="tools">
        <h1 data-aos="fade-up" data-aos-easing="ease">{{ $t("edit.edit50") }}</h1>
        <div class="tool-list">
         <ul>
           <li data-aos="fade-right" data-aos-delay="200">
             <img src="@/assets/img/2023-15.png">
             <p>CSS3</p>
           </li>
           <li data-aos="fade-right" data-aos-delay="400">
             <img src="@/assets/img/2023-16.png">
             <p>HTML5</p>
           </li>
           <li data-aos="fade-right" data-aos-delay="600">
            <img src="@/assets/img/2023-17.png">
             <p>JS</p>
           </li>
           <li data-aos="fade-right" data-aos-delay="800">
             <img src="@/assets/img/2023-18.png">
             <p>VUE.js</p>
           </li>
           <li data-aos="fade-right" data-aos-delay="1000">
             <img src="@/assets/img/2023-19.png">
             <p>PHP</p>
           </li>
         </ul>
        </div>
      </div>
  </section>



<!--  -->
  <div class="web-001">
    <div class="content">
      <div class="web-002">
        <div class="web-003" data-aos="zoom-in">
          <h1>
            {{ $t("edit.edit51") }}
          </h1>
          <p>{{ $t("edit.edit52") }}</p>
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



  <project Active="1"></project>


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
  name: "website",
  components:{
    bottomOffer,
    requestForm,
    project
  },
  data() {
    return {
      data: [
        { title: this.$t("edit.edit44"),
          content: this.$t("edit.edit45"),
          showText: true
        },
        { title: this.$t("edit.edit46"),
          content: this.$t("edit.edit47"),
          showText: true
        },
        { title: this.$t("edit.edit48"),
          content: this.$t("edit.edit49"),
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
.new-layout{
  background: url("~@/assets/img/case.jpg") center center no-repeat;
}
</style>