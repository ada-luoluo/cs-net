<template>
  <Header/>
  <keep-alive>
    <router-view :key="$route.fullPath" v-if="$route.meta.keepalive"/>
  </keep-alive>
  <router-view :key="$route.fullPath" v-if="!$route.meta.keepalive"/>
  <Footer/>

</template>
<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    }
  },
  mounted() {
    this.updateMetaTags();
  },
  watch: {
    $route() {
      this.updateMetaTags();
    }
  },
  methods: {
    updateMetaTags() {
      const metaTags = this.$route.meta.metaTags;
      if (metaTags) {
        metaTags.forEach(tag => {
          const { name, content } = tag;
          const metaTag = document.querySelector(`meta[name="${name}"]`);
          if (metaTag) {
            metaTag.setAttribute('content', content);
          } else {
            const newMetaTag = document.createElement('meta');
            newMetaTag.setAttribute('name', name);
            newMetaTag.setAttribute('content', content);
            document.head.appendChild(newMetaTag);
          }
        });
      }
    }
  }

}
</script>

<style>
@import "assets/css/main.css";
</style>
