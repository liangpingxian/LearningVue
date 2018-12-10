<template>
  <el-autocomplete
    v-model="state4"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入内容"
    @select="handleSelect"
  ></el-autocomplete>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      restaurants: [],
      state4: '',
      timeout: null
    }
  },
  methods: {
    loadAll () {
      return [
        { 'address': '三全鲜食（北新泾店）', 'value': '长宁区新渔路144号' },
        { 'address': 'Hot honey 首尔炸鸡（仙霞路）', 'value': '上海市长宁区淞虹路661号' },
        { 'address': '新旺角茶餐厅', 'value': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { 'address': '泷千家(天山西路店)', 'value': '天山西路438号' },
        { 'address': '胖仙女纸杯蛋糕（上海凌空店）', 'value': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
        { 'address': '贡茶', 'value': '上海市长宁区金钟路633号' },
        { 'address': '豪大大香鸡排超级奶爸', 'value': '上海市嘉定区曹安公路曹安路1685号' },
        { 'address': '茶芝兰（奶茶，手抓饼）', 'value': '上海市普陀区同普路1435号' },
        { 'address': '十二泷町', 'value': '上海市北翟路1444弄81号B幢-107' },
        { 'address': '星移浓缩咖啡', 'value': '上海市嘉定区新郁路817号' },
        { 'address': '阿姨奶茶/豪大大', 'value': '嘉定区曹安路1611号' },
        { 'address': '新麦甜四季甜品炸鸡', 'value': '嘉定区曹安公路2383弄55号' },
        { 'address': 'Monica摩托主题咖啡店', 'value': '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
        { 'address': '浮生若茶（凌空soho店）', 'value': '上海长宁区金钟路968号9号楼地下一层' },
        { 'address': 'NONO JUICE  鲜榨果汁', 'value': '上海市长宁区天山西路119号' },
        { 'address': 'CoCo都可(北新泾店）', 'value': '上海市长宁区仙霞西路' },
        { 'address': '快乐柠檬（神州智慧店）', 'value': '上海市长宁区天山西路567号1层R117号店铺' },
        { 'address': 'Merci Paul cafe', 'value': '上海市普陀区光复西路丹巴路28弄6号楼819' },
        { 'address': '猫山王（西郊百联店）', 'value': '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
        { 'address': '枪会山', 'value': '上海市普陀区棕榈路' },
        { 'address': '纵食', 'value': '元丰天山花园(东门) 双流路267号' },
        { 'address': '钱记', 'value': '上海市长宁区天山西路' },
        { 'address': '壹杯加', 'value': '上海市长宁区通协路' },
        { 'address': '唦哇嘀咖', 'value': '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元' },
        { 'address': '爱茜茜里(西郊百联)', 'value': '长宁区仙霞西路88号1305室' },
        { 'address': '爱茜茜里(近铁广场)', 'value': '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺' },
        { 'address': '鲜果榨汁（金沙江路和美广店）', 'value': '普陀区金沙江路2239号金沙和美广场B1-10-6' },
        { 'address': '开心丽果（缤谷店）', 'value': '上海市长宁区威宁路天山路341号' },
        { 'address': '超级鸡车（丰庄路店）', 'value': '上海市嘉定区丰庄路240号' },
        { 'address': '妙生活果园（北新泾店）', 'value': '长宁区新渔路144号' },
        { 'address': '香宜度麻辣香锅', 'value': '长宁区淞虹路148号' },
        { 'address': '凡仔汉堡（老真北路店）', 'value': '上海市普陀区老真北路160号' },
        { 'address': '港式小铺', 'value': '上海市长宁区金钟路968号15楼15-105室' },
        { 'address': '蜀香源麻辣香锅（剑河路店）', 'value': '剑河路443-1' },
        { 'address': '北京饺子馆', 'value': '长宁区北新泾街道天山西路490-1号' },
        { 'address': '饭典*新简餐（凌空SOHO店）', 'value': '上海市长宁区金钟路968号9号楼地下一层9-83室' },
        { 'address': '焦耳·川式快餐（金钟路店）', 'value': '上海市金钟路633号地下一层甲部' },
        { 'address': '动力鸡车', 'value': '长宁区仙霞西路299弄3号101B' },
        { 'address': '浏阳蒸菜', 'value': '天山西路430号' },
        { 'address': '四海游龙（天山西路店）', 'value': '上海市长宁区天山西路' },
        { 'address': '樱花食堂（凌空店）', 'value': '上海市长宁区金钟路968号15楼15-105室' },
        { 'address': '壹分米客家传统调制米粉(天山店)', 'value': '天山西路428号' },
        { 'address': '福荣祥烧腊（平溪路店）', 'value': '上海市长宁区协和路福泉路255弄57-73号' },
        { 'address': '速记黄焖鸡米饭', 'value': '上海市长宁区北新泾街道金钟路180号1层01号摊位' },
        { 'address': '红辣椒麻辣烫', 'value': '上海市长宁区天山西路492号' },
        { 'address': '(小杨生煎)西郊百联餐厅', 'value': '长宁区仙霞西路88号百联2楼' },
        { 'address': '阳阳麻辣烫', 'value': '天山西路389号' },
        { 'address': '南拳妈妈龙虾盖浇饭', 'value': '普陀区金沙江路1699号鑫乐惠美食广场A13' }
      ]
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>

<style scoped>

  .el-autocomplete{
    width: 400px;
    margin-top: 200px;
  }

</style>
