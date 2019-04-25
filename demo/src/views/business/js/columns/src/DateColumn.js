import BaseColumn from './BaseColumn';

export default class DateColumn extends BaseColumn {
  constructor(fileds) {
    super(fileds);
    // 日期内容
    this.x_columnValue = '';

    // 是不是日期区间
  }
}
