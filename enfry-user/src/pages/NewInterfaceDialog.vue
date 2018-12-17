<template>
  <div>
    <el-dropdown
      trigger='click'
      @command="handleCommand"
    >
      <span class="el-dropdown-link">
        新增
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command='0'>分类</el-dropdown-item>
        <el-dropdown-item command='1'>接口</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dialog
      class="interface-category"
      title="新增分类"
      :visible.sync="categoryDailogShow"
    >
      <el-form>
        <el-form-item
          label="分类名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="interfaceCatoryName"
            placeholder="请输入分类名称"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="categoryDailogShow = false">取 消</el-button>
        <el-button
          type="primary"
          @click="categoryDailogShow = false"
        >确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog
      class="interface"
      title="新增接口"
      :visible.sync="interfaceDailogShow"
    >
      <el-form :model="interfaceData">
        <el-form-item
          label="接口分类"
          :label-width="formLabelWidth"
        >
          <el-select
            v-model="interfaceData.category"
            placeholder="请选择接口分类"
          >
            <el-option
              label="分类1"
              value="分类1"
            ></el-option>
            <el-option
              label="分类2"
              value="分类2"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="接口名称"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="interfaceData.name"
            placeholder="请输入接口名称"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="interfaceDailogShow = false">取 消</el-button>
        <el-button
          type="primary"
          @click="toCreatAInterface"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'NewInterfaceDialog',
  data () {
    return {
      interfaceDailogShow: false,
      categoryDailogShow: false,
      interfaceData: {
        category: '',
        name: ''
      },
      interfaceCatoryName: '',
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleCommand (command) {
      if (command === '1') {
        this.interfaceDailogShow = true
      } else {
        this.categoryDailogShow = true
      }
    },
    toCreatAInterface () {
      this.interfaceDailogShow = false
      this.$emit('creatAInterface', this.interfaceData)
    }
  }
}
</script>
<style>
/* .interface .el-select {
  text-align: left;
} */

.el-dialog {
  text-align: left;
}
</style>
