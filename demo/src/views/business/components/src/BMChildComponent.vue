<template>
  <div>
    这是子项
  </div>
</template>

<script>
import { ChildColumn } from '../../js/columns'
import BaseBusinessColumn from './BaseBusinessColumn.vue'

export default {
  name: 'BMChildComponent',
  extends: BaseBusinessColumn,
  props: {
    columnData: {
      type: ChildColumn,
      require: true
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
