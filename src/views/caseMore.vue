<template>

<div class="common-tb-120" style="background: #f6f6f6">
  <div class="content">
    <div class="case-d-m">
      <h1>{{title}}</h1>
      <div class="case-d" @click="toLink(link)" v-if="link">
        <div class="icon-bg">
          <img src="@/assets/img/2023-8.png">
        </div>
        <a :href="link" target="_blank">{{link}}</a>
      </div>
      <div class="case-editor">
        <p v-html="formattedDescription"></p>
      </div>
    </div>
  </div>


</div>
</template>

<script>

import {caeDetails} from "@/network/main";

export default {
  name: "caseMore",
  data() {
    return {
      id: null,
      title:'',
      link:'',
      description: ''
    }
  },
  created() {
    this.id = this.$route.params.id; //拿到id
    caeDetails(this.id).then(res =>{
      this.title = res.data.data.case.name;
      this.link = res.data.data.case.link;
      this.description =res.data.data.case.ckeditor;
      console.log(this.link)
    })
  },
  computed: {
    formattedDescription() {
      if (this.description) {
        return this.description.replace(/\r?\n/g, "<br>");
      } else {
        return '';
      }
    }
  },
  methods:{
    toLink(link) {
      if (link != null) {
        window.open(link, '_blank');
      }
    },
  }

}
</script>

<style scoped>

</style>