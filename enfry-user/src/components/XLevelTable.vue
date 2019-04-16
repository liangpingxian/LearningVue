<template>
  <el-table
    :data="processedData"
    style="width: 100%"
  >
    <el-table-column
      label="名字"
      width="300"
    >
     <template slot-scope="scope">
      {{scope.row.name}}
      </template>
    </el-table-column>
    <el-table-column
      label="层级"
      width="300"
    >
     <template slot-scope="scope">
      {{scope.row.level}}
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
          childrens: [{
            name: '子行1111',
            type: 1,
            typeName: 'String',
            description: '这是参数说明',
            remark: '这里是备注',
            childrens: []
          },
          {
            name: '子行11111',
            type: 1,
            typeName: 'String',
            description: '这是参数说明',
            remark: '这里是备注',
            childrens: [{
              name: '子行22222',
              type: 1,
              typeName: 'String',
              description: '这是参数说明',
              remark: '这里是备注',
              childrens: []
            }]
          },
          {
            name: '子行111111',
            type: 1,
            typeName: 'String',
            description: '这是参数说明',
            remark: '这里是备注',
            childrens: []
          }]
        },
        {
          name: 'id',
          type: 1,
          typeName: 'String',
          isRequire: '1',
          description: '这是参数说明',
          childrens: []
        }
      ],
      processedData: []
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      let toDeleteData = this.processedData.splice(index, 1);
      console.log(toDeleteData)
    },
    processAllData () {
      let processedDatas = []
      function toProcessDatas (datas, level) {
        datas.forEach(element => {
          element.level = level;
          processedDatas.push(element);
          if (element.childrens.length > 0) {
            toProcessDatas(element.childrens, level + 1)
          }
        });
      }
      toProcessDatas(this.tableData, 0);
      return processedDatas
    }

  },
  created () {
    this.processedData = this.processAllData();
  }

}
</script>
<style>
</style>
