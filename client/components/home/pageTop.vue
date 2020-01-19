<template>
  <header id="header" :class="{ 'active': isActive }">
    <!-- <p>header</p> -->
    <div class="container">
      <ul class="topTheme">
        <li v-for="(item, index) in naList" :key="index">
          <nuxt-link :to="item.router.name">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
    <!-- <span>{{ token }} 777777777777777777777</span> -->
  </header>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      naList: [
        { router: { name: "/" }, title: "首页" },
        { router: { name: "/users" }, title: "古风" },
        { router: { name: "/user/one" }, title: "玄幻" },
        { router: { name: "/login" }, title: "恋爱" },
        { router: { name: "index" }, title: "爆笑" },
        { router: { name: "index" }, title: "都市" },
        { router: { name: "index" }, title: "热血" },
        { router: { name: "index" }, title: "明星" },
        { router: { name: "index" }, title: "历史" },
        { router: { name: "index" }, title: "穿越" },
        { router: { name: "index" }, title: "爆笑" },
        { router: { name: "index" }, title: "武侠" },
        { router: { name: "index" }, title: "竞技" },
        { router: { name: "index" }, title: "后宫" },
        { router: { name: "index" }, title: "科幻," },
        { router: { name: "index" }, title: "校园" },
        { router: { name: "index" }, title: "格斗" },
        { router: { name: "index" }, title: "脑洞" },
        { router: { name: "index" }, title: "美食" }
      ],
      timer: null,
      isActive: false
    };
  },
  created() {
    // console.log(this.token, 'token')
    if (process.browser) {
      this.loadMore();
      window.addEventListener("scroll", this.loadMore, true);
    }
  },
  computed: {
    // ...mapGetters({
    //   token: 'getToken'
    // })
    // token () {
    //   return this.$store.state.manhua.token
    // }
    // ...mapState({
    //   token: state => state.token
    // })
  },
  methods: {
    loadMore() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        var clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight; //document.documentElement获取数据
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop; //document.documentElement获取数据
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight; //document.documentElement获取数据
        if (scrollTop >= 200) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      }, 13);
    },
    searchManhua() {}
  }
};
</script>
<style lang="less" scoped>
#header {
  position: fixed;
  top: 0;
  min-height: 55px;
  width: 100%;
  background-color: #ffffff;
  transition: all 0.3s;
  z-index: 1000;
  &.active {
    opacity: 1;
    background-color: #56bbff83;
    .topTheme {
      float: left;
      li {
        display: inline-block;
        a {
          margin: 0 10px;
          height: 55px;
          line-height: 55px;
          text-align: center;
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
  .topTheme {
    float: left;
    li {
      display: inline-block;
      a {
        margin: 0 10px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        color: #4d4d4d;
        font-size: 12px;
      }
    }
  }
}
</style>
