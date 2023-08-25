<template>
  <footer class="main-footer">
    <router-link class="sg-item" active-class="active-page" to="/home" exact>
      <div class="sg-item-icon">
        <img src="../../assets/images/Footer/elm_icon.png" alt="">
      </div>
      <span>外卖</span>
    </router-link>

    <router-link class="sg-item" active-class="active-page" to="/message">
      <div class="sg-item-icon">
        <img src="../../assets/images/Footer/message_icon.png" alt="">
      </div>
      <span>消息</span>
    </router-link>

    <router-link class="sg-item" active-class="active-page" to="/shopcart" >
      <div class="sg-item-icon">
        <img src="../../assets/images/Footer/order_icon.png" alt="">
      </div>
      <span>订单</span>
    </router-link>

    <router-link class="sg-item" active-class="active-page" to="/my">
      <div class="sg-item-icon">
        <img src="../../assets/images/Footer/my_icon.png" alt="">
      </div>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script scoped>
export default {
  name: 'Footer',
  methods: {
    
  },
}
</script>

<style lang="scss"  scoped>
.main-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.1rem 0;

  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  background-color: white;

  display: flex;
  z-index: 888;

  .sg-item {
    flex: 1 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    color: black;
    text-decoration: none;

    .sg-item-icon {
      width: 2rem;
      height: 2rem;

      img {
        width: 100%;

        object-fit: cover;
      }
    }
  }
}

.active-page {
  color: rgb(49, 144, 232) !important;
}
</style>