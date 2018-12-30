<template>
  <div id='header'>
    <span
      v-text="title"
      class="title"
    >
    </span>
    <slot name='right'>
    </slot>
  </div>
</template>
<script>
export default {
  props: ['title']
}
</script>

<style lang='scss' scoped>
#header {
  text-align: left;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #dedede;
  margin-left: 10px;
  margin-right: 10px;
  .title {
    color: black;
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
  }
}
</style>
