<template>
  <div>
    <div class="title">
      {{columnData.name}}
    </div>
    <div class="content">
      <div
        class='line line-title'
        :style="lineStyle"
      >
        {{columnData.captionDescription}}
      </div>
      <div
        class='line'
        :style="lineStyle"
      >
        {{columnData.subTitle}}
      </div>
    </div>

  </div>
</template>
<script>
import { PureTextColumn } from '../../js/columns'
import BaseBusinessColumn from './BaseBusinessColumn'

export default {
  name: 'BMPureTextComponent',
  extends: BaseBusinessColumn,
  props: {
    columnData: {
      type: PureTextColumn,
      require: true
    }
  },
  computed: {
    lineStyle: function () {
      return `text-align: ${this.columnData.x_align};`
    }
  }
}
</script>
<style scoped>
.content {
  border: 1px solid #e8ecf2;
  border-radius: 4px;
}
.line {
  line-height: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
}
.title {
  font-weight: bold;
}
.line-title {
  font-weight: bold;
  border-bottom: 1px solid #e8ecf2;
  background-color: #f5f7fa;
}
</style>
