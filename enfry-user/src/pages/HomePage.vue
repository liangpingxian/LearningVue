<template>
  <el-container id="container">
    <el-aside width="280px">
      <div class="aside-top-div">
        <!-- <img
          src="../assets/17.gif"
          alt=""
        > -->
        <span class="aside-top-div-text">en+接口平台</span>
      </div>
      <x-menu />
    </el-aside>
    <el-container>

      <el-header
        id="header"
        height='70'
      >
        <NewInterfaceDialog
          class="header-add"
          v-show="isAdmin"
          v-on:creatAInterface='creatAInterface'
        ></NewInterfaceDialog>
        <el-autocomplete
          class="header-search"
          :fetch-suggestions="querySearchAsync"
          placeholder="搜索文档"
        ></el-autocomplete>
      </el-header>
      <el-main>
        <div class='main-content'>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import InterfaceShow from '../pages/InterfaceShow'
import AddInterface from '../pages/AddInterface'
import NewInterfaceDialog from '../pages/NewInterfaceDialog'
import XLevelTable from '../components/XLevelTable'
import XMenu from '../components/XMenu'
import { mapState } from 'vuex'
export default {
  name: 'HomePage',
  components: { InterfaceShow, AddInterface, NewInterfaceDialog, XLevelTable, XMenu },
  data () {
    const item = {
      date: 'id',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      datas: [
        {
          descriptionInfo:
            '11111111111111111111111111111111111111111111111111111111111111111111',
          address: '/11111111111.app',
          interfaceParams: [
            {
              name: 'id',
              type: 'String',
              description: '数据id',
              require: 1
            },
            {
              name: 'name',
              type: 'String',
              description:
                '名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称',
              require: '11'
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            }
          ],
          responseBody: `{ 
            "name": "中国", 
            "province": [{ 
                "name": "黑龙江", 
                "cities": { 
                    "city": ["哈尔滨", "大庆"] 
                } 
            }, { 
                "name": "广东", 
                "cities": { 
                    "city": ["广州", "深圳", "珠海"] 
                } 
            }, { 
                "name": "台湾", 
                "cities": { 
                    "city": ["台北", "高雄"] 
                } 
            }, { 
                "name": "新疆", 
                "cities": { 
                    "city": ["乌鲁木齐"] 
                } 
            }] 
        }`,
          responseDescription: [
            {
              name: 'id',
              type: 'String',
              description: '数据id',
              require: 1
            },
            {
              name: 'name',
              type: 'String',
              description:
                '名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称',
              require: '11'
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            }
          ]
        },
        {
          descriptionInfo: '22222222222222222222222222222222222222',
          address: '/2222222.app',
          interfaceParams: [
            {
              name: 'id',
              type: 'String',
              description: '数据id',
              require: 1
            },
            {
              name: 'name',
              type: 'String',
              description:
                '名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称',
              require: '11'
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            }
          ],
          responseBody: `{ 
            "name": "中国", 
            "province": [{ 
                "name": "黑龙江", 
                "cities": { 
                    "city": ["哈尔滨", "大庆"] 
                } 
            }, { 
                "name": "广东名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称", 
                "cities": { 
                    "city": ["广州", "深圳", "珠海"] 
                } 
            }, { 
                "name": "台湾", 
                "cities": { 
                    "city": ["台北", "高雄"] 
                } 
            }, { 
                "name": "新疆", 
                "cities": { 
                    "city": ["乌鲁木齐"] 
                } 
            }] 
        }`,
          responseDescription: [
            {
              name: 'id',
              type: 'String',
              description: '数据id',
              require: 1
            },
            {
              name: 'name',
              type: 'String',
              description:
                '名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称',
              require: '11'
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            }
          ]
        },
        {
          descriptionInfo: '333333333333333333333333333333333333',
          address: '/3333333.app',
          interfaceParams: [
            {
              name: 'id',
              type: 'String',
              description: '数据id',
              require: 1
            },
            {
              name: 'name',
              type: 'String',
              description:
                '名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称',
              require: '11'
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            }
          ],
          responseBody: `{ 
            "name": "中国", 
            "province": [{ 
                "name": "黑龙江", 
                "cities": { 
                    "city": ["哈尔滨", "大庆"] 
                } 
            }, { 
                "name": "广东", 
                "cities": { 
                    "city": ["广州", "深圳", "珠海"] 
                } 
            }, { 
                "name": "台湾", 
                "cities": { 
                    "city": ["台北", "高雄"] 
                } 
            }, { 
                "name": "新疆", 
                "cities": { 
                    "city": ["乌鲁木齐"] 
                } 
            }] 
        }`,
          responseDescription: [
            {
              name: 'id',
              type: 'String',
              description: '数据id',
              require: 1
            },
            {
              name: 'name',
              type: 'String',
              description:
                '名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称',
              require: '11'
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            },
            {
              name: 'time',
              type: 'String',
              description: 'yyyy-MM-dd',
              require: 0
            }
          ]
        }
      ],
      tableData: Array(20).fill(item),
      selectIndex: 0,
      mainShowPageType: {
        interface: 0, // 接口页面
        addInterface: 1, // 新增接口
        errorCode: 2 // 错误码
      },
      // 记录当前显示页面
      currentShowPage: 0,
      toCreatInterfaceData: {
        category: '',
        name: ''
      },
      selectCateId: 'overview'
      // selectData: {}
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {
      var results = [{ value: '11111' }, { value: '222222' }, { value: '333333' }]
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    addInterface () {
      this.currentShowPage = this.mainShowPageType.addInterface
    },
    creatAInterface (interfaceData) {
      this.toCreatInterfaceData = interfaceData
      this.currentShowPage = this.mainShowPageType.addInterface
    }
  },
  computed: {
    selectData: function () {
      return this.datas[this.selectIndex]
    },
    isAdmin: function () {
      var isAdmin = this.$route.params.isAdmin
      return isAdmin
    },
    ...mapState({
      storeCount: 'count',
      sCount () {
        return this.$store.getters.computeçdCount
      }
    })
  }

}
</script>

<style lang='scss' scoped>
#header {
  background-color: white;
  color: #333;
  line-height: 70px;
  height: 70px;
  width: 100%;
  padding: 0;
  box-shadow: 0px 2px 2px #888888;
  border-bottom: 1px solid #dedede;
  .header-add {
    float: left;
    width: 50px;
    margin-left: 70px;
  }
  .header-name {
    font-weight: bolder;
    font-size: 25px;
    margin: 0 auto;
    width: 300px;
  }
  .header-search {
    float: right;
    margin-right: 20px;
    height: 30px;
    width: 300px;
  }
  /* position: relative; */
}

#container {
  height: 100%;
  position: relative;
  .container-sideContainer {
    position: relative;
    z-index: 999;
  }
}

.el-aside {
  background-color: #25293c;
  padding: 0;
  .x-menu {
    padding-top: 15px;
  }
  .aside-top-div {
    // float: left;
    // width: 280px;
    margin-left: 0px;
    height: 70px;
    line-height: 70px;
    background-color: #35394d;
    // img {
    //   height: 70px;
    // }
    .aside-top-div-text {
      font-size: 20px;
      font-weight: bold;
      color: #46abdb;
      font-family: '微软雅黑';
    }
  }
}
.el-aside::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}

.el-menu {
  border-right-width: 0;
}
.el-main {
  padding: 0;
  background-color: #ececec;
  .main-content {
    // width: 100%;
    margin: 5px;
    // margin-top: 5px;
    background-color: white;
    border-radius: 5px;
    // height: 100%;
  }
}
</style>
