<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 0;

  position: flex;
  z-index: 1099;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 3rem);

  background-color: #ffff;


}

.back {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ffff;
  overflow: auto;
  z-index: 1000;
}

.login-body {
  height: calc(100% - 9rem);
}

.logoImg {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0rem 1rem 0rem;
}

.logoImg img {
  width: 10rem;
  object-fit: cover;
}

.loginInputBox {
  width: 100%;
  height: 85%;
  margin-bottom: 20px;
}

.loginCenter {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  margin-top: 5rem;
}

.userPhone {
  border: 0px;
  border-bottom: 1.5px solid #e5e5e5;
  padding: 0.3rem 0.3rem 0.6rem 0rem;
  width: 100%;
}

.loginInput {
  width: 85%;
  position: relative;
}

.loginInputVerify {
  width: 85%;
}

.loginInputVerify {
  margin-top: 1rem;
  position: relative;
}

.userVerife {
  border: 0px;
  border-bottom: 1.5px solid #e5e5e5;
  padding: 0.3rem 0.3rem 0.6rem 0rem;
  width: 100%;
}

.verife {
  font-size: 10px;
  color: #02b6fd;
  position: absolute;
  top: 3px;
  right: 0px;
  padding: 0.2rem;
  border: 1px solid #7fd2ff;
  border-radius: 2.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.closeImg {
  width: 1.1rem;
  position: absolute;
  right: 0px;
  top: 5px;
}

.closeImgVerife {
  width: 1.1rem;
  position: absolute;
  right: 4rem;
  top: 5px;
}

.closeImgVerife img {
  width: 100%;
  object-fit: cover;
}

.closeImg img {
  width: 100%;
  object-fit: cover;
}

.btnBox {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.btnLogin {
  background: #02b6fd;
  border: none;
  border-radius: 44px;
  width: 80%;
  height: 44px;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  color: #ffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userHttp {
  color: #02b6fd;
}

.trueInfoBox {
  font-size: 12px;
  margin-top: 1.5rem;
}

.other {
  margin-left: auto;
  margin-right: 6%;
  margin-top: 0.5rem;
  color: #02b6fd;
  font-size: 13px;
  border-bottom: 1px solid #02b6fd;
}

.otherLeft {
  margin-right: auto;
  margin-left: 7%;
  margin-top: 0.5rem;
  color: #02b6fd;
  font-size: 13px;
  border-bottom: 1px solid #02b6fd;
}

.otherBox {
  display: flex;
  width: 100%;
}

// 页脚
.footer {
  position: fixed;
  height: 8rem;
  padding: 0.5rem 0;
  width: 100%;
  background: #f5f5f5;
  font-size: 12px;
  text-align: center;
}

.footer-large {
  margin: 0;
  color: #999;
  line-height: 18px;
  text-align: center;
}

.footer-large>h2 {
  font-size: 12px;
  font-weight: 400;
  color: #333;
}

.footer-large p {
  margin: 0;
  color: #999;
  line-height: 18px;
  text-align: center;
}

.jcImg {
  width: 86px;
  height: 30px;
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>

<template>
  <div class="back">
    <div class="main-body">
      <Header title="登录" :isGoBack="true"></Header>

      <div class="login-body">
        <div class="logoImg">
          <img src="../../assets/images/Login/elm.png" alt="">
        </div>
        <div class="loginInputBox">
          <div class="loginCenter">
            <div class="loginInput">
              <!-- v-on:blur="phoneyz" -->
              <input type="text" name="" id="" placeholder="请输入手机号" class="userPhone" ref="userPhone" @click="phoneyz"
                v-on:blur="blurs">
              <div class="closeImg" @click="clearLen">
                <img src="../../assets/images/Login/close.png" alt="" v-show="isBool">
              </div>
            </div>
            <div class="loginInputVerify">
              <input type="text" name="" id="" placeholder="请输入验证码" class="userVerife" @click="verifeyz" v-on:blur="blur"
                ref="userVerife">
              <div class="closeImgVerife" @click="clearLens">
                <img src="../../assets/images/Login/close.png" alt="" v-show="isBools">
              </div>
              <div class="verife" @click="funGetVerife" :style="{ color: color, 'border-color': border }">{{ Text
              }}
              </div>

            </div>
            <div class="otherBox">
              <div class="otherLeft">
                <span @click="gotoSignin">注册</span>
              </div>
              <div class="other">
                <span>账号/密码登录</span>
              </div>
            </div>
            <div class="btnBox">
              <button class="btnLogin" @click="login" :style="{ background: background }">同意协议并登录</button>
            </div>
            <div class="trueInfo">

              <div class="trueInfoBox">
                <input type="checkbox" name="heckbcoxInfo" id="" v-model="trueAndFalse" @click="changeColor">
                <label for="heckbcoxInfo">已阅读并同意</label>
                <router-link to="path" class="userHttp">《用户协议》</router-link>
                <label for="heckbcoxInfo">、</label>
                <router-link to="path" class="userHttp">《隐私权政策》</router-link>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- <footer class="footer">
      <p>所有方 上海拉扎斯信息科技有限公司</p>
      <p>增值电信业务许可证: 沪B2-20150033 沪ICP备 09007032上海工商行政管理Copyright ©2008-2023 ele.me, All Rights Reserved.</p>
      <router-link to="path">
        <img src="../../assets/images/Login/jc.png" alt="" class="jcImg">
      </router-link>
    </footer> -->

      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { Dialog } from 'vant';
import { Notify } from 'vant';
export default {
  name: 'Login',
  components: { Header },
  data() {
    return {
      isBool: false,
      isBools: false,
      Text: "获取验证码",
      time: 60,
      countdownTimer: null, // 倒计时定时器
      disabled: false,//节流阀
      color: "#7fd2ff",
      border: "#7fd2ff",
      trueAndFalse: false,
      background: "#02b6fd",
      userinfo: [

      ],
      userphones: []

    }
  },
  methods: {
    // 登录
    login() {
      let that = this
      const loginRes = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (!loginRes.test(this.$refs.userPhone.value)) {
        Dialog.alert({
          message: '请检查手机格式',
        }).then(() => {
          // on close
        });
        return false;
      }
      //判断验证码
      if (this.$refs.userVerife.value == "") {
        Dialog.alert({
          message: '验证码不能为空',
        }).then(() => {
          // on close
        });
        return false;
      }

      if (this.trueAndFalse == false) {
        Dialog.alert({
          message: '协议未勾选！',
        }).then(() => {
          // on close
        });
        return false;
      }

      if (this.userphones.includes(this.$refs.userPhone.value) == true) {
        
        Notify({ type: 'success', message: '登录成功' });
        // let isbool = true
        let loginzt = JSON.parse(localStorage.getItem("userinfoData"));
        let targetUser = loginzt.find(function (ele) {
          return ele.userphone == that.$refs.userPhone.value;
        });
        if (targetUser) {
          targetUser.userIsbool = true; // 修改 userIsbool 属性为 true
          console.log(targetUser);
          localStorage.setItem("loginSuccess", JSON.stringify(targetUser))
          this.$router.push("my")
        }
      } else {
        console.log(this.userphones);
        Dialog.alert({
          message: '手机号未注册',
        }).then(() => {
          // on close
        });
        return false;
      }


    },
    // 手机号
    phoneyz() {
      this.isBool = true
    },
    blurs() {
      if (this.$refs.userPhone.value.length == 0) {
        this.isBool = false
      }
    },
    clearLen() {
      this.$refs.userPhone.value = ""
      this.isBool = false
    },
    // 验证码
    verifeyz() {
      this.isBools = true
    },
    blur() {
      if (this.$refs.userVerife.value.length == 0) {
        this.isBools = false
      }
    },
    clearLens() {
      this.$refs.userVerife.value = ""
      this.isBools = false
    },
    // 获取验证码
    funGetVerife() {
      if (this.disabled == true) {
        return false
      } else {
        const loginRes = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        if (this.$refs.userPhone.value == "") {
          Dialog.alert({
            message: '手机号不能为空',
          }).then(() => {
            // on close
          });
          return false;
        }
        if (!loginRes.test(this.$refs.userPhone.value)) {
          Dialog.alert({
            message: '手机号格式错误',
          }).then(() => {
            // on close
          });
          return false;
        } else {
          this.getVerife()
        }
      }

    },
    getVerife() {
      this.disabled = true
      this.color = "rgba(0,0,0,0.3)"
      this.border = "rgba(0,0,0,0.3)"
      if (this.countdownTimer === null) {

        this.time = 60;
        this.Text = `${this.time} 秒后重发`;
        this.countdownTimer = setInterval(() => {
          this.time--;
          this.Text = `${this.time} 秒后重发`;
          if (this.time === 0) {
            clearInterval(this.countdownTimer);
            this.countdownTimer = null;
            this.Text = "重新获取";
            this.disabled = false
            this.color = "#7fd2ff"
            this.border = "#7fd2ff"
          }
        }, 1000);
      }
    },
    changeColor() {
      if (this.trueAndFalse == true) {
        this.background = "#7fdafd"

      } else {
        this.background = "#02b6fd"
      }
    },
    // 按钮
    btncolor() {
      if (this.trueAndFalse == false) {
        this.background = "#7fdafd"
      } else {
        this.background = "#02b6fd"
      }
    },
    gotoSignin() {
      this.$router.push("login/signin")
    }
  },
  mounted() {
    // 按钮颜色
    this.btncolor()
    this.userinfo = JSON.parse(localStorage.getItem("userinfoData"))
    if (this.userinfo == null) {

    } else {
      for (let i = 0; i < this.userinfo.length; i++) {
        this.userphones.push(this.userinfo[i].userphone)
      }



    }

  }
}
</script>