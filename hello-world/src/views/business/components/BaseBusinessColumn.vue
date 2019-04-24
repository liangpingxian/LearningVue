<template>
  <div></div>
</template>
<script>

import { BaseColumn } from '../js/columns'

export default {
  name: 'BaseBusinessColumn',
  data () {
    return {
      // 父组件传递过来的值
      columnData: this.originData,
    }
  },
  props: {
    // 最初的数据
    originData: {
      type: BaseColumn,
      required: true
    }
  },
}
</script>
<style>
</style>
