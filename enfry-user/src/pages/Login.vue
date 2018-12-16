<template>
  <div
    id="background"
    style="width: 100%; height: 100%;"
  >
    <div id="loginDiv">
      <div id="logoImage">
        <img
          src="../assets/logo1.png"
          alt=""
        >
      </div>
      <div id="tab">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
          :stretch=true
        >
          <el-tab-pane
            label="账号登录"
            name="first"
          >
            <div class="loginInput">
              <el-input
                v-model="user.userName"
                placeholder="en+账号/手机号/邮箱"
              >
                <img
                  slot="prefix"
                  src="../assets/userNameLogo.png"
                  style="padding-top: 1px"
                >
              </el-input>
            </div>
            <div class="loginInput">
              <el-input
                type="password"
                v-model="user.password"
                placeholder="密码"
              >
                <img
                  slot="prefix"
                  src="../assets/password.png"
                  style="padding-top: 1px"
                >
              </el-input>
            </div>
            <div class="loginInput checkCode">
              <el-input
                v-model="checkCode"
                placeholder="验证码"
                class="checkCodeElInput"
              >
                <img
                  slot="prefix"
                  src="../assets/checkCode.png"
                  style="padding-top: 1px; height: 38px"
                >
              </el-input>
              <div class="checkCodeImage">
                这里验证码
              </div>
            </div>
            <div class="loginInput">
              <el-button
                class="submitButton"
                type="primary"
                @click="loginFunction"
              >
                登录
              </el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="扫码登录"
            name="second"
          >
            <div
              class="scanState"
              v-if="!scanIsOK"
            >
              <div id="scanQRCode">
                <img
                  src=""
                  alt=""
                >
              </div>
              <div style="font-size: 12px; margin-top: 40px">使用en+app扫描二维码</div>
            </div>
            <div
              class="scanState"
              v-if="scanIsOK"
            >
              <div style="font-size: 12px; margin-top: 40px">扫码成功了 ..点击登录吧</div>
            </div>
            <button @click="scanOk">模拟扫码成功</button>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        userName: '',
        password: ''
      },
      checkCode: '',
      activeName: 'first',
      scanIsOK: false
    }
  },
  methods: {
    loginFunction: function () {
      var isAdmin = this.user.userName === 'admin'
      this.$goRoute({ name: 'HomePage', params: { isAdmin: isAdmin } })
      // this.router.push({ name: 'user', params: { userId: 123 }})
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    scanOk: function () {
      this.scanIsOK = !this.scanIsOK
    }
  }
}
</script>

<style>
#tab {
  width: 450px;
  height: 350px;
  margin-left: auto;
  margin-right: auto;
}
#scanQRCode {
  width: 135px;
  height: 135px;
  background-color: red;
  border-radius: 20px;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
}
.submitButton {
  width: 450px;
}
.loginInput {
  width: 450px;
  margin-top: 20px;
  text-align: left;
}
.checkCodeElInput {
  width: 300px;
}
.checkCodeImage {
  width: 100px;
  margin-left: 30px;
  display: inline-block;
  /*float: right;*/
}

#loginDiv {
  width: 550px;
  height: 460px;
  background-color: white;
  border-radius: 20px;
  margin: auto;
  position: absolute;
  top: -10%;
  left: 0;
  bottom: 0;
  right: 0;
}
#background {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #697190;
}
#logoImage {
  margin-top: -47px;
  margin-left: auto;
  margin-right: auto;
  width: 90px;
  height: 110px;
}
.loginInput .el-input .el-input__inner {
  padding-left: 50px;
}
.loginInput.checkCode > el-input {
  display: inline-block;
  width: 300px;
}
</style>
