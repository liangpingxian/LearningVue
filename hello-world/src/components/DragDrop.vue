<template>
  <div
    class="bg"
    @mousemove="draging"
    @mouseup="dragend"
  >
    <img
      src="../assets/move.png"
      @mousedown.prevent="dragStart"
    >
  </div>
</template>
<script>
export default {
  name: 'DragDrop',
  data () {
    return {
      offsetX: 0,
      offsetY: 0,
      isDraging: false,
      dragingObject: null
    }
  },
  methods: {
    dragStart (event) {
      //拖动开始 计算鼠标在拖动元素内的位置
      this.offsetX = event.clientX - event.target.offsetLeft;
      this.offsetY = event.clientY - event.target.offsetTop;
      this.isDraging = true;
      this.dragingObject = event.target;
    },
    draging (event) {
      if (this.dragingObject) {
        //拖动中
        let currentX = event.clientX - this.offsetX;
        let currentY = event.clientY - this.offsetY;

        this.dragingObject.style.left = currentX + 'px';
        this.dragingObject.style.top = currentY + 'px';
      }
    },
    dragend (event) {
      this.dragingObject = null;
    }

  }
}
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 700px;
  background-color: white;
  position: relative;
  img {
    width: 50px;
    position: absolute;
    left: 668px;
    top: 1px;
  }
}
</style>
