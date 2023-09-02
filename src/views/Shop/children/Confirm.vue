<style lang="scss" scoped>
.main-body {
  padding: 3rem 0.5rem 0;

  position: absolute;

  top: 0;
  left: 0;
  width: calc(100% - 1rem);
  height: 100%;

  background-image: linear-gradient(
    to bottom,
    rgb(57, 159, 254) 10%,
    rgb(247, 247, 247) 50%
  );
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sg-card {
  margin: 0.5rem 0;
  border-radius: 10px;
}

.sg-text-wrap {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  padding: 0.5rem;
  background-color: white;

  .sg-text-wrap-num {
    font-weight: 600;
  }
}

.address-wrap {
  border-radius: 10px;
  width: calc(100% - 1rem);
  background-color: rgb(255, 255, 255);
  padding: 1rem 0.5rem;

  .address-text {
    font-size: 1.25rem;
    font-weight: 600;
  }
}

.order-wrap {
  .order-header {
    padding: 1rem 0.5rem;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    font-size: 1rem;
    font-weight: 600;
  }

  .van-card {
    margin: 0;

    .van-card__title {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1;
    }
  }

  .sum-price {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
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
  <div class="main-body">
    <Header
      title="确认订单"
      :isGoBack="true"
    ></Header>

    <van-notice-bar
      class="sg-card"
      left-icon="volume-o"
      text="温馨提示：请适量点餐，避免浪费"
    />

    <div class="address-wrap sg-card">
      <!-- <div class="address-text">请选择收货地址</div> -->
      <div class="address-text ellipsis">湄洲湾职业技术学院东软现代产业学院xx宿舍楼x栋x号</div>
    </div>

    <div class="order-wrap sg-card">
      <div class="order-header"> {{this.$route.query.shopName}} </div>
      <div class="cart-list">
        <van-card
          v-for="(item, index) in this.GetOrderShopCart"
          :key="index"
          style="background-color: white;"
          :num="item.num"
          :title="item.title"
          :price="item.price"
          :thumb="require(`@/${item.img.substr(1)}`)"
        />
      </div>
      <div class="delivery-fee sg-text-wrap">
        <div class="delivery-fee-describe">配送费</div>
        <div class="sg-text-wrap-num">￥ {{GetDeliveryFee}} 元</div>
      </div>
      <div class="sum-price sg-text-wrap">
        <div class="delivery-fee-describe">合计</div>
        <div
          class="sg-text-wrap-num"
          v-if="this.isLoad"
        >
          ￥ {{ComputePrice}} 元
        </div>
      </div>
    </div>

    <van-submit-bar
      :price="formatPrice"
      v-if="this.isLoad"
      button-text="提交订单"
      button-color="rgb(57, 159, 254)"
      @submit="onSubmit"
    />

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
import { mapActions, mapGetters } from 'vuex';
import Header from '../../../components/Header'

export default {
  name: 'Message',
  components: { Header },
  data() {
    return {
      cart: '',
      isLoad: false,
      formatPrice: 0
    };
  },
  computed: {
    ...mapGetters('Shop', ["GetOrderShopCart"]),
    ...mapGetters('Shop', ["GetDeliveryFee"]),
    ComputePrice() {
      let sum = 0, format = 0;

      this.cart.filter(item => {
        sum += item.price;
        format += item.price;
      });
      this.formatPrice = format *= 100

      return sum;
    }
  },
  methods: {
    onSubmit(val) {
      this.$router.replace({ name: 'Order', query: { shopId: this.$route.query.shopId, shopName: this.$route.query.shopName } });
    },
    ...mapActions('Shop', ["commitThisShopCart"]),
  },
  mounted() {
    this.$store.dispatch('Shop/commitThisShopCart', this.$route.query.shopId);
    this.cart = this.GetOrderShopCart;
    this.isLoad = true;
  },
}
</script>


