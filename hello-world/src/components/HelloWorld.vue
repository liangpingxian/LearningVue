<template>
  <div class="page">
    <header class="header">
      <div class="header-left">
        <span>新增接口</span>
      </div>
      <div class="header-right">切换</div>
    </header>
    <section class="content">
      <section class="content-section">
        <div id="section-name">
          基本信息
        </div>
        <div class="oneline-input">
          <div class="left-box">接口名称</div>
          <div class="right-box">
            <el-input
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
          </div>
        </div>
        <div class="oneline-input">
          <div class="left-box">所属分类</div>
          <div class="right-box">
            <el-input
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
          </div>
        </div>
        <div class="oneline-input">
          <div class="left-box">接口说明</div>
          <div class="right-box">
            <el-input
              v-model="input"
              placeholder="请输入内容"
              type="textarea"
              autosize='{minRows:
              3}'
            ></el-input>
          </div>
        </div>

      </section>
      <section class="content-section">
        这里是请求参数
      </section>
    </section>
  </div>
</template>

<script>

import { Person } from '../js/test.js';

export default {
  name: 'HelloWorld',
  data () {
    return {
      a: '123',
      b: 1,
      c: 2,

    }
  },
  methods: {

  },
  computed: {
    total () {
      let p1 = new Person('nameaaa', '18');
      return p1.showName();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
* {
  margin: 0px;
  padding: 0px;
}
.page {
  border-radius: 10px;
  // border: 10px solid red;
  overflow: hidden;
  background-color: #fff;
  text-align: left;
}
.header {
  height: 50px;
  border-bottom: 1px solid #aeaeae;
  margin-left: 10px;
  .header-left {
    height: 50px;
    float: left;
    line-height: 50px;
    span {
      margin-left: 5px;
    }
  }
  .header-right {
    width: 100px;
    height: 50px;
    float: right;
    line-height: 50px;
    text-align: right;
    margin-right: 15px;
  }
}
.content {
  padding-left: 15px;
  #content-name {
    height: 50px;
    border-bottom: 1px solid #aeaeae;
  }
  .content-section {
    .oneline-input {
      margin-top: 10px;
      .left-box {
        float: left;
        height: 40px;
        line-height: 40px;
      }
      .right-box {
        margin-left: 100px;
        margin-right: 10px;
        // height: 40px;
      }
    }
  }
}
</style>
