const Vipdata = {
  namespaced: true,
  state: {
    Vipdata: [
      {
        cardImg: "assets/images/Home/hamburger_icon.png",
        cardName: "店铺红包",
        cardstate: "饱了么专用",
        cardTime: "2023.09.03 23:59",
        cardmoney: 2,
        cardSum: 20,
      },
      {
        cardImg: "assets/images/Home/hamburger_icon.png",
        cardstate: "全场通用",

        cardName: "通用红包",
        cardTime: "2023.09.03 23:59",
        cardmoney: 10,
        cardSum: 20,
      },
      {
        cardImg: "assets/images/Home/hamburger_icon.png",
        cardstate: "配送减免专用",

        cardName: "配送红包",
        cardTime: "2023.09.03 23:59",
        cardmoney: 8,
        cardSum: 10,
      },
      {
        cardImg: "assets/images/Home/hamburger_icon.png",
        cardstate: "配送减免专用",

        cardName: "配送红包",
        cardTime: "2023.09.03 23:59",
        cardmoney: 4,
        cardSum: 10,
      },
      {
        cardImg: "assets/images/Home/hamburger_icon.png",
        cardstate: "配送减免专用",

        cardName: "配送红包",
        cardTime: "2023.09.03 23:59",
        cardmoney: 25,
        cardSum: 45,
      },
      {
        cardImg: "assets/images/Home/hamburger_icon.png",
        cardstate: "配送减免专用",

        cardName: "商品红包",
        cardTime: "2023.09.03 23:59",
        cardmoney: 15,
        cardSum: 45,
      },
      {
        cardImg: "assets/images/Home/hamburger_icon.png",
        cardstate: "配送减免专用",

        cardName: "商品红包",
        cardTime: "2023.09.03 23:59",
        cardmoney: 35,
        cardSum: 45,
      },
      {
        cardImg: "assets/images/Home/hamburger_icon.png",
        cardstate: "配送减免专用",

        cardName: "商品红包",
        cardTime: "2023.09.03 23:59",
        cardmoney: 24,
        cardSum: 45,
      },
    ],
  },
  //   获取
  getters: {
    getvipData(state) {
      return state.Vipdata;
    },
  },
};

export default Vipdata;
