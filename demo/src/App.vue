<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <!-- <Home />
     -->
    <Test />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DragDrop from './components/DragDrop.vue'
// import Home from './views/Home.vue'
import Test from './views/Test.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    // DragDrop,
    // Home,
    Test,
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  overflow: hidden;
}
body {
  background-color: white;
  margin: 0px;
}
</style>
