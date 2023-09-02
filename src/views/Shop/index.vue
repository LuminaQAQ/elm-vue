<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 0;

  position: absolute;
  z-index: 1099;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 3rem);

  background-color: #f7f8fa;
  overflow: hidden;
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.shop-title {
  position: relative;
  background-image: url("../../assets/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 110%;

  max-height: 30%;

  display: flex;
  align-items: center;
  justify-content: center;

  .shop-title-card {
    position: relative;
    width: calc(100% - 1rem);
    box-sizing: border-box;
    // height: 10rem;
    padding: 1rem;
    margin: 0.5rem 0;
    margin-top: 3rem;

    z-index: 2;
    background-color: white;
    border-radius: 8px;
    color: black;

    .shop-title-card-header,
    .shop-title-card-body {
      display: flex;
      align-items: center;

      padding: 0.5rem 0;
    }

    .shop-title-card-header {
      .shop-title-card-header-name {
        font-size: 1.25rem;
        font-weight: 600;
      }

      .shop-title-card-header-tag {
        font-size: 0.8rem;
        padding: 0.1rem;
        border-radius: 5px;
        margin-right: 0.5rem;

        background-color: #2eafff;
        color: rgb(241, 241, 241);
      }
    }

    .router-arrow {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }
  }
}

.shop-title::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  // background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  z-index: 1;
}

.goods-wrap {
  height: calc(100% - 7rem);
  overflow: auto;
  position: relative;

  .goods-body {
    position: relative;
    display: flex;
    height: calc(100% - 3rem);
    overflow: auto;

    .goods-body-option {
      width: 25%;
      background-color: #f7f8fa;
      height: calc(100% - 3rem);
      min-height: 100%;
      overflow: auto;

      .van-sidebar {
        width: 100%;
      }
    }

    .goods-body-goods {
      width: 75%;
      height: calc(100% - 3rem);
      min-height: 100%;
      background-color: white;
      overflow-y: auto;

      .van-card {
        background-color: white;
      }

      .sg-area {
        display: none;

        .sg-area-header {
          padding: 1rem;
          background-color: #f7f8fa;
        }
      }
    }
  }
}

::v-deep(.van-tabs__content),
::v-deep(.van-tab__pane),
.van-tabs {
  height: calc(100% - 3rem);
  overflow: auto;
}

.active {
  display: block !important;
}

