<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      label="日期"
      width="180"
    >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180"
    >
      <template slot-scope="scope">
        <el-popover
          trigger="hover"
          placement="top"
        >
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div
            slot="reference"
            class="name-wrapper"
          >
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
        >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'x-level-table',
  data () {
    return {
      tableData: [
        {
          name: 'id',
          type: 1,
          typeName: 'String',
          description: '这是参数说明',
          remark: '这里是备注',
          childrens: []
        },
        {
          name: 'id',
          type: 1,
          typeName: 'String',
          isRequire: '1',
          description: '这是参数说明',
          childrens: []
        }
      ]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style>
</style>
