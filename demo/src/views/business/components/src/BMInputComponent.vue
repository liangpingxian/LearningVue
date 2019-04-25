<template>
  <div>
    <el-input
      :placeholder="columnData.x_placehoder"
      v-model="columnData.x_columnValue"
      :style="'color:' + columnData.x_showColor"
      @input="inputLimit($event)"
      maxlength=20
    >
    </el-input>
  </div>
</template>
<script>
import { InputColumn } from '../../js/columns'
import BaseBusinessColumn from './BaseBusinessColumn.vue'
import { BussinessFieldType } from '../../js/BusinessCommonHeader.js';

export default {
  name: 'BMInputComponent',
  extends: BaseBusinessColumn,
  props: {
    columnData: {
      type: InputColumn,
      require: true
    }
  },
  methods: {
    // 限制文本输入
    inputLimit (value) {
      // 文本不需要限制
      if (this.columnData.fieldType != BussinessFieldType.inputCommon) {
        this.clearNoNum(value);
      }
    },
    // 限制金额和数值输入
    clearNoNum: function (value) {
      value = value.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符   
      value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的   
      value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
      value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');//只能输入两个小数   
      if (value.indexOf(".") < 0 && value != "" && value.length > 1) {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额  
        value = value.replace(/\b(0+)/gi, "")
      }
      this.columnData.x_columnValue = value;
    }
  }
}
</script>
<style>
</style>
