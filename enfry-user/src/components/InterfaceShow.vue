<template>
  <div id="interfaceContainer">
    <header id="name">
      <span class="name-left">这是接口名</span>
    </header>
    <section id="description">
      <div class="bolderTitle">接口描述</div>
      <span class="description-body">{{descriptionInfo}}</span>
    </section>
    <section id="alert">
      <span class="alert-body">请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意请注意</span>
    </section>
    <section id="address">
      <div class="bolderTitle">接口地址</div>
      <span class="address-body">{{address}}</span>
    </section>
    <section id="httpType">
      <div class="bolderTitle">HTTP方式</div>
      <span class="httpType-body">POST</span>
    </section>
    <section id="param">
      <div class="bolderTitle">请求参数</div>
      <el-table :data="interfaceParams" stripe style="width: 100%" size="mini">
        <el-table-column prop="name" label="参数名" width="180"></el-table-column>
        <el-table-column prop="type" label="参数类型" width="180"></el-table-column>
        <el-table-column prop="require" label="是否必填" width="180" :formatter="formatRequire"></el-table-column>
        <el-table-column prop="description" label="说明"></el-table-column>
      </el-table>
    </section>
    <section id="response">
      <div class="bolderTitle">返回结果</div>
      <div class="response-type">json示例</div>
      <div class="response-body">
        <el-input
          type="textarea"
          readonly="true"
          :rows="10"
          placeholder="请输入内容"
          v-model="responseBody"
        ></el-input>
      </div>
    </section>
    <section id="responseDescription">
      <div class="bolderTitle">返回字段说明</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "InterfaceShow",
  data: function() {
    return {
      descriptionInfo:
        "这是接口描述 描述描述秒,这是接口描述 描述描述秒,这是接口描述 描述描述秒,这是接口描述 描述描述秒,这是接口描述 描述描述秒,这是接口描述 描述描述秒,这是接口描述 描述描述秒,",
      address: "/queryModelInfo.app",
      interfaceParams: [
        {
          name: "id",
          type: "String",
          description: "数据id",
          require: 1
        },
        {
          name: "name",
          type: "String",
          description:
            "名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称名称",
          require: "11"
        },
        {
          name: "time",
          type: "String",
          description: "yyyy-MM-dd",
          require: 0
        },
        {
          name: "time",
          type: "String",
          description: "yyyy-MM-dd",
          require: 0
        }
      ],
      responseBody:
        "{\n" +
        '    "name": "中国",\n' +
        '    "province": [{\n' +
        '        "name": "黑龙江",\n' +
        '        "cities": {\n' +
        '            "city": ["哈尔滨", "大庆"]\n' +
        "        }\n" +
        "    }, {\n" +
        '        "name": "广东",\n' +
        '        "cities": {\n' +
        '            "city": ["广州", "深圳", "珠海"]\n' +
        "        }\n" +
        "    }, {\n" +
        '        "name": "台湾",\n' +
        '        "cities": {\n' +
        '            "city": ["台北", "高雄"]\n' +
        "        }\n" +
        "    }, {\n" +
        '        "name": "新疆",\n' +
        '        "cities": {\n' +
        '            "city": ["乌鲁木齐"]\n' +
        "        }\n" +
        "    }]\n" +
        "}"
    };
  },
  methods: {
    formatRequire(row, column) {
      const require = row[column.property];
      debugger;
      return require ? "是" : "否";
    }
  },
  mounted: {}
};
</script>

<style scoped>
#interfaceContainer {
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
}
/*通用*/
.bolderTitle {
  font-weight: bold;
  font-size: 15px;
}
* {
  margin-top: 10px;
}

/*接口名*/
#name {
  height: 50px;
}
#name .name-left {
  float: left;
  line-height: 50px;
}

/*接口说明*/
#description .description-body {
  background-color: grey;
  font-size: 13px;
}

/*注意*/
#alert .alert-body {
  padding: 10px;
  background-color: rebeccapurple;
  font-size: 12px;
  color: white;
}
/*接口地址*/
#address .address-body {
  background-color: grey;
  font-size: 13px;
  padding-right: 5px;
  padding-left: 5px;
}
/*HTTP方式*/
#httpType .httpType-body {
  background-color: grey;
  font-size: 13px;
  padding-right: 5px;
  padding-left: 5px;
}
/*请求参数*/
</style>
