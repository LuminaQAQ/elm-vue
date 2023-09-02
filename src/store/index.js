import Vue from "vue";
import Vuex from "vuex";
import Home from "./Home";
import Shop from "./Shop";
import Order from "./Order";
import Storts from "./Storts";
import Vipdata from "./Vipdata"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datas: [
      {
        moneyNum: 0,
        number: "元",
        textNum: "我的余额",
        colors: "#f90;",
        router: { name: "Balance" },
      },
      {
        moneyNum: 0,
        number: "个",
        textNum: "我的优惠",
        colors: "#ff5f3e",
        router: { name: "Coupon" },
      },
      {
        moneyNum: 0,
        number: "分",
        textNum: "我的积分",
        colors: "#6ac20b",
        router: { name: "Points" },
      },
    ],
    // 订单
    order: [
      {
        imgSrc: require("../assets/images/Myself/order.png"),
        text: "我的订单",
        router: { name: "Vip" },
      },
      {
        imgSrc: require("../assets/images/Myself/shoping.png"),
        text: "积分商城",
        router: { name: "PointShop" },
      },
      {
        imgSrc: require("../assets/images/Myself/vip.png"),
        text: "饿了么会员卡",
        router: { name: "Vip" },
      },
    ],
    // 服务
    service: [
      {
        imgSrc: require("../assets/images/Myself/happily.png"),
        text: "娱乐",
        router: { name: "Happily" },
      },
      {
        imgSrc: require("../assets/images/Myself/icon-fuwu.png"),
        text: "服务中心",
        router: { name: "Happily" },
      },
      // {
      //   imgSrc: require("../assets/images/Myself/less.png"),
      //   text: "退出登录",
      //   router: { name: "Happily" },
      // },
    ],
  },
  modules: {
    Home,
    Shop,
    Order,
    Storts,
    Vipdata,
  },
});
