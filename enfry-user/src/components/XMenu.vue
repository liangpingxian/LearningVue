<template>
  <div class="x-menu">
    <el-menu
      background-color=#25293C
      text-color="#8c94B4"
      active-text-color="#ffffff"
      default-active="overview"
    >
      <el-submenu
        :index=category.id
        v-for="category in categorys"
        :key="category.id"
      >
        <template slot="title">{{category.name}}</template>
        <el-menu-item
          v-for="item in category.items"
          :key="item.id"
          :index=item.id
          @click="menuItemClick(category.id,item.id)"
        >
          <span
            class="left-color-span"
            v-show='true'
          ></span>
          <span></span>
          <span>{{ item.name }}</span>

        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      categorys: [
        {
          id: 'start',
          name: '开始',
          items: [
            {
              id: 'overview',
              name: '概述'
            },
            {
              id: 'updateLog',
              name: '更新日志'
            },
            {
              id: 'commonParams',
              name: '通用参数说明'
            },
            {
              id: 'errorCode',
              name: '全局错误码'
            },
            {
              id: 'interfaceCompare',
              name: '接口版本对比'
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
  },
  methods: {
    menuItemClick (categoryId, itemId) {
      if (categoryId === 'start') {
        // 开始
        this.$router.push('/' + itemId)
      } else {
        // 接口
        this.$router.push({ name: '接口', params: { id: itemId } });
      }
    }
  }
}
</script>
<style lang ='scss'>
.el-menu {
  width: 100%;
  text-align: left;
  .el-menu-item.is-active {
    background-color: #35394d !important;
    .left-color-span {
      display: inline-block;
      width: 3px;
      height: 100%;
      left: 0;
      position: absolute;
      background-color: #48b9ec;
    }
  }
  .el-menu-item {
    padding-left: 54px !important;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    font-weight: bold;
    position: relative;
  }
  div.el-submenu__title {
    padding-left: 26px !important;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
  }
}
</style>
