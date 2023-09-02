<style lang="scss" scoped>
.main-body {
    padding: 3rem 0 0;
    position: absolute;
    z-index: 1099;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 3rem);
    background-color: #ffff,
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

.signinBtn {
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

// 页脚
.footer {
    position: fixed;
    height: 8rem;
    padding: 0.5rem 0;
    width: 100%;
    background: #f5f5f5;
    font-size: 12px;
    text-align: center;
    bottom: 0px;
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

// 账号
.userNameBox {
    width: 85%;
    margin-top: 1rem;
    position: relative;
}

.userName {
    border: 0px;
    border-bottom: 1.5px solid #e5e5e5;
    padding: 0.3rem 0.3rem 0.6rem 0rem;
    width: 100%;
}
</style>

<template>
    <div class="back">
        <div class="main-body">
            <Header title="注册" :isGoBack="true"></Header>
            <div class="logoImg">
                <img src="../../../assets/images/Login/elm.png" alt="">
            </div>
            <div class="loginInputBox">
                <div class="loginCenter">
                    <div class="loginInput">
                        <!-- v-on:blur="phoneyz" -->
                        <input type="text" name="" id="" placeholder="请输入手机号" class="userPhone" ref="userPhone"
                            @click="phoneyz" v-on:blur="blurs">
                        <div class="closeImg" @click="clearLen">
                            <img src="../../../assets/images/Login/close.png" alt="" v-show="isBool">
                        </div>
                    </div>
                    <div class="loginInputVerify">
                        <input type="text" name="" id="" placeholder="请输入验证码" class="userVerife" @click="verifeyz"
                            v-on:blur="blur" ref="userVerife">
                        <div class="closeImgVerife" @click="clearLens">
                            <img src="../../../assets/images/Login/close.png" alt="" v-show="isBools">
                        </div>
                        <div class="verife" @click="funGetVerife" :style="{ color: color, 'border-color': border }">
                            {{ Text }}
                        </div>
                    </div>
                    <div class="userNameBox">
                        <input type="text" name="" id="" placeholder="请输入账号" class="userName" v-on:blur="userBlur"
                            @click="userNameyz" ref="userName" autocomplete="off">
                        <div class="closeImg" @click="clearLens">
                            <img src="../../../assets/images/Login/close.png" alt="" v-show="isBoolss">
                        </div>
                    </div>


                    <div class="userNameBox">
                        <input type="password" name="" id="" placeholder="请输入密码" class="userName" v-on:blur="passBlur"
                            ref="userPassword" @click="passwordyz">
                        <div class="closeImg" @click="clearLenss">
                            <img src="../../../assets/images/Login/close.png" alt="" v-show="isBoolsss">
                        </div>
                    </div>
                    <div class="userNameBox">
                        <input type="password" name="" id="" placeholder="请重新输入" class="userName" ref="userNewPassword"
                            v-on:blur="newPassBlur" @click="newPasswordyz">
                        <div class="closeImg" @click="clearLensss">
                            <img src="../../../assets/images/Login/close.png" alt="" v-show="isBoolssss">
                        </div>
                    </div>
                    <div class="btnBox" @click="successSignin">
                        <button class="signinBtn">注册</button>
                    </div>

                </div>

            </div>
            <!-- <footer class="footer" v-show="false">
            <p>所有方 上海拉扎斯信息科技有限公司</p>
            <p>增值电信业务许可证: 沪B2-20150033 沪ICP备 09007032上海工商行政管理Copyright ©2008-2023 ele.me, All Rights Reserved.</p>
            <router-link to="path">
                <img src="../../../assets/images/Login/jc.png" alt="" class="jcImg">
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
import Header from '../../../components/Header'
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
            background: "#02b6fd",
            isBoolss: false,
            isBoolsss: false,
            isBoolssss: false,
            // 
            singinBool: false,
            showFooter: true,
            userInfo: [

            ],
            userphoneData: [],
            usernameData: []
        }
    },
    methods: {
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

        // 清除数据
        userBlur() {
            if (this.$refs.userName.value.length == 0) {
                // this.isBoolss = false
            }
        },
        userNameyz() {
            this.isBoolss = true
        },
        clearLens() {
            this.$refs.userName.value = ""
            this.isBoolss = false
        },

        // 密码
        passBlur() {
            if (this.$refs.userPassword.value.length == 0) {
                this.isBoolsss = false
            }
        },
        passwordyz() {
            this.isBoolsss = true
        },
        clearLenss() {
            this.$refs.userPassword.value = ""
            this.isBoolsss = false
        },
        // 
        newPassBlur() {
            if (this.$refs.userNewPassword.value.length == 0) {
                this.isBoolssss = false
            }
        },
        newPasswordyz() {
            this.isBoolssss = true

        },
        clearLensss() {
            this.$refs.userNewPassword.value = ""
            this.isBoolssss = false
        },
        // 注册按钮
        successSignin() {
            // 账号
            const userNamesTest = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
            // 密码
            const userPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
            // 手机
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
            if (this.$refs.userName.value == "") {
                Dialog.alert({
                    message: '请输入账号',
                }).then(() => {
                    // on close
                });
                return false;
            } else {
                if (!userNamesTest.test(this.$refs.userName.value)) {
                    Dialog.alert({
                        message: '账号只能由英文数字中文组成！',
                    }).then(() => {
                        // on close
                    });
                    return false;
                } else {
                    if (!userPassword.test(this.$refs.userPassword.value)) {
                        Dialog.alert({
                            message: '密码至少要有6位(必须数字混合字母组成可以带符号)',
                        }).then(() => {
                            // on close
                        });
                        return false;
                    } else {
                        if (this.$refs.userNewPassword.value != this.$refs.userPassword.value) {
                            Dialog.alert({
                                message: '两次密码不一致',
                            }).then(() => {
                                // on close
                            });
                            return false;
                        }
                        else {
                            // 判断是否存在
                            let boolStr = this.userphoneData.includes(this.$refs.userPhone.value)
                            let boolStrone = this.usernameData.includes(this.$refs.userName.value)

                            if (boolStr == true) {
                                Dialog.alert({
                                    message: '手机号已经被注册!',
                                }).then(() => {
                                    // on close
                                });
                                return false;
                            }
                            if (boolStrone == true) {
                                Dialog.alert({
                                    message: '用户名已经被注册!',
                                }).then(() => {
                                    // on close
                                });
                                return false;

                            }
                            else {
                                let storedData = localStorage.getItem("userinfoData");
                                let userinfoData = [];
                                // 如果已有数据存在，则解析为数组形式；否则，创建一个空数组
                                if (storedData) {
                                    userinfoData = JSON.parse(storedData);
                                }
                                // 创建新的用户信息对象
                                let newUserInfo = {
                                    userphone: this.$refs.userPhone.value,
                                    username: this.$refs.userName.value,
                                    userpass: this.$refs.userPassword.value,
                                    userIsbool: false
                                };
                                // 将新的用户信息添加到数组中
                                userinfoData.push(newUserInfo);
                                // 将整个数组重新存储回 localStorage
                                localStorage.setItem("userinfoData", JSON.stringify(userinfoData));
                                Notify({ type: 'success', message: '注册成功' });
                                setTimeout(() => {
                                    this.$router.back()
                                }, 2000)
                            }
                        }
                    }
                }
            }





        },
        hideFooter() {
            this.showFooter = false
        }
    },
    mounted() {
        // 页面加载后直接获取
        let userdatazonghe = JSON.parse(localStorage.getItem("userinfoData"))
        this.userInfo = userdatazonghe
        if (this.userInfo == null) {

        } else {
            for (let i = 0; i < this.userInfo.length; i++) {
                this.userphoneData.push(this.userInfo[i].userphone)
                this.usernameData.push(this.userInfo[i].username)
            }
        }


    },
    beforeRouteLeave(to, from, next) {
        this.$destroy(true);
        next();
    },

}
</script>