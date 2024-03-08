<template>
  <section class="banner-2023">
    <div>
      <img src="@/assets/img/dtspp/banner.png" alt="$t('dtspp.dtspp1')">
    </div>
  </section>

  <section class="common-tb-120">
    <div class="content-main">
<!--      div1-->
      <div class="elementor-container">
        <h2 class="elementor-heading-title text-center">{{ $t("dtspp.dtspp1") }}</h2>
        <div class="">
          <div class="elementor-widget-container">
            <div>
              {{ $t("dtspp.dtspp2") }}
            </div>
            <div>
              {{ $t("dtspp.dtspp3") }}
            </div>
            <div>
              {{ $t("dtspp.dtspp4") }}
              <router-link :to="{ path: `/${$i18n.locale}/contact` }">
                https://www.chinaskynet.net/{{ $i18n.locale }}/contact
              </router-link>
              {{ $t("dtspp.dtspp5") }}
            </div>
          </div>
        </div>
      </div>
<!--      div2-->
      <div class="elementor-container">
        <h2 class="elementor-heading-title text-center">{{ $t("dtspp.dtspp6") }}</h2>
        <div>
          <div class="elementor-widget-container">
            <div>
              {{ $t("dtspp.dtspp7") }}
            </div>
            <div>
              {{ $t("dtspp.dtspp8") }}
            </div>
            <ul>
              <li>
                <p><b>{{ $t("dtspp.dtspp9") }}</b></p>
                {{ $t("dtspp.dtspp10") }}
              </li>
              <li>
                <p><b>{{ $t("dtspp.dtspp11") }}</b></p>
                {{ $t("dtspp.dtspp12") }}
              </li>
              <li>
                <p><b>{{ $t("dtspp.dtspp13") }}</b></p>
                {{ $t("dtspp.dtspp14") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
<!--      div3-->
      <div class="elementor-container">
        <h2 class="elementor-heading-title text-center">{{ $t("dtspp.dtspp15") }}</h2>
        <div>
          <div class="elementor-widget-container">
            <ul>
              <li>
                {{ $t("dtspp.dtspp16") }}
                <ul>
                  <li>{{ $t("dtspp.dtspp17") }}</li>
                  <li>{{ $t("dtspp.dtspp18") }}</li>
                  <li>{{ $t("dtspp.dtspp19") }}</li>
                </ul>
              </li>
              <li>
                {{ $t("dtspp.dtspp20") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--      div4-->
      <div class="elementor-container">
        <h2 class="elementor-heading-title text-center">{{ $t("dtspp.dtspp21") }}</h2>
        <div>
          <div class="elementor-widget-container">
            <ul>
              <li>
                {{ $t("dtspp.dtspp22") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp23") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp24") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

<!--  申请程序-->
  <section class="common-tb-120 page-wrapper">
    <div class="content-main">
      <div class="elementor-column">
        <div class="elementor-column-text">
          <h2 class="elementor-heading-title">{{ $t("dtspp.dtspp25") }}</h2>
          <div class="elementor-widget-container">
            <ul>
              <li>
                {{ $t("dtspp.dtspp26") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp27") }}
                <router-link :to="{ path: `/${$i18n.locale}/contact` }">https://www.chinaskynet.net/{{ $i18n.locale }}/contact</router-link>。
              </li>
              <li>
                {{ $t("dtspp.dtspp28") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp29") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp30") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp31") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp32") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp33") }}
              </li>
            </ul>
          </div>
        </div>
        <div class="elementor-column-img">
          <img src="@/assets/img/dtspp/pic-sme01.png" alt="$t('dtspp.dtspp1')">
        </div>
      </div>
    </div>
  </section>
<!--  申請資格-->
  <section class="common-tb-120">
    <div class="content-main">
      <div class="elementor-column">
        <div class="elementor-column-img">
          <img src="@/assets/img/dtspp/pic-sme02.png" alt="$t('dtspp.dtspp34')">
        </div>
        <div class="elementor-column-text">
          <h2 class="elementor-heading-title">{{ $t("dtspp.dtspp34") }}</h2>
          <div class="elementor-widget-container">
            <ul>
              <li>
                {{ $t("dtspp.dtspp35") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp36") }}
              </li>
              <li>
                {{ $t("dtspp.dtspp37") }}
                <ul>
                  <li>{{ $t("dtspp.dtspp38") }}</li>
                  <li>{{ $t("dtspp.dtspp39") }}</li>
                </ul>
              </li>
              <li>
                {{ $t("dtspp.dtspp40") }}
                <ul>
                  <li>{{ $t("dtspp.dtspp41") }}</li>
                  <li>{{ $t("dtspp.dtspp42") }}</li>
                </ul>
              </li>
              <li>
                {{ $t("dtspp.dtspp43") }}
              </li>
            </ul>
          </div>
          <div class="contact-btn">
            <router-link :to="{ path: `/${$i18n.locale}/contact` }" class="btn btn13">
              <span class="btn-inner"> {{ $t("menu.contact") }}</span>
              <div class="bgsqr1"></div>
              <div class="bgsqr2"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
<!--  提交期間所需的資訊-->
  <section class="common-tb-120 page-wrapper">
    <div class="content-main">
      <h2 class="elementor-heading-title">{{ $t("dtspp.dtspp44") }}</h2>
      <div class="elementor-column-2">
        <div class="elementor-widget-container">
          <ul>
            <li>
              {{ $t("dtspp.dtspp45") }}
              <ul>
                <li>{{ $t("dtspp.dtspp46") }}</li>
                <li>{{ $t("dtspp.dtspp47") }}</li>
                <li>{{ $t("dtspp.dtspp48") }}</li>
                <li>{{ $t("dtspp.dtspp49") }}</li>
                <li>{{ $t("dtspp.dtspp50") }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="elementor-widget-container">
          <ul>
            <li>{{ $t("dtspp.dtspp51") }}</li>
            <li>{{ $t("dtspp.dtspp52") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
<!--  提交文件-->
  <section class="common-tb-120">
    <div class="content-main">
      <h2 class="elementor-heading-title">{{ $t("dtspp.dtspp53") }}</h2>
      <p class="elementor-heading-title-p">{{ $t("dtspp.dtspp54") }}</p>
      <div class="elementor-column-2">
<!--        item-->
        <div v-for="(item,index) in SubmitDocuments" :key="index">
          <div class="elementor-icon-box-wrapper">
            <div class="svgIcon">
              <svg-icon icon-class="svg-gobbler_0" class="icon-home" />
            </div>
            <div class="text">
              <b>{{ item.title }}</b>
              <div class="elementor-widget-container" v-html="item.text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!--  申請時間表－資助申請人(SME)-->
  <section class="common-tb-120 page-wrapper">
    <div class="content-main">
      <div class="">
        <h2 class="elementor-heading-title">{{ $t("dtspp.dtspp55") }}</h2>
        <table class="elementor-element-table">
          <tbody>
          <tr>
            <th style="width: 60%">{{ $t("dtspp.dtspp56") }}</th>
            <th style="width: 20%">{{ $t("dtspp.dtspp57") }}</th>
            <th style="width: 20%">{{ $t("dtspp.dtspp58") }}</th>
          </tr>
          <tr>
            <td>
              <h4>{{ $t("dtspp.dtspp59") }}</h4>
              <p>{{ $t("dtspp.dtspp60") }}</p>
              <p>{{ $t("dtspp.dtspp61") }}</p>
              <ul>
                <li>{{ $t("dtspp.dtspp62") }}</li>
              </ul>
              <p>{{ $t("dtspp.dtspp63") }}</p>
              <ul>
                <li>{{ $t("dtspp.dtspp64") }}</li>
                <li>{{ $t("dtspp.dtspp65") }}</li>
              </ul>
            </td>
            <td>{{ $t("dtspp.dtspp66") }}</td>
            <td>{{ $t("dtspp.dtspp66") }}</td>
          </tr>
          <tr>
            <td>
              <h4>{{ $t("dtspp.dtspp67") }}</h4>
              <p>{{ $t("dtspp.dtspp60") }}</p>
              <p>{{ $t("dtspp.dtspp61") }}</p>
              <ul>
                <li>{{ $t("dtspp.dtspp62") }}</li>
              </ul>
              <p>{{ $t("dtspp.dtspp63") }}</p>
              <ul>
                <li>{{ $t("dtspp.dtspp64") }}</li>
                <li>{{ $t("dtspp.dtspp65") }}</li>
              </ul>
            </td>
            <td>{{ $t("dtspp.dtspp66") }}</td>
            <td>{{ $t("dtspp.dtspp66") }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <!--        備註-->
      <div class="elementor-widget-container elementor-remark">
        <p>{{ $t("dtspp.dtspp68") }}</p>
        <ul>
          <li>{{ $t("dtspp.dtspp67") }}</li>
          <li>{{ $t("dtspp.dtspp70") }}</li>
          <li>{{ $t("dtspp.dtspp71") }}</li>
        </ul>
      </div>
      <!--        申請程序-->
      <div>
        <h2 class="elementor-heading-title">{{ $t("dtspp.dtspp72") }}</h2>
        <div class="elementor-wrap">
<!--          item-->
          <div class="elementor-wrap-item" :class="{'elementor-wrap-item-3':(index+1)%3 === 0}"  v-for="(item,index) in ApplicationProcedure" :key="index">
            <div class="text">
              <div class="svgIcon">
                <svg-icon :icon-class="`svg-gobbler_${index+1}`" class="icon-home" />
              </div>
              <div>
                <b>{{ $t("dtspp.dtspp73") }} {{index+1}}</b>
                <p>{{ item }}</p>
              </div>
            </div>
            <div class="icons">
              <img src="@/assets/img/dtspp/next.png" alt="$t('dtspp.dtspp72')">
            </div>
          </div>
        </div>
      </div>
      <div class="text-center contact-btn">
        <router-link :to="{ path: `/${$i18n.locale}/contact` }" class="btn btn13">
          <span class="btn-inner"> {{ $t("menu.contact") }}</span>
          <div class="bgsqr1"></div>
          <div class="bgsqr2"></div>
        </router-link>
      </div>
    </div>
  </section>
<!--  資助撥款給方案供應商-->
  <section class="common-tb-120">
    <div class="content-main">
      <h2 class="elementor-heading-title">{{ $t("dtspp.dtspp74") }}</h2>
      <table class="elementor-element-table">
        <tbody>
        <tr>
          <th style="width: 10%"></th>
          <th style="width: 20%">{{ $t("dtspp.dtspp75") }}</th>
          <th style="width: 70%">{{ $t("dtspp.dtspp76") }}</th>
        </tr>
        <tr>
          <td>{{ $t("dtspp.dtspp77") }} 1</td>
          <td>50%</td>
          <td>{{ $t("dtspp.dtspp78") }}</td>
        </tr>
        <tr>
          <td>{{ $t("dtspp.dtspp77") }} 2</td>
          <td>50%</td>
          <td>{{ $t("dtspp.dtspp79") }}</td>
        </tr>
        </tbody>
      </table>
      <div class="elementor-wrap-top">
        <div class="elementor-wrap">
          <!--          item-->
          <div class="elementor-wrap-item" :class="{'elementor-wrap-item-3':(index+1)%3 === 0}"  v-for="(item,index) in supplier" :key="index">
            <div class="text">
              <div class="svgIcon">
                <svg-icon :icon-class="item.icon" class="icon-home" />
              </div>
              <div>
                <b>{{ $t("dtspp.dtspp73") }} {{index+1}}</b>
                <p>{{ item.text }}</p>
              </div>
            </div>
            <div class="icons">
              <img src="@/assets/img/dtspp/next.png" alt="$t('dtspp.dtspp74')">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="common-tb-120 page-wrapper">
    <div class="content-main">
      <div class=" text-center">
        <router-link :to="{ path: `/${$i18n.locale}/contact` }" class="btn btn13">
          <span class="btn-inner"> {{ $t("menu.contact") }}</span>
          <div class="bgsqr1"></div>
          <div class="bgsqr2"></div>
        </router-link>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  name: "DTSPP",
  components:{
  },
  data() {
    return {
      // 提交文件
      SubmitDocuments: [
        {
          title: this.$t("dtspp.dtspp80"),
          text: this.$t("dtspp.dtspp81")
        },
        {
          title: this.$t("dtspp.dtspp82"),
          text: this.$t("dtspp.dtspp83")
        },
        {
          title: this.$t("dtspp.dtspp84"),
          text: this.$t("dtspp.dtspp85")
        },
        {
          title: this.$t("dtspp.dtspp86"),
          text: this.$t("dtspp.dtspp87")
        },
        {
          title: this.$t("dtspp.dtspp88"),
          text: this.$t("dtspp.dtspp89")
        },{
          title: this.$t("dtspp.dtspp90"),
          text: this.$t("dtspp.dtspp91")
        }
      ],
      // 申请程序
      ApplicationProcedure: [
        this.$t("dtspp.dtspp92"),
        this.$t("dtspp.dtspp93"),
        this.$t("dtspp.dtspp94"),
        this.$t("dtspp.dtspp95"),
        this.$t("dtspp.dtspp96"),
        this.$t("dtspp.dtspp97"),
        this.$t("dtspp.dtspp98"),
        this.$t("dtspp.dtspp99"),
        this.$t("dtspp.dtspp100")
      ],
      // 資助撥款給方案供應商
      supplier: [
        {
          icon: 'svg-gobbler_10',
          text: this.$t("dtspp.dtspp101")
        },
        {
          icon: 'svg-gobbler_11',
          text: this.$t("dtspp.dtspp102")
        },
        {
          icon: 'svg-gobbler_12',
          text: this.$t("dtspp.dtspp103")
        },
        {
          icon: 'svg-gobbler_1',
          text: this.$t("dtspp.dtspp104")
        },
        {
          icon: 'svg-gobbler_11',
          text: this.$t("dtspp.dtspp105")
        },
        {
          icon: 'svg-gobbler_12',
          text: this.$t("dtspp.dtspp106")
        }
      ]
    }
  }
}
</script>

<style scoped lang="css">
@import "~@/assets/css/dtspp.css";
</style>