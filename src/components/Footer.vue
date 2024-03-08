<template>
<div  style="background: #205085;">
<div class="common-padding footer-content">
  <div class="footer">
    <div class="f-left">
      <div class="f-facebook-iframe in-pc">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61552824635528&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="500" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
      <div class="f-facebook-iframe in-mobile">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61552824635528&tabs=timeline&width=300&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="300" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>


    </div>

    <div class="f-right">
      <div class="f-right-address">
        <div class="footer-address">
          <p>{{ $t("footer.company1") }}</p>
          <p>
            <!--        <span>{{ $t("footer.address") }}:</span>-->
            <span>
          <img src="@/assets/img/2023-61.png" class="f-icon-2023">
        </span>
            <span>{{ $t("footer.address1") }}</span>
          </p>
          <p>
            <!--        <span>{{ $t("footer.mail") }}:</span>-->
            <span>
          <img src="@/assets/img/2023-60.png" class="f-icon-2023">
        </span>
            <span>info@chinaskynet.net</span>
          </p>
          <div class="footer-tel">
            {{ $t("footer.tel1") }}
          </div>
        </div>
        <div class="footer-address">
          <p>{{ $t("footer.company2") }}</p>
          <p>
            <!--        <span>{{ $t("footer.address") }}:</span>-->
            <span>
          <img src="@/assets/img/2023-61.png" class="f-icon-2023">
        </span>
            <span>{{ $t("footer.address2") }}</span>
          </p>
          <p>
            <!--        <span>{{ $t("footer.mail") }}:</span>-->
            <span>
          <img src="@/assets/img/2023-60.png" class="f-icon-2023">
        </span>
            <span>info@chinaskynet.net</span>
          </p>
          <div class="footer-tel">
            {{ $t("footer.tel2") }}
          </div>
        </div>
      </div>
      <div class="f-right-icon">
        <div class="footer-qrcode">
          <div class="sns-qrcode">
            <img src="@/assets/img/footer_img01.png" class="big-pic">
            <a href="https://www.facebook.com/profile.php?id=61552824635528" target="_blank">
              <img src="@/assets/img/footer_img04.png">
            </a>
          </div>
          <div class="sns-qrcode">
            <img src="@/assets/img/IG.png" class="big-pic">
            <a href="https://www.instagram.com/chinaskytechnology/" target="_blank">
              <img src="@/assets/img/IG-icon.png">
            </a>
          </div>
          <div class="sns-qrcode">
            <img src="@/assets/img/footer_img02.png" class="big-pic">
            <a  href="javascript:;">
              <img src="@/assets/img/footer_img05.png">
            </a>
          </div>
          <div class="sns-qrcode">
            <img src="@/assets/img/WB.png" class="big-pic">
            <a href="https://weibo.com/cnskynet" target="_blank">
              <img src="@/assets/img/WB-icon-1.png">
            </a>
          </div>
          <div class="sns-qrcode">
            <img src="@/assets/img/ft-wa.png" class="big-pic">
            <a href="https://api.whatsapp.com/send?phone=85251750111" target="_blank">
              <img src="@/assets/img/footer_img06.png">
            </a>

          </div>
        </div>
      </div>
    </div>


  </div>
</div>

  <div class="copyright">
    <p>Copyright @{{ currentYear }} China Sky Technology System Limited. All rights reserved</p>
  </div>
</div>

<!-- 报价 -->
  <div class="quotation-fixed">

    <div class="c-contact">
      <a :href="getWhatsAppLink" target="_blank">
        <img src="@/assets/img/nav_whatsapp.png">
        <p>{{ $t("menu.consultation") }}</p>
      </a>
    </div>

    <div class="quotation-c-btn" @click="getQuote">
      <a href="javascript:;" >
        <p>{{ $t("menu.quotation") }}</p>
      </a>
    </div>

  </div>

<!--  -->

</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  methods:{
    getQuote(){
      // console.log(this.$route)
      this.$quote.show(this.$route.name,this.$route.params.lang)
    }
  },
  computed: {
    getWhatsAppText() {
      // 根据当前页面的条件返回不同的文本
      if (this.$route.name === 'customize') {
        return '我想咨詢定制開發';
      } else if (this.$route.name === 'website') {
        return '我想咨詢網站開發';
      } else if (this.$route.name === 'APP') {
        return '我想咨詢APP開發';
      }else if (this.$route.name === 'wechat') {
        return '我想咨詢微信開發';
      }else if (this.$route.name === 'mall') {
        return '我想咨詢網上商城';
      }else if (this.$route.name === 'TVP') {
        return '我想咨詢TVP科技券服務';
      }else {
        return '我想咨詢...';
      }
    },
    getWhatsAppLink() {
      // 在链接中使用相应的文本
      const text = encodeURIComponent(this.getWhatsAppText);
      return `https://api.whatsapp.com/send?phone=85251750111&text=${text}`;
    },

  },
}
</script>

