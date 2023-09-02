const Storts = {
  namespaced: true,
  state: {
    Storts: [
      {
        stortName: "商家1号",
        stortImg: "assets/images/ShopCart/mink.png",
        stortChatTime: "2023/8/20",
      },
      {
        stortName: "商家2号",
        stortImg: "assets/images/ShopCart/mink.png",
        stortChatTime: "2023/8/21",
      },
      {
        stortName: "商家3号",
        stortImg: "assets/images/ShopCart/mink.png",
        stortChatTime: "2023/8/22",
      },
    ],
  },
  getters: {
    getStortsData(state) {
      return state.Storts;
    },
  },
};
export default Storts;
