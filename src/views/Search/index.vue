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

  .empty-status {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 1.5rem;
    color: rgb(173, 173, 173);
  }
}
</style>

<template>
  <div class="main-body">
    <Header
      title="搜索"
      :isGoBack="true"
    ></Header>

    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
    />

    <div class="shop-wrap">
      <template v-if="value">
        <cm-sg-shop-info
          v-for="(item, index) in searchRes"
          :key="index"
          :shopInfo="item"
          :to="{name: 'Shop', query:{shopId: item.shopId} }"
        >
        </cm-sg-shop-info>
      </template>

      <template v-else>
        <div class="empty-status">- 开始搜索吧! -</div>
      </template>
    </div>

    {{searchRes}}
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Header from '../../components/Header'
import CmSgShopInfo from '../../components/common/SgShopInfo'

export default {
  name: 'Beverage',
  components: { Header, CmSgShopInfo },
  data() {
    return {
      value: '',
      oriValue: [],
    };
  },
  computed: {
    searchRes() {
      return this.oriValue.filter(item => {
        if (item.shopName.indexOf(this.value) != -1) return item;
      })
    }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
  mounted() {
    this.oriValue = JSON.parse(window.localStorage.getItem('shopInfo')) || [];
  }
};
</script>


