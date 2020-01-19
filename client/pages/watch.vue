<template>
  <div class="wrap">
    <v-header></v-header>
    <v-nav></v-nav>
    <div class="container">
      <div v-for="(item, index) in imgList" :key="index">
        <img v-lazy="item.url" :alt="item.pid">
      </div>
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
    name: "index",
    components: {
      VHeader,
      VFooter,
      VNav
    },
    head: {
    // title: process.env.npm_package_name || '',
    title: '动漫',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '动漫之家'},
      { name: 'referrer', content: 'no-referrer'},
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      { hid: 'description', name: 'description', content: '提供各国漫画' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
    data () {
      return {
        imgList: []
      }
  },
  computed: {
    // ...mapGetters({
    //   getCapter: 'getCapter'
    // })
    // getCapter () {
    //     return this.$store.state.manhua.capterId
    //   }
    ...mapState({
      getCapter: state => state.capterId
    })
  },
  methods: {
  },
  created () {
    // this.listId = this.$route.query.listId
    let postBody = {
      chapter_id: this.getCapter
    }
    API.getChapter(postBody)
      .then(res => {
        this.imgList = res.data
      })
      .catch(err => {
        console.log(err, "1111111111111");
      })
  }
  }
  </script>
  
  <style lang="less" scoped>  
  .wrap {
    background: #fff url(/images/mh_bg.jpg) no-repeat top center;
    padding-top: 50px;
  }
  </style>
  