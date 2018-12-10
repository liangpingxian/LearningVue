import axios from 'axios'
// import DateFormat from 'DateFormat'
import md5 from 'js-md5'

Date.prototype.Format = function (fmt) { // author: meizz
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}

export default{

  testPost: function (url, parameters, tenantId) {
    var baseUrl = 'http://localhost:8082/sys/'
    url = baseUrl + url + '.app'
    var params = this.addCommonParam(url, parameters)

    axios.post(url, params)
      .then(response => {
        console.log(response)
      }).catch(function (error) {
        alert(error)
      })
  },
  addCommonParam: function (url, parameters) {
    // 调用：
    var currTime = new Date().Format('yyyyMMddhhmmss')
    var param = new URLSearchParams()

    for (let paramKey in parameters) {
      param.append(paramKey, parameters[paramKey])
    }

    param.append('key', 'IOS')
    param.append('channelType', 'IOS')
    param.append('machineCode', '1123')
    param.append('machineType', '23423334234')
    param.append('appVersion', '2.13.0')
    param.append('iOSBundleId', 'com.yfl.enplus')
    param.append('curTime', currTime)

    let accout = parameters['account']
    var aaa = ['loginAction', 'sendCode', 'checkCode', 'forgetPassword'].indexOf(url)
    // if(["loginAction","sendCode","checkCode","forgetPassword"].indexOf(url) = )

    let checkStr = md5('enfry_ios' + currTime)

    param.append('checkStr', checkStr)

    return param
  }

}
