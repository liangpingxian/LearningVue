<template>
  <el-container id="container">
    <el-header id="header">
      <img
        class="header-img"
        src="../assets/17.gif"
        alt=""
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
      <div
        class="header-name"
        v-if="isAdmin"
      >
        en+接口平台管理端
      </div>
      <div
        class="header-name"
        v-else
      >
        en+接口平台
      </div>

    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          background-color=#545c64
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu
            :index=category.id
            v-for="(category,index) in categorys"
            :key="category.id"
          >
            <template slot="title">{{(category.name)+ (index+1)}}</template>
            <el-menu-item
              v-for="(item,subIndex) in category.items"
              :key="item.id"
              :index=item.id
              @click="menuItemClick(subIndex)"
            >{{ item.name }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <interface-show
          :bindData=selectData
          :isUser=!isAdmin
          v-if="currentShowPage == mainShowPageType.interface"
        ></interface-show>
        <!-- <AddInterface
          :interfaceData='toCreatInterfaceData'
          v-else-if="currentShowPage == mainShowPageType.addInterface"
        >
        </AddInterface> -->
        <x-level-table v-else>

        </x-level-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import InterfaceShow from '../pages/InterfaceShow'
import AddInterface from '../pages/AddInterface'
import NewInterfaceDialog from '../pages/NewInterfaceDialog'
import XLevelTable from '../components/XLevelTable'
export default {
  name: 'HomePage',
  components: { InterfaceShow, AddInterface, NewInterfaceDialog, XLevelTable },
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
      ],
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
      }
      // selectData: {}
    }
  },
  methods: {
    menuItemClick: function (index) {
      this.selectIndex = index
      this.currentShowPage = this.mainShowPageType.interface
      // this.selectData = this.datas[index]
      console.log(index)
    },
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
    }
  }

}
</script>

<style>
#container {
  height: 100%;
  position: relative;
}
#header {
  background-color: skyblue;
  color: #333;
  line-height: 60px;
  width: 100%;
  padding: 0;
  /* position: relative; */
}
#header .header-img {
  float: left;
  width: 50px;
  margin-left: 70px;
}
#header .header-add {
  float: left;
  width: 50px;
  margin-left: 70px;
}
#header .header-name {
  font-weight: bolder;
  font-size: 25px;
  margin: 0 auto;
  width: 300px;
}
#header .header-search {
  float: right;
  margin-right: 20px;
  height: 30px;
  width: 300px;
}

#container .container-sideContainer {
  position: relative;
  z-index: 999;
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
