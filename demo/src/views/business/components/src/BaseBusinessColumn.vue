<template>
  <div></div>
</template>
<script>

import { BaseColumn } from '../../js/columns'

export default {
  name: 'BaseBusinessColumn',
  props: {
    // 最初的数据
    columnData: {
      type: BaseColumn,
      required: true
    }
  },
}
</script>
<style>
</style>
