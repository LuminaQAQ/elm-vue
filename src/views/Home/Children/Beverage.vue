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

.shop-wrap {
  height: calc(100% - 3rem);
  overflow: auto;
  position: relative;
}
</style>

<template>
  <div class="main-body">
    <Header
      title="分类"
      :isGoBack="true"
    ></Header>

    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item
        v-model="value"
        :options="option"
      />
      <van-dropdown-item
        title="筛选"
        ref="item"
      >
        <van-cell
          center
          title="包邮"
        >
          <template #right-icon>
            <van-switch
              v-model="switch1"
              size="24"
              active-color="#ee0a24"
            />
          </template>
        </van-cell>
        <van-cell
          center
          title="团购"
        >
          <template #right-icon>
            <van-switch
              v-model="switch2"
              size="24"
              active-color="#ee0a24"
            />
          </template>
        </van-cell>
        <div style="padding: 5px 16px;">
          <van-button
            type="danger"
            block
            round
            @click="onConfirm"
          >
            确认
          </van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>

    <div class="shop-wrap">
      <cm-sg-shop-info
        v-for="(item, index) in GetShopInfo"
        :key="index"
        :shopInfo="item"
        :to="{name: 'Shop', query:{shopId: item.shopId} }"
      >
      </cm-sg-shop-info>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Header from '../../../components/Header'
import CmSgShopInfo from '../../../components/common/SgShopInfo'

export default {
  name: 'Beverage',
  components: { Header, CmSgShopInfo },
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
    };
  },
  computed: {
    ...mapGetters('Home', ['GetShopInfo']),
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
};
</script>


