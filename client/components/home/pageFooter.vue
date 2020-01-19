<template>
  <div>
    <div class="logo" />
    <p>footer</p>
    <!-- <a-menu
      theme="dark"
      mode="inline"
      :defaultSelectedKeys="routerKey"
      :openKeys="openKeys"
      @openChange="onOpenChange"
    >
      <a-sub-menu v-for="item in subList" :key="item.key">
        <span slot="title">
          <a-icon :type="item.type"></a-icon>
          <span>{{ item.label }}</span>
        </span>
        <a-menu-item v-for="_item in item.children" :key="_item.key">
          <router-link :to="_item.to">{{ _item.label }}</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ["mode1", "mode2", "mode3"],
      openKeys: ["mode1"],
      routerKey: ["1"],
      num: 0,
      routerData: ["auth", "three"],
      subList: [
        {
          key: "mode1",
          type: "user",
          label: "权限系统",
          children: [
            { key: "1", to: "/auth", label: "用户管理" },
            { key: "2", to: "/group", label: "角色管理" },
            { key: "3", to: "/menu", label: "菜单管理" },
            { key: "4", to: "/three", label: "功能管理" },
            { key: "5", to: "/three", label: "接口管理" }
          ]
        },
        {
          key: "mode2",
          type: "video-camera",
          label: "two",
          children: [
            { key: "6", to: "three", label: "shang" },
            { key: "7", to: "three", label: "shang" },
            { key: "8", to: "three", label: "shang" }
          ]
        },
        {
          key: "mode3",
          type: "upload",
          label: "three",
          children: [
            { key: "9", to: "/three", label: "shang" },
            { key: "10", to: "/three", label: "shang" },
            { key: "11", to: "/three", label: "shang" }
          ]
        }
      ]
    };
  },
  created() {
    // let href = window.location.href;
    // let url = href.split("#");
    // // debugger
    // this.routerData.forEach((item, index) => {
    //   if (url[1].indexOf(item) > -1) {
    //     this.routerKey[0] = String(index + 1);
    //     this.num = index + 1;
    //     this.$forceUpdate();
    //   } else if (url[1] === "/") {
    //     this.routerKey[0] = "1";
    //   }
    // });
    // if (this.num < 2) {
    //   this.openKeys = ["mode1"];
    // } else if (this.num < 5) {
    //   this.openKeys = ["mode2"];
    // } else if (this.num < 7) {
    //   this.openKeys = ["mode3"];
    // } else if (this.num < 9) {
    //   this.openKeys = ["mode2"];
    // } else if (this.num < 11) {
    //   this.openKeys = ["mode2"];
    // } else if (this.num < 12) {
    //   this.openKeys = ["mode3"];
    // } else if (this.num < 13) {
    //   this.openKeys = ["mode3"];
    // }
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  }
};
</script>