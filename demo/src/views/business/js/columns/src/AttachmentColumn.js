import BaseColumn from './BaseColumn';
// 附件
export default class AttachmentColumn extends BaseColumn {
  constructor(fileds) {
    super(fileds);

    this.x_attachDatas = [];
  }
}
