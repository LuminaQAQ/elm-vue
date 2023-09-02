<style lang="scss" scoped>
.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sg-point {
  width: calc(50% - 0.6rem);
  height: 12.5rem;
  margin: 0.3rem;
  background-color: white;
  border-radius: 7px;
  padding-bottom: 0.5rem;

  .goods-img {
    width: 100%;
    height: 8rem;
    text-align: center;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  .goods-introduce {
    padding: 0.5rem;

    .goods-title {
      margin: 0.5rem 0;
      font-weight: 600;
    }

    .point-required {
      color: rgb(255, 157, 0);
      font-size: 1.25rem;
      font-weight: 800;
    }
  }
}
</style>

<template>
  <div class="sg-point">
    <div class="goods-img">
      <img
        :src="require(`@/${info.img}`) "
        alt=""
      >
    </div>

    <div class="goods-introduce">
      <div class="goods-title ellipsis"> {{info.title}} </div>
      <div class="goods-points ellipsis">
        <span class="point-required">{{info.point}}</span> 积分
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'cm-SgPointCard',
  props: ['info'],
  data() {
    return {

    }
  },
}
</script>


