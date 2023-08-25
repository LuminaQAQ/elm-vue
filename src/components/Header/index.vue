<style lang="scss" scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  line-height: 1;
  height: 1rem;
  padding: 1rem 1rem;
  background-color: rgb(49, 144, 232);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 888;

  .goBack,
  .user-avatar,
  .search-wrap {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    line-height: 1.5;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  .header-title-text {
    line-height: 1;
    font-size: 1.3rem;
  }

  .head-sign {
    color: white;
    text-decoration: none;
    line-height: 1;

    .sign-text {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
  }
}
</style>

<template>
  <header class="main-header">
    <!------- 搜索 ------->
    <!-- #region  -->
    <slot name='search' v-if="displaySearch">
      <router-link to="/search" class="search-wrap">
        <img src="../../assets/images/Header/search_icon.png" alt="">
      </router-link>
    </slot>
    <!-- #endregion  -->
    <!------- end ------->

    <!------- 返回 ------->
    <!-- #region  -->
    <section class="goBack" v-if="isGoBack" @click="$router.go(-1)">
      <img src="../../assets/images/Header/back_icon.png">
    </section>
    <section class="header-title-wrap" v-else>
      <span class="header-title-text"></span>
    </section>
    <!-- #endregion  -->
    <!------- end ------->

    <!------- 标题 ------->
    <!-- #region  -->
    <section class="header-title-wrap" v-if="title">
      <span class="header-title-text">{{ title }}</span>
    </section>
    <section class="header-title-wrap" v-else>
      <span class="header-title-text"></span>
    </section>
    <!-- #endregion  -->
    <!------- end ------->

    <!------- 登录 | 注册 ------->
    <!-- #region  -->
    <router-link to="/" v-if='displaySign' class="head-sign">
      <div class="user-avatar" v-if="userInfo">
        <img src="../../assets/images/Header/avatar_icon.png" alt="">
      </div>
      <span class="sign-text" v-else>
        登录 | 注册
      </span>
    </router-link>
    <span v-else></span>
    <!-- #endregion  -->
    <!------- end ------->
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    displaySearch: Boolean,
    isGoBack: Boolean,
    title: String,
    displaySign: Boolean,
  },
  data() {
    return {
      keywords: '',
      userInfo: '',
    }
  }
}
</script>