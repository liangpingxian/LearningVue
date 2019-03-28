<template>
  <div id="home">
    <section class="left">
        <div class="logo">logo</div>
        <div class="config"></div>
    </section>
    <section class="right">
        <div class="banner"></div>
        <div class="content"></div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#home{
    width: 100%;
    height: 100%;
    background:red;
}

.left {
    width: 200px;
    height: 100%;
    float: left;
    background-color:red;
}
.left .logo {
    height: 80px;
    background-color:skyblue;
}
.left .config {
    height: 40px;
    background-color:gold;
    position: fixed;
    width: 200px;
    left: 0px;
    bottom: 0px;

}
.right {
    background-color: blue;
    /* overflow: hidden; */
    height: 800px;
    margin-left: 200px;
}

</style>
