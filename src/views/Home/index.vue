<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 4rem;

  height: calc(100% - 7rem);
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;

  width: 100%;
  height: 16rem;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

// .router-fade-enter-active,
// .router-fade-leave-active {
//   transition: all 0.3s;
// }

// .router-fade-enter,
// .router-fade-leave-active {
//   opacity: 0;
//   transform: translateX(100%);
// }
</style>

<template>
  <div>
    <Header
      :displaySign='true'
      :displaySearch="true"
    >
    </Header>

    <section class="main-body">
      <!------- 轮播图 ------->
      <!-- #region  -->
      <van-swipe
        class="my-swipe"
        :autoplay="5000"
        indicator-color="white"
      >
        <van-swipe-item>
          <img
            src="https://img0.baidu.com/it/u=2155552880,465897457&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=666"
            alt=""
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img0.baidu.com/it/u=2736171308,2625557347&fm=253&fmt=auto&app=120&f=JPEG?w=1426&h=800"
            alt=""
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img0.baidu.com/it/u=1341565352,167874349&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800"
            alt=""
          >
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img0.baidu.com/it/u=2255401952,1879184933&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067"
            alt=""
          >
        </van-swipe-item>
      </van-swipe>
      <!-- #endregion  -->
      <!------- end ------->

      <!------- 选项 ------->
      <!-- #region  -->
      <van-grid square>
        <van-grid-item
          :icon="require(`@/${'/assets/images/Home/beverage_icon.png'}`)"
          text="饮料"
          :to="{name:'Beverage'}"
        />
        <van-grid-item
          :icon="require(`@/${'/assets/images/Home/flavor_icon.png'}`)"
          text="小吃"
          :to="{name:'Flavor'}"
        />
        <van-grid-item
          :icon="require(`@/${'/assets/images/Home/noodle_icon.png'}`)"
          text="面食"
          :to="{name:'Noodle'}"
        />
        <van-grid-item
          :icon="require(`@/${'/assets/images/Home/hamburger_icon.png'}`)"
          text="西点"
          :to="{name:'Western'}"
        />
      </van-grid>
      <!-- #endregion  -->
      <!------- end ------->

      <cm-gap></cm-gap>

      <!-------  ------->
      <!-- #region  -->
      <div class="shop-wrap">
        <cm-sg-shop-info
          v-for="(item, index) in GetShopInfo"
          :key="index"
          :shopInfo="item"
        :to="{name: 'Shop', query:{shopId: item.shopId} }"
        >
        </cm-sg-shop-info>
      </div>
      <!-- #endregion  -->
      <!------- end ------->

      <transition
        name="router-fade"
        mode="out-in"
      >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import Header from '../../components/Header'
import CmGap from '../../components/common/Gap'
import CmSgShopInfo from '../../components/common/SgShopInfo'

export default {
  name: 'Home',
  components: { Header, CmGap, CmSgShopInfo },
  computed: {
    ...mapGetters('Home', ['GetShopInfo']),
  },
  methods: {
    ...mapMutations('Home', ['HomeInitShopInfo']),
    ...mapMutations('Shop', ['ShopInitShopInfo']),
  },

  mounted() {
    this.HomeInitShopInfo();
    this.ShopInitShopInfo();
  },
}
</script>

