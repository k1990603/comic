import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
    preLoad: 1.3,
    error: '/images/timg2.gif',
    loading: '/images/timg2.gif',
    attempt: 1
  })
