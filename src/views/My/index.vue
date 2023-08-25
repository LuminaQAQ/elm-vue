<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 4rem;
}

p {
  margin: 0px;
  padding: 0px;
}

#loginBody {
  background: #f5f5f5;
  height: 100%;
}

.van-nav-bar .van-icon {
  color: #ffff !important;
}

.van-nav-bar__title {
  color: #ffff !important;
}

.mySelf {
  width: 100%;
  display: block;
  display: flex;
  box-align: center;
  align-items: center;
  background: #3190e8;

  padding: 1rem 0;
}

.userImg {
  padding-left: 0.5rem;
  width: 3.3rem;
  height: 3.3rem;
}

.userImg img {
  width: 100%;
  object-fit: cover;
  min-width: 3.3rem;
}

.loginText {
  font-weight: 1000;
  font-family: Helvetica Neue, Tahoma, Arial;
  font-size: 1rem;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.2rem;
}

.userLogin {
  padding-left: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userPhone {
  font-size: 0.8rem;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userInfo img {
  width: 0.75rem;
  /* overflow:; */
  object-fit: cover;
}

.userInfo {
  display: flex;
}

.rightImgBox {
  width: 1rem;
  margin-left: auto;
  margin-right: 1rem;
}

.rightImgBox img {
  width: 100%;
}

/* 用户金额 */
.moneyUser {
  display: flex;
  background: #ffff;
}

.moneyInfo {
  width: 33.33%;
  display: inline-block;
  border-right: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  /* 将子元素垂直排列 */
  align-items: center;
}

.numberMoney {
  padding-top: 1.2rem;
  padding-bottom: 0.3rem;
}

.numberText {
  font-size: 0.8rem;
  color: #666;
  font-weight: 400;
}

.num {
  font-size: 2rem;
  color: #f90;
  font-weight: 700;
  line-height: 1rem;

  font-family: Helvetica Neue, Tahoma;
}

.dollor {
  font-size: 0.75rem;
}

.userOrder {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  /* 将子元素垂直排列 */
  /* align-items: center; */
}

/*  */
.order {
  display: flex;
  background: #ffff;
  padding: 0.6rem 0.3rem 0.6rem 0.8rem;
  color: black;
}

.leftImg {
  width: 1.3rem;
  object-fit: cover;
  display: flex;
  align-items: center;
}

.leftImg img {
  width: 100%;
}

.orderText {
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  font-family: Helvetica Neue, Tahoma, Arial;
  width: 100%;
  height: 100%;
  position: relative;
}

.orderText::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.625rem;
  width: 100%;
  height: 1px;
  background-color: #f1f1f1;
}

.orderRight {
  width: 1rem;
  display: flex;
  align-items: center;
}

.orderRight img {
  width: 100%;
}

.service {
  margin-top: 0.5rem;
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
  <div class="main-body">
    <Header title="我的" ></Header>
    <div class="mySelf" @click="gotologin">
      <div class="userImg">
        <img src="../../assets/images/Myself/my.png">
      </div>
      <div class="userLogin">
        <p class="loginText">登录/注册</p>
        <div class="userInfo">
          <img src="../../assets/images/Myself/phone.png">
          <p class="userPhone">暂无绑定手机号</p>
        </div>
      </div>
      <div class="rightImgBox">
        <img src="../../assets/images/Myself/right.png" alt="">
      </div>

    </div>
    <!-- end -->

    <!-- 金额 -->
    <div class="moneyUser">
      <div class="moneyInfo" v-for="(item, index) in $store.state.datas" :key="index">
        <router-link :to="item.router">
          <div class="numberMoney">
            <span class="num" :style="{ color: item.colors }">{{ item.moneyNum }}</span>
            <span class="dollor">{{ item.number }}</span>
          </div>
          <div class="numberText">{{ item.textNum }}</div>
        </router-link>
      </div>
    </div>
    <!-- end -->

    <!-- 应用 -->
    <div class="userOrder">
      <div  v-for="(item, index) in $store.state.order" :key="index">
        <router-link :to="item.router" class="order">
        <div class="leftImg">
          <img :src="item.imgSrc" alt="">
        </div>
        <div class="orderText">
          <span>{{ item.text }}</span>
        </div>
        <div class="orderRight">
          <img src="../../assets/images/Myself/right1.png" alt="">
        </div>
        </router-link>
      </div>
    </div>
    <!-- end -->

    <!-- 服务 -->
    <div class="service">
      <div  v-for="(item, index) in $store.state.service" :key="index">
        <router-link :to="item.router" class="order">
          <div class="leftImg">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="orderText">
            <span>{{ item.text }}</span>
          </div>
          <div class="orderRight">
            <img src="../../assets/images/Myself/right1.png" alt="">
          </div>
        </router-link>
      </div>
    </div>

    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Header from '../../components/Header'

export default {
  name: 'My',
  components: { Header },
  methods: {
    gotologin() {
      this.$router.push("login");
    }
  },
}
</script>

