import { BaseColumn } from './columns';

export let mixinBusiness = {
  data() {
    return {
      // 类型
      columnData: this.originColumnData
    };
  },
  props: {
    originColumnData: BaseColumn
  },
  methods: {
    logClassType() {}
  }
};