<style scoped>
.footer-content{
  padding-top:120px;
  padding-bottom: 30px;
}

.footer{
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-qrcode{
  /*width: calc(100% - 900px);*/
  display: flex;
  /*justify-content: space-between;*/
  align-items: center;
}

.sns-qrcode{
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
}


.sns-qrcode a{
  display: block;
  text-align: center;
}
.sns-qrcode img:nth-child(2), .sns-qrcode a img{
  width: 30px;
  margin: 20px auto;
}
.footer-address{
  width: 430px;
  padding: 0 10px;
  margin-bottom: 40px;
  /*padding-left: 20px;*/
}

.footer-address p{
  display: flex;
  color: #fff;
  font-size: 20px;
  padding-bottom: 15px;
}

.footer-address p span:nth-child(1){
  width: 30px;
}

.footer-address p span:nth-child(2){
  width: calc(100% - 30px);
  font-size: 18px;
}

img.f-icon-2023{
  width: 24px;
}

.footer-tel{
  font-weight: 500;
  font-size: 28px;
  color: #03CFEF;
  padding-top: 10px;
}


.copyright{
  width: 100%;
  margin-top: 60px;
  border-top: 1px solid rgba(244, 244, 244, 0.6);
}

.copyright p{
  padding: 20px;
  color: #fff;
  text-align: center;
}

.quotation-fixed{
  position: fixed;
  top: 45%;
  right: 0;
  border-bottom-left-radius: 5px;
}

.quotation-fixed a{
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.quotation-fixed img{
  width: 32px;
  padding-bottom: 6px;
  position: relative;
  z-index: 1;
}
.c-contact{
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  margin-bottom: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0px 2px 6px rgba(121, 121, 121, 0.25);
}
.c-contact a{
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #333333;
  font-size: 16px;
}

.c-contact a img{
  padding-bottom: 10px;
}

.c-contact p{
  text-align: center;
}
.quotation-c-btn{
  background: #f88400;
  padding: 10px;
  box-shadow: 0px 2px 6px rgba(121, 121, 121, 0.25);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
 }



.finger{
  cursor: pointer;
  animation: fingerHandle 1s ease infinite both;
}


.footer-qrcode img.big-pic{
  transition: transform 0.3s ease;
}

.footer-qrcode .sns-qrcode:hover img.big-pic{
  transform: scale(1.2)!important;
  /*box-shadow: 0px 0px 12px #cbcaca;*/
}

@keyframes fingerHandle {
  0% {
    transform: none;
  }
  70% {
    transform: scale3d(.8, .8, .8);
  }
  100% {
    transform: none;
  }
}

/*2024.1.22*/
.f-facebook-iframe{
  width: 500px;
}

.f-right{
  padding-left: 60px;
}
.f-right-address{
  display: flex;
  flex-wrap: wrap;
}

.in-mobile{
  display: none;
}

@media only screen and (min-width:1680px) and (max-width:2560px) {
  .footer-qrcode img.big-pic{
    max-width: 120px;
    margin: 0 auto;

  }
}
@media only screen and (min-width:980px) and (max-width:1250px){
  .footer{
    flex-wrap: wrap;
  }
  .footer-qrcode{
    width: 100%;
  }

  .sns-qrcode{
    width: 15%;
  }

  .f-right{
     margin-top: 40px;
  }

}

@media only screen and (min-width:0px) and (max-width:960px){
  .copyright{
    width: 100%;
    margin: 50px auto 0;
  }
}

@media only screen and (min-width:0px) and (max-width:991px){
  .footer{
    flex-wrap: wrap;
  }
  .footer-qrcode{
    width: 60%;
    margin: 0 auto;
  }

  .footer-address{
    padding-top: 40px;
    padding-left: 0;
  }

  .footer-tel{
     padding-top: 0;
  }

  .footer-content{
    padding-top: 50px;
  }

}


@media only screen and (min-width:0px) and (max-width:767px){
  .footer-qrcode{
    width: 100%;
  }
  .footer-address p{
     font-size: 16px;
  }

  .footer-address{
    width: 100%;
    padding-top: 20px;
  }

  .footer-tel{
    font-size: 24px;
  }

  .copyright{
   margin-top: 0px;
  }

  .copyright p{
    padding:20px;
    font-size: 12px;
  }

  .sns-qrcode{
    padding: 0 5px;
  }

  .f-right{
    padding-left: 0;
  }
  .f-facebook-iframe{
    width: 100%;
  }

  .in-pc{
    display: none;
  }

  .in-mobile{
    display: block;
  }

}


</style>


