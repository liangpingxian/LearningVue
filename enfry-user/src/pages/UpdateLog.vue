<template>
  <div id='home-updatelog'>
    <page-header title="更新日志"></page-header>
    <div
      v-for="(updatelog,index) in
      updateList"
      :key="updatelog.id"
      :class="index === updateList.length -1 ?'updatelogList lastLine':'updatelogList'"
    >
      <div class="updatelogTitle">
        <span class="updatelogTitle-right">2018-10-12 18:00</span>
        <span class="updatelogTitle-left">写死的更新信息</span>
      </div>
      <el-input
        type="textarea"
        autosize
        v-model="updatelog.content"
        :readonly=true
        resize="none"
      >
      </el-input>
    </div>

  </div>
</template>
<script>
import PageHeader from '../components/Pageheader'
export default {
  components: { PageHeader },
  data () {
    return {
      updateList: [
        {
          id: '1111',
          content: `1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；`
        },
        {
          id: '1112',
          content: `1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；`
        },
        {
          id: '1113',
          content: `1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；
1.这是第一条更新描述；`
        }
      ]
    }
  }
}
</script>
<style lang='scss'>
#home-updatelog {
  text-align: left;
  .el-textarea__inner {
    outline: none;
    border: none;
  }
  .updatelogList {
    border-bottom: 1px solid #dedede;
    margin-left: 15px;
    margin-right: 15px;
    .updatelogTitle {
      margin-left: 15px;
      margin-top: 15px;
      .updatelogTitle-right {
        margin-right: 15px;
        float: right;
      }
    }
  }
  .updatelogList.lastLine {
    border-bottom: none;
  }
}
</style>
