import BaseColumn from './BaseColumn';

export default class InputColumn extends BaseColumn {
  constructor(fileds) {
    super(fileds);

    //输入框的值
    this.x_columnValue = this.defaults;
  }
}
