w<template>
  <div>
    <div class="detail-area">
      <div class="detail-name">
        <span>{{columnData.name}}</span>
      </div>
      <el-table
        :data="columnData.x_detailData"
        border
        style="width: 100%"
      >
        <el-table-column
          :prop="column.name"
          :label="column.name"
          v-for="column in columnData.x_formDetail"
          :key="column.uuid"
        >
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
import { DetailColumn } from '../../js/columns'
import BaseBusinessColumn from './BaseBusinessColumn.vue'

export default {
  name: 'BMDetailComponent',
  extends: BaseBusinessColumn,
  props: {
    columnData: {
      type: DetailColumn,
      require: true
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.detail-name {
  border: 1px solid rgba(220, 229, 236, 1);
  border-bottom: none;
  border-radius: 4px;
}
</style>
