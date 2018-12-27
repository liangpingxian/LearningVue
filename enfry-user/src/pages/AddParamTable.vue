<template>
  <div>
    <el-table :data="tableData">
      <el-table-column
        label="参数名称"
        width="280"
      >
        <template slot-scope="scope">
          <el-input
            placeholder="请输入参数名称"
            v-model="scope.row.name"
            :style="{'margin-left':scope.row.level * 30 + 'px',width:260 - scope.row.level * 30 + 'px'}"
          ></el-input>

        </template>
      </el-table-column>
      <el-table-column
        label="类型"
        width="150"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.type"
            placeholder="请选择"
          >
            <el-option
              v-for="item in typeOptions"
              :key="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="是否必填"
        width="80"
      >
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.isRequire"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column label="描述">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dropdown
            trigger='click'
            @command="handleEdit"
          >
            <span class="el-dropdown-link">
              新增
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="{'index':scope.$index + 1,'type':0}">下方添加行</el-dropdown-item>
              <el-dropdown-item :command="{'index':scope.$index,'type':0}">上方添加行</el-dropdown-item>
              <el-dropdown-item :command="{'index':scope.$index,'type':1}">添加子行</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AddParamTable',
  data () {
    return {
      inputMarginStyle: {
        'margin-left': 5 * 20 + 'px'
        // width: 280 - this.level * 20 + 'px'
      },
      tableData: [{
        name: 'name',
        type: 'String',
        isRequire: true,
        description: '这是参数名字.....................',
        level: 0,
        superLevel: -1
      }, {
        name: 'name',
        type: 'String',
        isRequire: true,
        description: '这是参数名字.....................',
        level: 0,
        superLevel: -1
      }, {
        name: 'name',
        type: 'String',
        isRequire: false,
        description: '这是参数名字.....................',
        level: 0,
        superLevel: -1
      }, {
        name: 'name',
        type: 'String',
        isRequire: false,
        description: '这是参数名字.....................',
        level: 0,
        superLevel: -1
      }],
      typeOptions: ['String', 'Number', 'Object', 'Array'],
      value: 'String'
    }
  },
  methods: {
    handleEdit (command) {
      // debugger
      if (command.type === 0) {
        // 同层级增加
        this.tableData.splice(command.index, 0, {});
      } else {
        // 在子层级最后 加一个
        let currentData = this.tableData[command.index]
        var insertData = {
          level: currentData.level + 1,
          superLevel: currentData.superLevel + 1
        }
        this.tableData.splice(command.index + 1, 0, insertData)
      }
    },
    composeValue (index, row) {
      return {
        'index': index,
        'row': row
      }
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>
<style>
/* .testInput {
  margin-left: 30px;
  margin-right: 10px;
} */
</style>
