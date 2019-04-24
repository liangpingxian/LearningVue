<template>
  <div>
    <el-input :placeholder="this.columnData.defaults">
    </el-input>
  </div>
</template>
<script>
import { InputColumn } from '../js/columns'
import BaseBusinessColumn from './BaseBusinessColumn'

export default {
  name: 'BMInputComponent',
  extends: BaseBusinessColumn,
  props: {
    originData: {
      type: InputColumn
    }
  },
  mounted () {
  },
  computed: {
  }
}
</script>
<style>
</style>
