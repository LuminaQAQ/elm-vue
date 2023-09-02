<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 0;

  position: absolute;
  z-index: 999;
  background-color: white;
  background-image: none;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.result {
  position: absolute;
  left: 50%;
  top: 40%;

  transform: translate(-50%, -40%);
}
</style>

<template>
  <div class="main-body">
    <Header
      title="余额说明"
      :isGoBack="true"
    ></Header>
    <el-result
      icon="success"
      title="支付成功"
      class="result"
    >
      <template slot="extra">
        <el-button
          type="primary"
          size="medium"
          @click="$router.replace('/home')"
        >
          返回首页
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Header from '../../../../components/Header'

export default {
  name: 'Message',
  components: { Header },
  methods: {
    // ...mapActions('Shop', ['removeShopCart']),
    // ...mapMutations('Shop', ['RemoveShopCart']),
  },
  computed: {
  },
  mounted() {
    this.$store.commit('Shop/RemoveShopCart', this.$route.query.shopId);

    // this.RemoveShopCart();
  }
}
</script>


