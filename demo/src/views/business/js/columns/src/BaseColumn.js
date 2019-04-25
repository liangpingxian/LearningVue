import { BussinessFieldType } from '../../BusinessCommonHeader.js';

export default class BaseColumn {
  constructor(fieldsData) {
    this.accuracySet = fieldsData.accuracySet;
    this.align = fieldsData.align; //对齐方式。left居左、center居中、right居右。默认left无配置
    this.allowAddFlag = fieldsData.allowAddFlag;
    this.allowConflict = fieldsData.allowConflict;
    this.appFieldName = fieldsData.appFieldName;
    this.appListIsShow = fieldsData.appListIsShow;
    this.appSort = fieldsData.appSort;
    this.appUpdateIsShow = fieldsData.appUpdateIsShow;
    this.areaFlag = fieldsData.areaFlag;
    this.areaObjType = fieldsData.areaObjType;
    this.areaObjTypeId = fieldsData.areaObjTypeId;
    this.assistSelect = fieldsData.assistSelect;
    this.assistView = fieldsData.assistView;
    this.autoAccount = fieldsData.autoAccount;
    this.autoChooseArea = fieldsData.autoChooseArea;
    this.autoEvaluation = fieldsData.autoEvaluation;
    this.autoSplit = fieldsData.autoSplit;
    this.availableTime = fieldsData.availableTime;
    this.baseDataArea = fieldsData.baseDataArea;
    this.captionDescription = fieldsData.captionDescription; //标题说明
    this.captionDescriptionShowPosition =
      fieldsData.captionDescriptionShowPosition;
    this.cascadeGroupId = fieldsData.cascadeGroupId;
    this.cashObjectRange = fieldsData.cashObjectRange;
    this.choiceRule = fieldsData.choiceRule;
    this.codeRule = fieldsData.codeRule;
    this.codeType = fieldsData.codeType;
    this.color = fieldsData.color; //字体颜色
    this.completeFlag = fieldsData.completeFlag;
    this.dataArea = fieldsData.dataArea;
    this.dataChanges = fieldsData.dataChanges;
    this.dataFiltration = fieldsData.dataFiltration;
    this.dataSource = fieldsData.dataSource;
    this.dateRange = fieldsData.dateRange; //日期区间 日期区间 0-未勾选 1-勾选
    this.defaults = fieldsData.defaults; //管理端配置的placeholder
    /*字段默认填写  单选或多选为: defaults: "[{id:xx,name:xxx},{id:xx,name:xxx}]""
   时间：defaults: 0   请选择，没有默认值
  defaults: 1#2017-09-18 08:09，2017-09-15 08:43   当前时间或者当前日期
  defaults: 2#2017-09-18  指定日期/指定时间
  明细区默认值格式：[{"name":[{id:xxx,name:xxx}]}] */
    this.field = fieldsData.field; //字段英文名
    this.fieldArea = fieldsData.fieldArea; // 1-主数据 2-明细
    this.fieldLengthType = fieldsData.fieldLengthType; ////字段长度1 平分 2百分比 3固定长度,  长度值在后面以逗号隔开（前端要求）
    this.fieldType = fieldsData.fieldType; // 1 单行文本   2 多行文本  3数值 4金额  5选项（单选）6业务关联 7日期8 标识9 附件图片  10进度 11明细 15多选16-纯文本控件 28基础数据  29地址 30子项 31 分割线 34 开票选项卡35 子集36 图片 37收付对象 38关联对象39 时间轴40 OCR控件
    //说明控件 fieldType=16
    this.formatCheck = fieldsData.formatCheck;
    this.formula = fieldsData.formula;
    this.graphColorArr = fieldsData.graphColorArr;
    this.graphColorType = fieldsData.graphColorType;
    this.groupSet = fieldsData.groupSet;
    this.id = fieldsData.id;
    this.imgUrl = fieldsData.imgUrl;
    this.inTabDataId = fieldsData.inTabDataId;
    this.inputConfig = fieldsData.inputConfig;
    this.instructions = fieldsData.instructions;
    this.isCascade = fieldsData.isCascade;
    this.isEdit = fieldsData.isEdit;
    this.isOutsideAddress = fieldsData.isOutsideAddress;
    this.isOutsideControlTime = fieldsData.isOutsideControlTime;
    this.isOutsidePunchClock = fieldsData.isOutsidePunchClock;
    this.isSummaryField = fieldsData.isSummaryField;
    this.isTabAttrField = fieldsData.isTabAttrField;
    this.isTabField = fieldsData.isTabField;
    this.limitNum = fieldsData.limitNum; ///附件限制个数
    this.limitType = fieldsData.limitType;
    this.lineNum = fieldsData.lineNum; //初始化行数
    this.lineType = fieldsData.lineType;
    this.mainField = fieldsData.mainField;
    this.mainTabField = fieldsData.mainTabField;
    this.mainTabUuid = fieldsData.mainTabUuid;
    this.mainUuid = fieldsData.mainUuid;
    this.mappingId = fieldsData.mappingId;
    this.mappingRule = fieldsData.mappingRule;
    this.mappingType = fieldsData.mappingType;
    this.multipleFlag = fieldsData.multipleFlag;
    this.name = fieldsData.name; //字段中文名
    this.onlyFlag = fieldsData.onlyFlag;
    this.outsideRange = fieldsData.outsideRange;
    this.parentField = fieldsData.parentField;
    this.parentId = fieldsData.parentId; //父节点主表区的父节点为0（App不需要）
    this.parentOption = fieldsData.parentOption;
    this.parentType = fieldsData.parentType;
    this.percentFlag = fieldsData.percentFlag;
    this.prefixField = fieldsData.prefixField;
    this.relatedDate = fieldsData.relatedDate;
    this.relatedDateType = fieldsData.relatedDateType;
    this.relatedEndDate = fieldsData.relatedEndDate;
    this.relatedPlanFlag = fieldsData.relatedPlanFlag;
    this.relationCondition = fieldsData.relationCondition;
    this.relationData = fieldsData.relationData;
    this.relationDataType = fieldsData.relationDataType;
    this.relationRange = fieldsData.relationRange;
    this.relationTemplateId = fieldsData.relationTemplateId;
    this.relationType = fieldsData.relationType;
    this.requrein = fieldsData.requrein; //0必填1选填
    this.reserverDecimal = fieldsData.reserverDecimal;
    this.ruleGenerateType = fieldsData.ruleGenerateType;
    this.selAreaField = fieldsData.selAreaField;
    this.selAreaParentField = fieldsData.selAreaParentField;
    this.selAreaType = fieldsData.selAreaType;
    this.selectLine = fieldsData.selectLine; //是否折行0否1是默认0（目前明细多行使用）
    this.selectType = fieldsData.selectType;
    this.showContent = fieldsData.showContent;
    this.showModel = fieldsData.showModel;
    this.showPrefix = fieldsData.showPrefix; //前缀 0-显示 1-不显示（App不需要）
    this.showPrefixLength = fieldsData.showPrefixLength; //前缀长度 1自适应 2-自定义显示比例，比例值在后面以逗号隔开
    this.showStyle = fieldsData.showStyle;
    this.showType = fieldsData.showType;
    this.showsSort = fieldsData.showsSort;
    this.sortNum = fieldsData.sortNum;
    this.statisticalDate = fieldsData.statisticalDate;
    this.sub = fieldsData.sub; //明细区数据
    this.subTitle = fieldsData.subTitle; //子标题
    this.subTitleShowPosition = fieldsData.subTitleShowPosition;
    this.suffix = fieldsData.suffix; //后缀（App不需要）
    this.sumEnable = fieldsData.sumEnable;
    this.tabField = fieldsData.tabField;
    this.tabUuid = fieldsData.tabUuid;
    this.targetField = fieldsData.targetField;
    this.templateDataId = fieldsData.templateDataId;
    this.templateId = fieldsData.templateId;
    this.templateType = fieldsData.templateType;
    this.tenantId = fieldsData.tenantId;
    this.timeCondition = fieldsData.timeCondition;
    this.timeConditionEnable = fieldsData.timeConditionEnable;
    this.timeFormat = fieldsData.timeFormat; //时间格式 8-（yyyy-MM-dd）9-（yyyy-MM-dd HH:mm）
    this.timeUnit = fieldsData.timeUnit;
    this.type = fieldsData.type;
    this.upCollectSet = fieldsData.upCollectSet;
    this.uppercaseEnable = fieldsData.uppercaseEnable;
    this.uuid = fieldsData.uuid;
    this.version = fieldsData.version;

    // 处理自定义的属性...生命周期只计算一次

    // 管理端定义的宽度
    this.x_styleWidth = this.getStyleWidth();
    // 表单该行的显示名称,可能为空
    this.x_formShowName = this.getFormShowName();
    // 管理端配置的展示颜色
    this.x_showColor = this.color ? this.color : 'black';
    // 对齐方式
    this.x_align = this.align ? this.align : 'left';
    // 占位符
    this.x_placehoder = this.instructions ? this.instructions : this.name;
    // 是否可以编辑
  }

  // 宽度 先不处理平分...不直观的配置
  getStyleWidth() {
    if (!this.fieldLengthType) {
      return '100%';
    }
    let config = this.fieldLengthType.split(',');
    let widthType = config[0];
    switch (widthType) {
      case '1':
        return '100%';
      case '2':
        return `${config[1]}%`;
      case '3':
        return `${config[1]}px`;
    }
  }

  // 根据配置获取该展示的字段名称
  getFormShowName() {
    if (this.showPrefix === 1) {
      return '';
    }
    switch (this.fieldType) {
      case BussinessFieldType.pureText:
      case BussinessFieldType.detailParent:
        return '';
      default:
        return this.name;
    }
  }
}
