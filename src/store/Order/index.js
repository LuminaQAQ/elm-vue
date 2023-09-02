const Order = {
  namespaced: true,
  state: {
    orderData: [
      {
        stortId: 0,
        stortImg: "assets/images/ShopCart/bake.png",
        stortName: "饱了么官方旗舰店",
        distribution: "未送达",
        foodImgBox: [
          {
            foodImg: "assets/images/ShopCart/mink.png",
            foodInfoData: "补货中",
            price: 10,
          },
          {
            foodImg: "assets/images/ShopCart/mink.png",
            foodInfoData: "缺货",
            price: 12,
          },
        ],
        // foodInfo: [
        //   {
        //     foodInfoData: "补货中",
        //   },
        //   {
        //     foodInfoData: "缺货",
        //   },
        // ],
      },
      {
        stortId: 1,
        stortImg: "assets/images/ShopCart/bake.png",
        stortName: "饱了么官方旗舰店",
        distribution: "已送达",
        foodImgBox: [
          {
            foodImg: "assets/images/ShopCart/mink.png",
            foodInfoData: "补货中",
            price: 10,
          },
          {
            foodImg: "assets/images/ShopCart/mink.png",
            foodInfoData: "缺货",
            price: 12,
          },
          {
            foodImg: "assets/images/ShopCart/mink.png",
            foodInfoData: "补货中",
            price: 10,
          },
          {
            foodImg: "assets/images/ShopCart/mink.png",
            foodInfoData: "缺货",
            price: 12,
          },
        ],
        // foodInfo: [
        //   {
        //     foodInfoData: "补货中",
        //   },
        //   {
        //     foodInfoData: "缺货",
        //   },
        // ],
      },
    ],
    orderTab: [
      {
        texts: "全部",
      },
      {
        texts: "待评价",
      },
      {
        texts: "退款",
      },
    ],
  },
  getters: {
    getorderData(state) {
      return  state.orderData;
    },
    getorderTab(state) {
      return state.orderTab;
    }
  },
};
export default Order;
