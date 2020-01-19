module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    proxy: true,
  },
  head: {
    // title: process.env.npm_package_name || '',
    title: '动漫',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'keywords', content: '漫画'},
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      {hid: 'description', name: 'description', content: '提供各国漫画'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: ['ant-design-vue/dist/antd.css', '~/assets/css/common.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/antd-ui', '@/plugins/lazy-load'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {},
  },
};
