<template>
  <div>
    <el-date-picker
      v-model="columnData.x_columnValue"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      class="date-picker"
      v-if="columnData.dateRange === 0"
    >
    </el-date-picker>
    <el-date-picker
      v-model="columnData.x_columnValue"
      type="date"
      :placeholder="columnData.name"
      class="date-picker"
      v-else
    >
    </el-date-picker>
  </div>
</template>

<script>
import { DateColumn } from '../../js/columns'
import BaseBusinessColumn from './BaseBusinessColumn.vue'

export default {
  name: 'BMDateComponent',
  extends: BaseBusinessColumn,
  props: {
    columnData: {
      type: DateColumn,
      require: true
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.date-picker {
  width: 100% !important;
}
</style>
