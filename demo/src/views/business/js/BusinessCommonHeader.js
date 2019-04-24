export const BussinessFieldType = {
  default: 0, //初始化
  inputCommon: 1, //输入框不限制
  mutiText: 2, //多行文本,根据编辑权限看是否可以输入
  inputNumber: 3, //输入框数字
  inputAmount: 4, //输入框金额
  select: 5, //左右展示 + ">" 单选
  associatedData: 6, //关联数据
  date: 7, //日期 字符串
  checkBox: 8, //复选 唯一，标记完成
  attachment: 9, //附件
  newProgress: 10, //进度 唯一
  detailParent: 11, //明细或者子表
  multiSelect: 15, //多选
  pureText: 16, //纯文本
  jianGang: 18, //兼岗
  shouFu: 19, //收付信息
  onlyViewAssociatedData: 20, //关联数据，直接能查看 弃用
  basicDataControl: 28, //基础数据控件
  address: 29, //地址
  child: 30, //添加子项控件 唯一
  line: 31, //分割线 App展示g高度为8的空白行
  suoShuShangJi: 33, //所属上级
  tabControl: 34, //开票选项卡
  subSet: 35, //子集（特殊的二级明细区）
  imgaeAttachment: 36, //图片附件
  cashObject: 37, //收付对象 唯一
  associatedObject: 38, //关联对象控件
  timeline: 39, //时间轴控件
  ocr: 40
};
