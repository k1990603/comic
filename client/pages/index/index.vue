<template>
  <section id="section">
    <div class="titleTop">
      <span class="fl">推荐动漫</span>
      <nuxt-link class="fr" :to="{name:'more'}">
        更多
      </nuxt-link>
    </div>
      <a-row type="flex" justify="space-between">
        <a-col :span="4" class="wrap_item" v-for="(item, index) in manhuaList" :key="index">
          <img v-lazy="item.picture" :alt="item.title"  @click="toDetail(item)">
          <!-- <nuxt-link :to="{name:'detail',query:{listId:item.id}}">
            <img :src="item.picture" alt="">
          </nuxt-link> -->
          <p>{{ item.title }}</p>
        </a-col>
      </a-row>
  </section>
</template>

<script>
import { setTimeout } from "timers";
import { mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      // updateManhua: 'manhua/updateManhua'
      updateManhua: 'updateManhua'
    }),
    toDetail (item) {
      this.updateManhua(item).then(()=>{
        this.$router.push({ path: `detail`})
      })
     },
     search () {

     }
  },
  props: {
    keyWord: {
      type: String,
      detail: ''
    },
    manhuaList: {
      type: Array,
      detail: []
    }
  },
  mounted() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#section {
  min-height: 500px;
  overflow: hidden;
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
