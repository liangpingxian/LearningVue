<template>
  <div>
    <el-input
      v-model="subData"
      placeholder="请输入内容"
      @input='oninput()'
    ></el-input>
    <el-button
      type='primary'
      @click="addData"
    >添加</el-button>
  </div>
</template>
<script>
export default {
  name: 'Sub',
  props: ['inputData'],
  data () {
    return {
      subData: ''
    }
  },
  methods: {
    //添加数据
    addData () {
      this.$emit('addNewData', this.subData)
      this.subData = ''
    },
    // 输入判断截取
    oninput () {
      if (this.subData.length > 16) {
        alert('长度超过16位');
        this.subData = this.subData.slice(0, 16)
      }
    }
  },
  mounted () {
    this.subData = this.inputData;
  }
}
</script>
<style scoped>
* {
  text-align: left;
}
</style>
