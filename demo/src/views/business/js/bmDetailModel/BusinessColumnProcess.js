// 处理服务器返回的行信息
import { BussinessFieldType } from '../BusinessCommonHeader.js';
import * as Column from '../columns';

// 处理字段的方法
let processColumns = function(fieldsData) {
  let fields = [];
  fieldsData.forEach(element => {
    let field = columnClassCreater(element);
    fields.push(field);
  });
  return fields;
};
// 处理数据行
let columnClassCreater = function(element) {
  let field;
  switch (element.fieldType) {
    case BussinessFieldType.inputCommon:
    case BussinessFieldType.inputNumber:
    case BussinessFieldType.inputAmount:
      field = new Column.InputColumn(element);
      break;
    case BussinessFieldType.detailParent:
      field = new Column.DetailColumn(element);
      break;
    case BussinessFieldType.subSet:
      field = new Column.SubsetColumn(element);
      break;
    case BussinessFieldType.select:
      field = new Column.SelectColumn(element);
      break;
    case BussinessFieldType.date:
      field = new Column.DateColumn(element);
      break;
    case BussinessFieldType.pureText:
      field = new Column.PureTextColumn(element);
      break;
    case BussinessFieldType.child:
      field = new Column.ChildColumn(element);
      break;
    case BussinessFieldType.attachment:
      field = new Column.AttachmentColumn(element);
      break;
    default:
      field = new Column.SelectColumn(element);
      break;
  }
  return field;
};

/**
 *
 *
 * @param {*} data  模板数据
 * @param {*} fields 行信息
 * @returns 处理好的布局数据二维数组 不存在key
 */
let processLayout = function(data, fields) {
  let returnData = [];
  let layoutData = JSON.parse(data);
  let currentIndex = 0;
  layoutData.model.forEach(element => {
    let oneLineData = [];
    element.fields.forEach(() => {
      oneLineData.push(fields[currentIndex]);
      currentIndex++;
    });
    returnData.push(oneLineData);
  });
  return returnData;
};

export { processColumns, processLayout };
