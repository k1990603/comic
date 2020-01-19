
  <template>
  <div class="more">
    <v-header></v-header>
    <v-nav></v-nav>
    <div class="container">
      <a-row type="flex" justify="space-between">
        <a-col :span="4" class="wrap_item" v-for="(item, index) in manhuaList" :key="index">
          <img v-lazy="item.picture" :alt="item.title"  @click="toDetail(item)">
          <p>{{ item.title }}</p>
        </a-col>
      </a-row>
      <a-locale-provider :locale="zhCN">
        <a-pagination :total="totalPage" :current="pagelimit.page" @change="paginationChange" @showSizeChange="pageSizeChange" showSizeChanger showQuickJumper :pageSizeOptions="pageSizeOptions"/>
      </a-locale-provider>
    </div>
    <v-footer></v-footer>
  </div>
  </template>
  
  <script>
  import VHeader from '~/components/home/pageTop'
  import VFooter from '~/components/home/pageFooter'
  import VNav from '~/components/home/pageNav'
  import * as API from "../api/one";
  import { mapActions } from 'vuex'
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

  export default {
    name: "more",
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
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      { hid: 'description', name: 'description', content: '提供各国漫画' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
    data () {
      return {
        zhCN,
        manhuaList: [],
        pagelimit: {
          size: 10,
          page: 1
        },
        pageSizeOptions: ['10', '20', '50'],
        totalPage: undefined, // 总页数
      }
  },
  mounted () {
    this.getManhua()
  },
  methods: {
    ...mapActions({
      // updateManhua: 'manhua/updateManhua'
      updateManhua: 'updateManhua'
    }),
    getManhua () {
      API.getManhuaList(this.pagelimit)
        .then(res => {
          this.manhuaList = res.data.list
          this.totalPage = res.data.total
          // console.log(this.manhuaList);
        })
        .catch(err => {
          console.log(err, "1111111111111");
        })
    },
    toDetail (item) {
      this.updateManhua(item).then(()=>{
        this.$router.push({ path: `detail`})
      })
     },
     paginationChange (val) {
      // console.log('paginationChangeval', val)
      this.pagelimit.page = val
      this.getManhuaList()
    },
    pageSizeChange (val, pageSize) {
      // console.log('pageSizeChangePageSize', pageSize)
      this.pagelimit.page = 1
      this.pagelimit.size = pageSize
      this.getManhuaList()
    }
  }
  }
  </script>
  
  <style lang="less" scoped>
  .more {
    background: #fff url(/images/mh_bg.jpg) no-repeat top center;
    // width: 100%;
    padding-top: 50px;
    .wrap_item {
      margin-bottom: 50px;
      padding: 10px;
      img {
        cursor: pointer;
        width: 100%;
      }
    }
    .titleTop {
      overflow: hidden;
      padding: 0 10px;
      .fr {
        color: #666;
      }
    }
  }
  </style>
  