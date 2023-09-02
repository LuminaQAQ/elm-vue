<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 0;

  position: absolute;
  z-index: 1099;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 3rem);

  background-color: white;
}

.not-found-wrap {
  position: absolute;
  top: calc(50% - 3rem);
  left: 50%;
  width: 100%;
  text-align: center;
  background-image: url("../../assets/images/Home/404.png");

  background-position: 0% -10%;

  transform: translate(-50%, -50%);

  .not-found-num {
    font-size: 3.5rem;
    font-weight: 800;
    color: #97cbff;
    font-style: italic;

    text-shadow: 3px 3px 1px #2e92f7;
  }

  .not-found-text {
    font-size: 2.5rem;
    font-weight: 800;

    color: #5a646f;

    margin-bottom: 3rem;
  }
}
</style>

<template>
  <div class="main-body">
    <div class="not-found-wrap">
      <div class="not-found-num">404</div>
      <div class="not-found-text">该页面不存在!</div>

      <el-button
        type="primary"
        size="medium"
        @click="$router.replace('/home')"
      >
        返回首页
      </el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>


