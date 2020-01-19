<template>
  <div class="wrap">
    <header class="header">
      <div class="container">
        <input type="text" class="ipt fr" v-model="keyWord" placeholder="请输入关键字" />
        <input type="button" class="btn fr" value="搜索" @click="searchManhua" />
      </div>
    </header>
    <!-- <v-header></v-header> -->
    <div class="container">
      <NuxtChild :keyWord="keyWord" :manhuaList="manhuaList" />
    </div>
    <v-footer></v-footer>
  </div>
</template>
  
  <script>
import VHeader from "~/components/home/pageTop";
import VFooter from "~/components/home/pageFooter";
import VNav from "~/components/home/pageNav";
import * as API from "../api/one";

export default {
  layout: "default",
  components: {
    VHeader,
    VFooter,
    VNav
  },
  head: {
    // title: process.env.npm_package_name || '',
    title: "动漫",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "动漫之家" },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      { hid: "description", name: "description", content: "提供各国漫画" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  data() {
    return {
      keyWord: "",
      manhuaList: []
    };
  },
  mounted() {
    this.searchManhua();
  },
  methods: {
    searchManhua() {
      let postBody = {
        page: 1,
        size: 12,
        keyWord: this.keyWord
      };
      API.getManhuaList(postBody)
        .then(res => {
          this.manhuaList = res.data.list;
        })
        .catch(err => {
          console.log(err, "1111111111111");
        });
    }
  }
};
</script>
  
  <style lang="less" scoped>
.wrap {
  background: #ddd url(/images/mh_bg.jpg) no-repeat top center;
  background-color: #fff;
  // width: 100%;
  padding-top: 55px;
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    height: 55px;
    background-color: #ffffff;
  }
  .container {
    min-height: 55px;
  }
  .ipt {
    // display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    // width: 50px;
    font-size: 14px;
    height: 28px;
    line-height: 28px;
    border: 1px solid #cccccc;
    border-radius: 20px;
    background: none;
    padding-left: 10px;
    outline: none;
  }
  .btn {
    // display: inline-block;
    // width: 50px;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 10px;
    background: #1377f7;
    height: 24px;
    line-height: 24px;
    margin-top: 2px;
    border: 0;
    border-radius: 100px;
    margin-right: 2px;
    color: #fff;
    outline: none;
  }
}
</style>
  