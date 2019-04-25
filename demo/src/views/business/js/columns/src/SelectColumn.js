import BaseColumn from './BaseColumn';

export default class SelectColumn extends BaseColumn {
  constructor(fileds) {
    super(fileds);
    // 数据
    this.x_selectValue = {};
  }
}
