import * as BusinessColumnProcess from './BusinessColumnProcess';

export default class BusinessModel {
  constructor(datas) {
    // 字段信息
    this.fields = BusinessColumnProcess.processColumns(datas.fieldAttr);
    // 布局信息
    this.layouts = BusinessColumnProcess.processLayout(
      datas.mdHtml,
      this.fields
    );
  }
}
