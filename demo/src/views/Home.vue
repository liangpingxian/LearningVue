<template>
  <grid-layout
    :layout="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true"
  >

    <grid-item
      v-for="item in layout"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
    >
      <div
        class="grid-content"
        v-text="item.i"
        :class="{loading:!item.loaded,loaded:item.loaded}"
      >
        <!-- {{item.i}} -->
      </div>

    </grid-item>
  </grid-layout>
</template>
<script>
import VueGridLayout from 'vue-grid-layout';

let GridLayout = VueGridLayout.GridLayout;
let GridItem = VueGridLayout.GridItem;

var testLayout = [
  { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", 'loaded': false },
  { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1", 'loaded': false },
  { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2", 'loaded': false },
  { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3", 'loaded': false },
  { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4", 'loaded': false },
  { "x": 10, "y": 0, "w": 2, "h": 3, "i": "5", 'loaded': false },
  { "x": 0, "y": 5, "w": 2, "h": 5, "i": "6", 'loaded': false },
  { "x": 2, "y": 5, "w": 2, "h": 5, "i": "7", 'loaded': false },
  { "x": 4, "y": 5, "w": 2, "h": 5, "i": "8", 'loaded': false },
  { "x": 6, "y": 4, "w": 2, "h": 4, "i": "9", 'loaded': false },
  { "x": 8, "y": 4, "w": 2, "h": 4, "i": "10", 'loaded': false },
  { "x": 10, "y": 4, "w": 2, "h": 4, "i": "11", 'loaded': false },
  { "x": 0, "y": 10, "w": 2, "h": 5, "i": "12", 'loaded': false },
  { "x": 2, "y": 10, "w": 2, "h": 5, "i": "13", 'loaded': false },
  { "x": 4, "y": 8, "w": 2, "h": 4, "i": "14", 'loaded': false },
  { "x": 6, "y": 8, "w": 2, "h": 4, "i": "15", 'loaded': false },
  { "x": 8, "y": 10, "w": 2, "h": 5, "i": "16", 'loaded': false },
  { "x": 10, "y": 4, "w": 2, "h": 2, "i": "17", 'loaded': false },
  { "x": 0, "y": 9, "w": 2, "h": 3, "i": "18", 'loaded': false },
  { "x": 2, "y": 6, "w": 2, "h": 2, "i": "19", 'loaded': false }
];

export default {
  name: 'Home',
  components: {
    GridLayout,
    GridItem
  },
  data: function () {
    return {
      layout: testLayout,
    };
  },
  mounted () {
    this.layout.map(obj => {
      let time = Math.random() * 5;
      setTimeout(() => {
        obj.loaded = true;
      }, time * 1000);
    })
  },
  methods: {

  }
}
</script>
<style scoped>
grid-item {
}
.grid-content {
  width: 100%;
  height: 100%;
}
.loading {
  background-color: red;
}
.loaded {
  background-color: green;
}
</style>
