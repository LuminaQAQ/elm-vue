import Vue from "vue";
import VueRouter from "vue-router";

// 首页
import Home from "../views/Home";
import Beverage from '../views/Home/Children/Beverage'
import NotFound from '../components/common/NotFound'

// 商店
import Shop from '../views/Shop'
import ConfirmOrder from '../views/Shop/children/Confirm'
import SuccessOrder from '../views/Shop/children/children/Order'

// 我的
import My from "../views/My";
import Balance from "../views/My/children/Balance";
import BalanceQuery from "../views/My/children/children/BalanceQuery";
import Points from "../views/My/children/Points";
import PointsQuery from "../views/My/children/children/PointsQuery";
import Coupon from "../views/My/children/Coupon.vue";

import Search from "../views/Search";

import ShopCart from "../views/ShopCart";

import Login from "../views/Login";
// 注册二级页面
import Signin from "../views/Login/children/signin";
// 订单页动画效果
import Orderloading from "../components/common/Orderloading.vue";

// 聊天二级内页
import Message from "../views/Message";
import Friends from "../views/Message/children/friends";
// 娱乐
import Happily from "../views/My/children/happily.vue";
// 会员卡页面
import Vip from "../views/My/children/vip.vue";

Vue.use(VueRouter);

const routes = [
  // 首页
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    meta: { title: "首页" },
    component: Home,
    children: [
      {
        path: "beverage",
        name: "Beverage",
        meta: { title: "饮料" },
        component: Beverage,
      },
      {
        path: "western",
        name: "Western",
        meta: { title: "西餐" },
        component: Beverage,
      },
      {
        path: "flavor",
        name: "Flavor",
        meta: { title: "小吃" },
        component: Beverage,
      },
      {
        path: "noodle",
        name: "Noodle",
        meta: { title: "面食" },
        component: Beverage,
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: { title: "404" },
  },

  // 店铺
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
    meta: { title: "店铺详情" },
    children: [
      {
        path: "confirm",
        name: "Confirm",
        meta: { title: "确认订单", isAuth: true },
        component: ConfirmOrder,
        children: [
          {
            path: "order",
            name: "Order",
            meta: { title: "订单完成", isAuth: true },
            component: SuccessOrder,
          },
        ],
      },
    ],
  },

  {
    path: "/shopcart",
    name: "ShopCart",
    meta: { title: "订单" },
    component: ShopCart,
  },

  {
    path: "/my",
    name: "My",
    meta: { title: "我的" },
    component: My,
    children: [
      {
        path: "balance",
        name: "Balance",
        meta: { title: "我的余额", isAuth: true },
        component: Balance,
        children: [
          {
            path: "query",
            name: "BalanceQuery",
            meta: { title: "余额说明", isAuth: true },
            component: BalanceQuery,
          },
        ],
      },
      {
        path: "points",
        name: "Points",
        meta: { title: "我的积分", isAuth: true },
        component: Points,
        children: [
          {
            path: "query",
            name: "PointsQuery",
            meta: { title: "积分说明", isAuth: true },
            component: PointsQuery,
          },
        ],
      },
      {
        path: "coupon",
        name: "Coupon",
        meta: { title: "我的优惠券", isAuth: true },
        component: Coupon,
      },
      {
        path: "happily",
        name: "Happily",
        meta: { title: "娱乐" },
        component: Happily,
      },
      {
        path: "vip",
        name: "Vip",
        meta: { title: "会员卡" },
        component: Vip,
      },
    ],
  },

  {
    path: "/message",
    name: "Message",
    meta: { title: "消息", isAuth: true },
    component: Message,
    children: [
      {
        path: "friends",
        name: "Friends",
        meta: { title: "聊天" },
        component: Friends,
      },
    ],
  },

  {
    path: "/search",
    name: "Search",
    meta: { title: "搜索" },
    component: Search,
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: Login,
    children: [
      {
        path: "signin",
        name: "Signin",
        meta: { title: "注册" },
        component: Signin,
      },
    ],
  },
  {
    path: "/orderloading",
    name: "Orderloading",
    component: Orderloading,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});

export default router;
