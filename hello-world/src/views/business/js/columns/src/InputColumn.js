import BaseColumn from './BaseColumn';

export default class InputColumn extends BaseColumn {
  constructor(fileds) {
    super(fileds);
    this.age = fileds.age;
    this.sex = fileds.sex;
  }
}
