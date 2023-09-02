<style lang="scss" scoped>
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
        box-sizing: border-box;
      }

      .sg-area {
        display: none;

        .sg-area-header {
          padding: 1rem;
          background-color: #f7f8fa;
        }
      }
    }

    .addGoods {
      .addGoodsBtn {
        width: 1.25rem;
        height: 1.25rem;
        line-height: 1;

        background-color: #2eafff;
        border: 0;
        border-radius: 50%;

        color: white;
        font-weight: 800;
        padding: 0.1rem;
      }
    }
  }
}

.van-card {
  background-color: white;
  box-sizing: border-box;
  padding: 1rem 0;
  width: calc(100% - 2rem);
}

.addGoodsSteper-wrap {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-end;
  user-select: none;

  .addGoodsSteper-nums {
    width: 2rem;
    text-align: center;
  }
}
</style>

<template>
  <!------- 商品 ------->
  <!-- #region  -->
  <div>
    <div class="sg-goods">
      <slot name="test"></slot>

      <van-card
        :price="info.price"
        :title="info.title"
        :thumb="require(`@/${this.info.img.substr(1)}`)"
      >
        <template #footer>
          <div
            class="addGoods"
            v-if="!goodsNum"
            @click="addShopCart"
          >
            <button>+</button>
          </div>

          <div
            class="addGoodsSteper-wrap"
            v-else
          >
            <button
              class="addGoodsSteper-minus"
              @click="minusShopCart"
            >-</button>

            <div class="addGoodsSteper-nums"> {{goodsNum}} </div>

            <button
              class="addGoodsBtn-plus"
              @click="addShopCart"
            >+</button>
          </div>

        </template>
      </van-card>
    </div>
  </div>
  <!-- #endregion  -->
  <!------- end ------->
</template>

<script>
export default {
  name: 'cm-SgGoodsCard',
  props: ['info', 'shopCartInfo', 'shopId'],
  data() {
    return {
      num: this.goodsNum
    }
  },
  methods: {
    addShopCart() {
      const info = {
        shopId: this.shopId,
        cart: this.info,
      };
      ++this.goodsNum;

      this.$store.dispatch('Shop/commitAddShopCart', info);
    },
    minusShopCart() {
      const info = {
        shopId: this.shopId,
        cart: this.info,
      };
      --this.goodsNum;

      this.$store.dispatch('Shop/commitMinusToCart', info);
    },
  },

  computed: {
    goodsNum: {
      get() {
        let t = 0;

        try {
          this.shopCartInfo.filter(item => {
            if (item.shopId == this.shopId) {
              item.shopCart.filter(dItem => {
                if (dItem.goodsId == this.info.goodsId) {

                  t = dItem.num;
                }
              })
            }
          })
        } catch { }

        return t;
      },
      set(val) {
        this.Num = val;
      }
    }
  },
  mounted() {

  },
  created() {

  },
}
</script>


