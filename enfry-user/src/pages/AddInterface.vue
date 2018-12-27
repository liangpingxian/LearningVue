<template>
  <div id="interfaceContainer">
    <header id="name">
      <span class="name-left">{{interfaceData.name}}</span>
    </header>
    <section id="description">
      <span class="bolderTitle">接口描述</span>
      <span class="description-body">
        <el-input
          type="textarea"
          autosize
          placeholder="请输入接口描述"
        ></el-input>
      </span>
    </section>
    <section id="alert">
      <span class="bolderTitle">注意事项</span>
      <span class="alert-body">
        <el-input
          type="textarea"
          autosize
          placeholder="请输入注意事项"
        ></el-input>
      </span>
    </section>
    <section id="address">
      <div class="bolderTitle">接口地址</div>
      <span class="address-body">
        <el-input placeholder="请输入接口地址"></el-input>
      </span>
    </section>
    <section id="httpType">
      <div class="bolderTitle">HTTP方式</div>
      <el-select
        placeholder="请选择HTTP方式"
        v-model="httpType"
      >
        <el-option
          label="POST"
          value="POST"
        ></el-option>
        <el-option
          label="GET"
          value="GET"
        ></el-option>
      </el-select>

    </section>
    <section id="param">
      <div class="bolderTitle">请求参数</div>
      <AddParamTable></AddParamTable>
    </section>
    <section id="response">
      <div class="bolderTitle">返回结果</div>
      <div class="response-type">json示例</div>
      <div class="response-body">
        <el-input
          type="textarea"
          :readonly=true
          :rows="10"
          placeholder="请输入内容"
        ></el-input>
      </div>
    </section>
    <section id="responseDescription">
      <div class="bolderTitle">返回字段说明</div>
      <el-table
        stripe
        style="width: 100%"
        size="mini"
      >
        <el-table-column
          prop="name"
          label="参数名"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="type"
          label="参数类型"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="require"
          label="是否必填"
          width="180"
          :formatter="formatRequire"
        ></el-table-column>
        <el-table-column
          prop="description"
          label="说明"
        ></el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script>
import AddParamTable from '../pages/AddParamTable.vue'
export default {
  name: 'AddInterface',
  props: ['interfaceData'],
  components: { AddParamTable },
  data () {
    return {
      httpType: ''
    }
  },
  methods: {
    formatRequire: function (row, column) {
      const require = row[column.property]
      return require ? '是' : '否'
    }
  }
}
</script>
<style scoped>
#interfaceContainer {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  text-align: left;
}
/*通用*/
.bolderTitle {
  font-weight: bold;
  font-size: 15px;
}
* {
  margin-top: 10px;
}

/*接口名*/
#name {
  margin-top: 20px;
}
#name .name-operation {
  vertical-align: top;
  margin-top: 0;
  margin-left: 30px;
}
#name .name-operation .el-dropdown {
  margin-top: 0;
  vertical-align: top;
}
/*接口地址*/
#address .address-body {
  width: 150px;
}
/*HTTP方式*/
/*请求参数*/
</style>
