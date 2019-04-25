import BaseColumn from './BaseColumn';
import * as BusinessColumnProcess from '../../bmDetailModel/BusinessColumnProcess';

export default class SubsetColumn extends BaseColumn {
  constructor(fileds) {
    super(fileds);
    // 所有配置在子集的字段
    this.sub = BusinessColumnProcess.processColumns(fileds.sub);
  }
}
