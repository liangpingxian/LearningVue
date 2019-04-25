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
          :style="styleWithColumn(column)"
        >
          <!-- 根据配置读取不同的字段模板 -->
          <el-form-item
            class="form-item"
            :label='column.x_formShowName'
            :required="column.requrein === 0"
          >
            <!-- 字段渲染 -->
            <BusinessColumnRendering :column='column'>
            </BusinessColumnRendering>
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
import BusinessColumnRendering from './business/rendering/BusinessColumnRendering.vue'
import { testData } from './business/js/testData.js'
export default {
  name: 'Test',
  data () {
    return {
      // 业务建模的整体数据实例
      businessData: {}
    }
  },
  methods: {
    // 计算每一个column样式
    styleWithColumn (column) {
      return `
        flex-basis:${column.x_styleWidth};
        color:${column.x_showColor} !important;
      `
    }
  },
  components: {
    BusinessColumnRendering
  },
  created () {
    this.businessData = new BusinessModel(testData);
  },
}
</script>
<style>
/* 让文本框铺开 */
.el-form-item__content {
  flex: 1;
}
.el-input__inner {
  border: 1px solid rgba(232, 236, 242, 1) !important;
  border-radius: 4px !important;
  height: 32px !important;
}
.el-form-item__label {
  height: 32px !important;
  line-height: 32px !important;
}

.el-form-item__content {
  line-height: 32px !important;
}
.el-input__icon,
.el-date-editor .el-range-separator {
  line-height: 24px !important;
}
</style>

<style scoped>
.dynamic >>> .el-form-item {
  font-size: 12px !important;
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
      vertical-align: center;
      // 横向展示
      .form-item {
        display: flex;
        flex-flow: row;
        margin: 10px;
      }
    }
  }
}
</style>