.shop-cart-wrap {
  position: fixed;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  background-color: rgb(66, 66, 66);

  display: flex;
  align-items: center;

  height: 4rem;
  padding-left: 1rem;

  .shop-cart-inner {
    position: absolute;
    bottom: 4rem;
    left: 0;

    z-index: 1;

    width: 100%;
    height: 25rem;
    overflow: auto;

    background-color: #fff;

    .shop-cart-inner-header {
      width: calc(100% - 1rem);
      color: black;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      padding: 1rem 0.5rem;
    }
  }

  .shop-cart-main {
    width: calc(60% - 1rem);
    display: flex;
    align-items: center;
    color: white;
    z-index: 2;

    .shop-cart-img {
      position: relative;
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
      background-color: #2eafff;
      padding: 0.5rem;
      margin-right: 1rem;

      .shop-cart-goods-nums {
        position: absolute;
        top: -0.5rem;
        left: -0.5rem;

        padding: 0.1rem;
        width: 1rem;
        height: 1rem;
        line-height: 1;
        border-radius: 50%;
        text-align: center;

        background-color: red;
      }

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }
  }

  .shop-cart-price {
    .shop-cart-sum-price {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  .shop-cart-sum-btn {
    width: calc(40%);
    height: 100%;

    .sum-btn {
      height: 100%;
      width: 100%;
    }
  }
}

.shop-cart-mask {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 998;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: all 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
  transform: translateX(100%);
}
</style>

<template>
  <div
    class="main-body"
    v-if="isLoad"
  >
    <Header
      title="店铺详情"
      :isGoBack="true"
    >
    </Header>

    <!------- 店铺简介卡片 ------->
    <!-- #region  -->
    <nav
      class="shop-title"
      :style="`background-image: url(${this.GetShopInfo.imgSrc})`"
    >
      <router-link
        class="shop-title-card"
        to="shopDetail"
      >
        <!------- 顶部 ------->
        <!-- #region  -->
        <div class="shop-title-card-header">
          <div
            class="shop-title-card-header-tag"
            v-if="GetShopInfo.isBrand"
          >
            品牌
          </div>
          <div class="shop-title-card-header-name">{{GetShopInfo.shopName}}</div>
        </div>
        <!-- #endregion  -->
        <!------- end ------->

        <!------- 中间 ------->
        <!-- #region  -->
        <div class="shop-title-card-body">
          <div class="shop-title-card-body-rate">
            <span class="shop-title-card-body-rate-num">{{GetShopInfo.rate}}</span>分
          </div>
          &nbsp;|&nbsp;
          <div class="shop-title-card-body-deliver">
            <span class="shop-title-card-body-deliver-text">{{GetShopInfo.deliver}}</span>配送
          </div>
        </div>
        <!-- #endregion  -->
        <!------- end ------->

        <!------- 底部 ------->
        <!-- #region  -->
        <div class="shop-title-card-footer ellipsis">
          公告: <span class="shop-title-card-footer-notice">{{GetShopInfo.notice}}</span>
        </div>
        <!-- #endregion  -->
        <!------- end ------->

        <!-- 箭头 -->
        <div class="router-arrow">
          <img src="../../assets/images/Shop/arrow_icon.png">
        </div>
      </router-link>
    </nav>

    <!-- #endregion  -->
    <!------- end ------->

    <!------- 店铺商品 ------->
    <!-- #region  -->
    <section class="goods-wrap">
      <van-tabs @click="onClick">

        <!-------  ------->
        <!-- #region  -->
        <van-tab title="商品">
          <div class="goods-body">

            <!------- 选项 ------->
            <!-- #region  -->
            <div class="goods-body-option">
              <van-sidebar
                v-model="activeKey"
                @change="onChange"
              >
                <van-sidebar-item
                  ref="roll_box"
                  v-for="(item , index) in GetShopInfo.option"
                  :key="index"
                  :title="item"
                />
              </van-sidebar>
            </div>
            <!-- #endregion  -->
            <!------- end ------->

            <!------- 商品 ------->
            <!-- #region  -->
            <div
              class="goods-body-goods"
              ref="menuFoodList"
            >
              <div
                class="sg-area"
                v-for="(oItem, oIndex) in GetShopInfo.option"
                :key="oIndex"
                :class="{active: activeKey === oIndex}"
              >
                <div class="sg-area-header">{{oItem}} </div>
                <sg-goods-card
                  v-for="(dItem, dIndex) in GetShopInfo.optionDetails[oItem]"
                  :key="dIndex"
                  :info="dItem"
                  :shopCartInfo="GetShopCart"
                  :shopId="GetShopInfo.shopId"
                ></sg-goods-card>
              </div>
            </div>

            <!-- #endregion  -->
            <!------- end ------->
          </div>
        </van-tab>
        <!-- #endregion  -->
        <!------- end ------->
      </van-tabs>

    </section>
    <!-- #endregion  -->
    <!------- end ------->

    <div
      class="shop-cart-mask"
      v-show="shopCartIsShow"
      @click="showShopCart"
    ></div>

    <!------- 购物车 ------->
    <!-- #region  -->
    <section
      class="shop-cart-wrap"
      v-if="tagTab == 0"
    >
      <!------- 购物车底栏 ------->
      <!-- #region  -->
      <div
        class="shop-cart-main"
        @click="showShopCart"
      >
        <!------- 购物车图像 ------->
        <!-- #region  -->
        <div class="shop-cart-img">
          <img src="../../assets/images/Shop/cart_icon.png">
          <div
            class="shop-cart-goods-nums"
            v-show="ComputeShopCartLength(this.$route.query.shopId)"
          >
            {{ComputeShopCartLength(this.$route.query.shopId)}}
          </div>
        </div>
        <!-- #endregion  -->
        <!------- end ------->

        <!------- 价格 ------->
        <!-- #region  -->
        <div class="shop-cart-price">
          <div class="shop-cart-sum-price">
            ￥<span class="shop-cart-sum-price-num">{{ ComputeShopCartPrice(this.$route.query.shopId) }}</span>
          </div>
          <div class="shop-cart-deliver">
            配送费￥<span class="shop-cart-deliver-num"> {{ GetShopInfo.deliverFee }} </span>
          </div>
        </div>
        <!-- #endregion  -->
        <!------- end ------->
      </div>

      <!------- 结算按钮 ------->
      <!-- #region  -->
      <div class="shop-cart-sum-btn">
        <van-button
          :disabled="GetDisabledStatus"
          type="primary"
          size="large"
          color="#2eafff"
          class="sum-btn"
          :to="{name: 'Confirm', query: {shopId:this.GetShopInfo.shopId, shopName:this.GetShopInfo.shopName}}"
        >
          结算
        </van-button>
      </div>
      <!-- #endregion  -->
      <!------- end ------->

      <!-- #endregion  -->
      <!------- end ------->

      <div
        class="shop-cart-inner"
        v-show="shopCartIsShow"
      >
        <div class="shop-cart-inner-header">购物车</div>

        <div class="shop-cart-inner-body">
          <sg-goods-card
            v-for="(dItem, dIndex) in GetThisShopCart"
            :key="dIndex"
            :info="dItem"
            :shopCartInfo="GetShopCart"
            :shopId="GetShopInfo.shopId"
          >
          </sg-goods-card>
        </div>
      </div>
    </section>
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
  </div>
</template>

<script>
import SgGoodsCard from '@/components/common/SgGoodsCard.vue';
import { mapActions, mapGetters } from 'vuex';
import Header from '../../components/Header'

export default {
  name: 'Message',
  components: { Header, SgGoodsCard, },
  data() {
    return {
      isLoad: false,

      activeKey: 0,
      tagTab: 0,

      shopCartIsShow: false,
      shopCart: []
    }
  },
  methods: {
    onChange(index) {

    },
    onClick(index, title) {
      this.tagTab = index;
    },

    showShopCart() {
      this.shopCartIsShow = !this.shopCartIsShow;
    },

  },
  computed: {
    ...mapGetters('Shop', ['GetShopInfo']),
    ...mapGetters('Shop', ['GetShopCart']),
    ...mapGetters('Shop', ['ComputeShopCartPrice']),
    ...mapGetters('Shop', ['ComputeShopCartLength']),
    GetThisShopCart() {
      let t = [];

      try {
        this.GetShopCart.filter(item => {
          if (item.shopId == this.$route.query.shopId) {
            t = item.shopCart;
          }
        })
      } catch {

      }

      return t;
    },
    GetDisabledStatus() {
      if (this.GetThisShopCart && this.GetThisShopCart.length > 0) {
        return false;
      } else {
        return true;
      }

    }
  },
  mounted() {
    this.$store.dispatch('Shop/commitThisShopId', this.$route.query);
    this.isLoad = true;
  },
  created() {
  },
  beforeRouteLeave(to, from, next) {
    this.$destroy(true);
    next();
  },
}
</script>


