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
  // 计算index处layout的宽度 其实是一行的宽度...
  caculateLayoutWidthAtIndex(index) {
    let layout = this.layouts[index];
    if (layout.length == 1) {
      return '100%';
    } else {
      return '200%';
    }
  }
}
