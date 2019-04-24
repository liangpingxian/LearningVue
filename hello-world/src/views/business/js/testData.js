import { BaseColumn, InputColumn } from './columns';
import testBusinessData from './data.js';

export let testTextColumn = new InputColumn({
  name: '111',
  age: 121,
  sex: '女'
});
export let testBaseBusinessColumn = new BaseColumn({ name: '111' });

export let testData = testBusinessData;
