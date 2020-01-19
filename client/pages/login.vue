<template>
  <div id="login">
    <span @click="login()">登入</span>
  </div>
</template>

<script>
import * as API from "../api/one";

export default {
  name: "login",
  head: {
    // title: process.env.npm_package_name || '',
    title: '登入',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '漫画登入'},
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      { hid: 'description', name: 'description', content: '提供各国漫画' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  methods: {
    login() {
      this.$router.push({
        path: "/",
        key: new Date()
      });
    }
  },
  mounted() {
    let postBody = {
      password: 123456,
      username: "admin"
    };
    // var xhr = new XMLHttpRequest();
    // xhr.open(
    //   "POST",
    //   "http://127.0.0.1:8080/auth/sys/login?password=123456&username=admin",
    //   true
    // );
    // // 添加http头，发送信息至服务器时内容编码类型
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
    //     // fn.call(this, xhr.responseText);
    //     console.log(JSON.parse(xhr.responseText).data);
    //   }
    // };
    // xhr.send(null);
    API.login(postBody)
      .then(res => {
        // console.log(res, "222222222");
        if ((res.code = 200)) {
          console.log();
          this.$message.success(res.data);
        }
      })
      .catch(err => {
        console.log(err, "1111111111111");
      });
  }
};
</script>

<style lang="less" scoped>
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   /* text-align: center; */
//   color: #2c3e50;
//   height: 100%;
//   /* margin-top: 60px; */
// }
</style>
