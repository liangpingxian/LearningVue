<template>
  <!-- 业务建模详情 -->
  <div class="content">
    <!-- 动态字段区域 -->
    <el-form
      :model="businessData"
      ref="ruleForm"
      class="dynamic"
    >
      <!-- 循环行 -->
      <div
        class="columns-region"
        v-for="columns in businessData.layouts"
        :key="columns[0].uuid"
      >
        <!-- 循环行内 -->
        <div
          class="column"
          v-for="column in columns"
          :key="column.uuid"
          :uuid="column.uuid"
          :style="styleWithColumn(column)"
        >
          <!-- 根据配置读取不同的字段模板 -->
          <el-form-item
            class="form-item"
            :label='column.name'
            :required='column.isRequired()'
          >
            <div v-if='column.isFieldType(ColumnType.select)'>单选控件</div>
            <div v-else-if='column.isFieldType(ColumnType.date)'>时间控件</div>
            <div v-else-if='column.isFieldType(ColumnType.attachment)'>附件控件</div>
            <div v-else-if='column.isFieldType(ColumnType.detailParent)'>明细控件</div>
            <div v-else-if='column.isFieldType(ColumnType.pureText)'>纯文本控件</div>
            <div v-else-if='column.isFieldType(ColumnType.child)'>子项</div>
            <BMInputComponent
              v-else
              :originData='column'
            >
            </BMInputComponent>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <!-- 动态配置的通知人、审批人、审批意见等 -->
    <div class="custom-region">
    </div>
    <!-- 按钮 -->
    <div class="buttons-region">
    </div>
  </div>
</template>
<script>
import BusinessModel from './business/js/bmDetailModel/BusinessModel.js'
import * as ColumnComponent from './business/components'
import { BussinessFieldType } from './business/js/BusinessCommonHeader.js';
import { testData } from './business/js/testData.js'
export default {
  name: 'Test',
  data () {
    return {
      // 业务建模的整体数据实例
      businessData: {},
      // 字段类型枚举 用来判断调用什么组件
      ColumnType: BussinessFieldType,
    }
  },
  methods: {
    // 计算每一个column样式
    styleWithColumn (column) {
      let color = column.color ? column.color : 'black';
      return `
        flex-basis:${column.getStyleWidth()};
        color:${color};
      `
    }

  },
  components: { 'BMInputComponent': ColumnComponent.BMInputComponent },
  computed: {

  },
  mounted () {
    this.businessData = new BusinessModel(testData);
  },
}
</script>
<style scoped>
/* 让文本框铺开 */
.form-item >>> .el-form-item__content {
  flex: 1;
}
</style>

<style lang='scss' scoped>
.dynamic {
  text-align: left;
  .columns-region {
    display: flex;
    flex-flow: row;
    overflow-x: auto;
    overflow-y: hidden;
    .column {
      flex-shrink: 0;
      // 横向展示
      .form-item {
        display: flex;
        flex-flow: row;
      }
    }
  }
}
</style>
