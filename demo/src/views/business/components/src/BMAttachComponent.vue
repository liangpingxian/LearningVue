<template>
  <div>
    <el-select
      v-model="columnData.x_attachDatas"
      placeholder="请选择"
      class="select"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { AttachmentColumn } from '../../js/columns'
import BaseBusinessColumn from './BaseBusinessColumn.vue'

export default {
  name: 'BMAttachComponent',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  extends: BaseBusinessColumn,
  props: {
    columnData: {
      type: AttachmentColumn,
      require: true
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.select {
  width: 100% !important;
}
</style>
