import BaseColumn from './BaseColumn';
import * as BusinessColumnProcess from '../../bmDetailModel/BusinessColumnProcess';
import { BussinessFieldType } from '../../BusinessCommonHeader.js';

export default class DetailColumn extends BaseColumn {
  constructor(fileds) {
    super(fileds);
    // 所有的明细字段 包含子集
    this.sub = BusinessColumnProcess.processColumns(fileds.sub);

    // 明细需要展示的字段... 非子集字段全在一起  子集往下排..
    // 表格字段
    let x_formDetail = [];
    // 所有子集
    let x_subset = [];

    this.sub.map(element => {
      if (element.fieldType === BussinessFieldType.subSet) {
        x_subset.push(element);
      } else {
        x_formDetail.push(element);
      }
    });
    this.x_formDetail = x_formDetail;
    this.x_subset = x_subset;
    // 明细填充的数据
    this.x_detailData = [];
  }
}
