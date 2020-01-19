<template>
  <a-modal :title="title + '用户'" :visible="visible" :confirmLoading="confirmLoading">
    <a-form :form="form">
      <a-form-item label="用户ID" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          placeholder="用户ID"
          v-decorator="['user', { rules: [{required:true, message: '请输入用户ID'}] }]"
        ></a-input>
      </a-form-item>
      <a-form-item label="用户昵称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input placeholder="用户昵称" v-decorator="['name', { rules: [] }]"></a-input>
      </a-form-item>
      <a-form-item label="手机号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input placeholder="手机号" v-decorator="['mobile', { rules: [] }]"></a-input>
      </a-form-item>
      <a-form-item label="角色" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-select v-decorator="['group', { rules: [{required:true, message: '请输入用户ID'}] }]"></a-select>
      </a-form-item>
      <a-form-item label="业务线" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-select v-decorator="['group', { rules: [{required:true, message: '请输入用户ID'}] }]"></a-select>
      </a-form-item>
      <a-form-item label="服务范围" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-select v-decorator="['group', { rules: [{required:true, message: '请输入用户ID'}] }]"></a-select>
      </a-form-item>
    </a-form>
    <template slot="footer">
      <a-button type="primary" class="marginBtn" @click="addAction">{{ title }}</a-button>
      <a-button class="marginBtn" @click="cancel">取消</a-button>
    </template>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  props: {
    visible: {
      type: Boolean,
      detail: false
    },
    title: {
      type: String,
      detail: ""
    },
    confirmLoading: {
      type: Boolean,
      detail: false
    }
  },
  methods: {
    addAction() {
      this.form.validateFields((err, value) => {
        if (!err) {
          this.$emit("addAction");
        }
      });
    },
    cancel() {
      this.$emit("addCancel");
    }
  }
};
</script>  