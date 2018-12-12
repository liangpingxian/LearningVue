<template>
  <el-container id="container">
    <el-header id="header">
      <div style="font-weight: bolder;font-size: 25px;">en+接口平台</div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu background-color=#545c64 text-color="#fff" active-text-color="#ffd04b">
          <el-submenu :index=category.id v-for="(category,index) in categorys" :key="category.id">
            <template slot="title">{{(category.name)+ (index+1)}}</template>
            <el-menu-item v-for="item in category.items" :key="item.id" :index=item.id>{{ item.name }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <interface-show></interface-show>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import InterfaceShow from '../components/InterfaceShow'
export default {
  name: 'HomePage',
  components: {InterfaceShow},
  data () {
    const item = {
      date: 'id',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item),
      categorys: [
        {
          id: '11',
          name: '分类名',
          items: [
            {
              id: '111',
              name: '接口名1'
            },
            {
              id: '112',
              name: '接口名2'
            },
            {
              id: '113',
              name: '接口名3'
            }
          ]
        },
        {
          id: '12',
          name: '分类名',
          items: [
            {
              id: '121',
              name: '接口名1'
            },
            {
              id: '122',
              name: '接口名2'
            },
            {
              id: '123',
              name: '接口名3'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

  #container {
    height: 100%;
  }
  #header {
    background-color: skyblue;
    color: #333;
    line-height: 60px;
    width: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-menu {
    border-right-width: 0;
  }
  .el-main {
    padding: 0;
  }
</style>
