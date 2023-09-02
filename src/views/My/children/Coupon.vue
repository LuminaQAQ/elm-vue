<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 0;

  position: absolute;
  z-index: 1099;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 3rem);

  background-color: aliceblue;
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
      title="我的优惠券"
      :isGoBack="true"
    ></Header>

    <cm-loading></cm-loading>

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
import Header from '../../../components/Header'
import CmLoading from '../../../components/common/Loading'


export default {
  name: 'My',
  components: { Header, CmLoading },
  data() {
    return {
      userInfo: {
        bill: []
      }
    }
  }
}
</script>


