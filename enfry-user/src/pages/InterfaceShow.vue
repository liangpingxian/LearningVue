<template>
  <div id="interfaceContainer">
    <span class="name-operation">
      <el-dropdown>
        <span class="el-dropdown-link">
          接口操作按钮
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>编辑</el-dropdown-item>
          <el-dropdown-item>停用</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
    <header id="name">
      <span class="name-left">{{dataId}}</span>
    </header>
    <section id="description">
      <div class="bolderTitle">接口描述</div>
      <span class="description-body">这是接口描述</span>
    </section>
    <section id="alert">
      <span class="alert-body">请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意</span>
    </section>
    <section id="address">
      <div class="bolderTitle">接口地址</div>
      <span class="address-body">这是接口地址</span>
    </section>
    <section id="httpType">
      <div class="bolderTitle">HTTP方式</div>
      <span class="httpType-body">POST</span>
    </section>
    <section id="param">
      <div class="bolderTitle">请求参数</div>
      <el-table
        stripe
        style="width: 100%"
        size="mini"
      >
        <el-table-column
          prop="name"
          label="参数名"
          width="100"
          align='center'
        ></el-table-column>
        <el-table-column
          prop="type"
          label="参数类型"
          width="80"
          align='center'
        ></el-table-column>
        <el-table-column
          prop="require"
          label="是否必填"
          width="80"
          align='center'
          :formatter="formatRequire"
        ></el-table-column>
        <el-table-column
          prop="description"
          label="说明"
          align='left'
        ></el-table-column>
      </el-table>
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
export default {
  name: 'InterfaceShow',
  props: ['id'],
  data () {
    return {
      dataId: ''
    }
  },
  methods: {
    formatRequire: function (row, column) {
      const require = row[column.property]
      return require ? '是' : '否'
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      // 变了个接口 刷新数据啊。。。。
      console.log(to.params.id)
      console.log(this.id)
      this.dataId = to.params.id;
    }
  },
  created () {
    var paths = this.$route.path.split('/');
    this.dataId = paths[paths.length - 1];
  }

}
</script>
<style lang='scss' scoped>
#interfaceContainer {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  text-align: left;
  /*通用*/
  .bolderTitle {
    font-weight: bold;
    font-size: 15px;
  }
  /*接口名*/
  #name {
    margin-top: 0px;
    height: 40px;
    line-height: 40px;
  }
  .name-operation {
    margin-top: 20px;
    margin-left: 30px;
    float: right;
    .el-dropdown {
      margin-top: 0;
      vertical-align: top;
    }
  }
  /*接口说明*/
  #description {
    .description-body {
      background-color: grey;
      font-size: 13px;
    }
  }

  /*注意*/
  #alert {
    background-color: rebeccapurple;
    .alert-body {
      padding: 10px;
      font-size: 12px;
      color: white;
    }
  }

  /*接口地址*/
  #address {
    .address-body {
      background-color: grey;
      font-size: 13px;
      padding-right: 5px;
      padding-left: 5px;
    }
  }
  /*HTTP方式*/
  #httpType {
    .httpType-body {
      background-color: grey;
      font-size: 13px;
      padding-right: 5px;
      padding-left: 5px;
    }
  }
  * {
    margin-top: 10px;
  }
}

/*请求参数*/
</style>
