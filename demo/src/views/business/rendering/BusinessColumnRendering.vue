<template>
  <div>
    <!-- 单选控件 -->
    <BMSelectComponent
      v-if='column.fieldType === ColumnType.select'
      :columnData='column'
    >
    </BMSelectComponent>
    <!-- 时间控件 -->
    <BMDateComponent
      v-else-if='column.fieldType === ColumnType.date'
      :columnData='column'
    >
    </BMDateComponent>
    <!-- 附件控件 -->
    <BMAttachComponent
      v-else-if='column.fieldType === ColumnType.attachment'
      :columnData='column'
    >
    </BMAttachComponent>
    <!-- 明细控件 -->
    <BMDetailComponent
      v-else-if='column.fieldType === ColumnType.detailParent'
      :columnData='column'
    >
    </BMDetailComponent>
    <!-- 纯文本控件 -->
    <BMPureTextComponent
      v-else-if='column.fieldType === ColumnType.pureText'
      :columnData='column'
    >
    </BMPureTextComponent>
    <!-- 子项控件 -->
    <BMChildComponent
      v-else-if='column.fieldType === ColumnType.child'
      :columnData='column'
    >
    </BMChildComponent>
    <!-- 文本 金额 数值 控件 -->
    <BMInputComponent
      v-else
      :columnData='column'
    >
    </BMInputComponent>
  </div>
</template>
<script>
import * as ColumnComponent from '../components'
import { BussinessFieldType } from '../js/BusinessCommonHeader.js';
import * as Column from '../js/columns';
export default {
  name: '',
  data () {
    return {
      ColumnType: BussinessFieldType
    }
  },
  props: {
    // 绑定的数据源
    column: Column.BaseColumn,
  },
  components: {
    'BMInputComponent': ColumnComponent.BMInputComponent,
    'BMPureTextComponent': ColumnComponent.BMPureTextComponent,
    'BMDateComponent': ColumnComponent.BMDateComponent,
    'BMSelectComponent': ColumnComponent.BMSelectComponent,
    'BMAttachComponent': ColumnComponent.BMAttachComponent,
    'BMDetailComponent': ColumnComponent.BMDetailComponent,
    'BMChildComponent': ColumnComponent.BMChildComponent,
  },
}
</script>

<style>
</style>
