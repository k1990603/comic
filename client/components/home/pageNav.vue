<template>
  <nav id='nav'>
    <!-- <p>nav</p> -->
    <div id="banner">
      <img src="/images/logo_new.png" alt="">
    </div>
    <div class="container">
      <ul class='topTheme'>
        <li v-for="(item, index) in naList" :key="index">
          <nuxt-link :to="item.router.name">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      naList: [
        { router: { name: '/' }, title: '首页' },
        { router: { name: '/users' }, title: '少年' },
        { router: { name: '/user/one' }, title: '少女' },
        { router: { name: '/login' }, title: '冒险' },
        { router: { name: 'index' }, title: '搞笑' },
        { router: { name: 'index' }, title: '奇幻' },
        { router: { name: 'index' }, title: '推荐' },
        { router: { name: 'index' }, title: '推荐' }
      ]
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
  #nav {
    // opacity: .8;
    .container {
      min-height: 80px;
      background: url(/images/nav_bg.png) no-repeat top center;
    }
    .topTheme {
      float: left;
      li {
        display: inline-block;
        a {
          padding: 0 22px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
  #banner {
    // margin-bottom: 50px;  
    margin: 10px 20px 40px 0;
    // height: 50px;
    // background: url(/images/logo_new.png) no-repeat top center;
    // background-size: cover;
  }
  </style>