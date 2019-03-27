<template>
  <div class="container">
    <page-header title="通用参数说明"></page-header>
    <div>
      <div class="classType">APP</div>
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%"
        size='mini'
      >
        <el-table-column
          label="通用参数"
          width="180"
          prop="name"
        >
        </el-table-column>
        <el-table-column
          label="说明"
          prop="description"
        >
        </el-table-column>
      </el-table>
    </div>
    <div>
      <div class="classType">PC</div>
      <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%"
        size='mini'
      >
        <el-table-column
          label="通用参数"
          width="180"
          prop="name"
        >
        </el-table-column>
        <el-table-column
          label="说明"
          prop="description"
        >
        </el-table-column>
      </el-table>
      <div></div>
    </div>
  </div>
</template>
<script>
import PageHeader from '../components/Pageheader'
export default {
  components: { PageHeader },
  data () {
    return {
      tableData: [
        { name: '参数名', description: '这是说明' }, { name: '参数名', description: '这是说明' }, { name: '参数名', description: '这是说明' }
      ]
    }
  },
  computed: {
    rowStyle (row, rowIndex) {
      return { 'height': '40px' }
    }
  }
}
</script>
<style scoped>
div {
  background-color: red;
}
.classType {
  height: 50px;
  font-weight: bold;
  text-align: left;
  margin-left: 15px;
  line-height: 50px;
}
.container {
  padding-bottom: 15px;
}
</style>
