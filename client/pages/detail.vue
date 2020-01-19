<template>
  <div class="wrapDetail">
    <v-header></v-header>
    <v-nav></v-nav>
    <div class="container">
      <a-row type="flex" justify="space-between">
        <a-col :span="12">
          <img v-lazy="ManhuaDetail.picture" :alt="ManhuaDetail.picture">
        </a-col>
        <a-col :span="12">
          <p>{{ ManhuaDetail.title }}</p>
          <!-- <p>{{ ManhuaDetail.desc }}</p> -->
          <p>{{ ManhuaDetail.rq }}</p>
          <!-- <p>类型: {{ ManhuaDetail.type }}</p> -->
          <!-- <p>跟新: {{ ManhuaDetail.updateDesc }}</p> -->
        </a-col>
      </a-row>
      <a-row type="flex" justify="space-between">
        <a-col :span="6" v-for="(item, index) in chapterList" :key="index">
          <span @click="toWatch(item.id)">{{ item.chapter_name }}</span>
        </a-col>
      </a-row>
      <p>{{ ManhuaDetail.desc }}</p>
    </div>
    <v-footer></v-footer>
  </div>
  </template>
  
  <script>
  import VHeader from '~/components/home/pageTop'
  import VFooter from '~/components/home/pageFooter'
  import VNav from '~/components/home/pageNav'
  import * as API from "../api/one";
  import { mapActions, mapState } from 'vuex'

  export default {
    name: "lll",
    components: {
      VHeader,
      VFooter,
      VNav
    },
    head: {
    title: '动漫',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '动漫之家'},
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      { hid: 'description', name: 'description', content: '提供各国漫画' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  computed: {
    // ...mapGetters({
    //   ManhuaDetail: 'getManhua'
    // })
    ...mapState({
      ManhuaDetail: state => state.manhuaDetail
    })
    // ManhuaDetail () {
    //   return this.$store.state.manhua.manhuaDetail
    // }
  },
  data () {
      return {
        listId: null,
        chapterList: []
      }
  },
  mounted () {
    console.log(this.ManhuaDetail, 6666666666)
      let postBody = {
      list_id: this.ManhuaDetail.id
    }
    API.manhuaDetail(postBody)
      .then(res => {
        this.chapterList = res.data
        console.log(res.data)
      })
      .catch(err => {
        console.log(err, "1111111111111");
      })
    },
  methods: {
    ...mapActions({
      // updateCapter: 'manhua/updateCapter'
      updateCapter: 'updateCapter'
    }),
    toWatch (chapter) {
      this.updateCapter(chapter).then(() => {
        this.$router.push({ path: `watch`})
      })
    }
  },
  created () {
    // console.log(this, window.sessionStorage, sessionStorage, 5555555)
    // if (sessionStorage.getItem("store") ) { //在页面加载时读取sessionStorage里的状态信息
    //     this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    // }
    // window.addEventListener("beforeunload",()=>{ //在页面刷新时将vuex里的信息保存到sessionStorage里
    //     sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    // })
    // this.listId = this.$route.query.listId
    // console.log(this.ManhuaDetail)
  }
  }
  </script>
  
  <style lang="less" scoped>
  // .container {
  //   margin: 0 auto;
  //   min-height: 100vh;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   text-align: center;
  // }
  
  // .title {
  //   font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  //     'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  //   display: block;
  //   font-weight: 300;
  //   font-size: 100px;
  //   color: #35495e;
  //   letter-spacing: 1px;
  // }
  
  .wrapDetail {
    background: #fff url(/images/mh_bg.jpg) no-repeat top center;
    padding-top: 50px;
  }
  </style>
  