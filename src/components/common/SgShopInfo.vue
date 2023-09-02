
<style lang="scss" scoped>
.sg-shop-wrap {
  display: flex;
  padding: 0.5rem;
  background-color: white;
  margin: 0.5rem;
  border-radius: 5px;
  color: black;

  .shop-img {
    width: 8rem;
    height: 8rem;
    margin-right: 0.5rem;

    .brand-tag {
      position: absolute;
      font-size: 0.8rem;
      padding: 0.1rem;
      border-radius: 5px;

      background-color: #2eafff;
      color: rgb(241, 241, 241);
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;

      object-fit: cover;
    }
  }

  .shop-info {
    width: calc(100% - 8rem);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .shop-title {
      font-size: 1.2rem;
      font-weight: 800;
    }
  }

  .sg-column {
    display: flex;

    line-height: 1;
    font-size: 0.9rem;
    color: rgb(60, 60, 60);

    align-items: center;
    justify-content: center;
  }

  .sg-row-wrap {
    display: flex;
    justify-content: space-between;

    .shop-rate {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ff6000;

      line-height: 1;
      .shop-rate-num {
        font-size: 1.1rem;
      }
    }
  }

  .shop-fee {
    line-height: 1;
    font-size: 0.9rem;
    color: rgb(60, 60, 60);
  }

  .sg-shop-review {
    margin-right: 0.2rem;
    padding: 0.2rem;
    line-height: 1;
    font-size: 0.9rem;
    font-weight: 600;
    color: #ff9655;
    background-color: #ffe1aa;
    border-radius: 5px;
  }
}
</style>

<template>
  <router-link
    :to="to"
    class="sg-shop-wrap"
  >
    <div class="shop-img">
      <div
        class="brand-tag"
        v-if="shopInfo.isbrand"
      >
        品牌
      </div>
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105"
        alt=""
      >
    </div>

    <div class="shop-info">
      <div class="sg-row-wrap">
        <div class="shop-title"> {{shopInfo.shopName}} </div>
      </div>

      <div class="sg-row-wrap">
        <div class="sg-column">
          <div class="shop-rate">
            <span class="shop-rate-num">{{shopInfo.rate}}</span> 分
          </div>
        </div>

        <div class="sg-column">
          <div class="shop-time">
            <span class="shop-time-num">{{shopInfo.time}}</span>分钟
          </div>
          &emsp;
          <div class="shop-distance">
            <span class="shop-distance-num">{{shopInfo.distance}}</span>km
          </div>
        </div>
      </div>

      <div class="sg-row-wrap">
        <div class="shop-fee">
          起送￥<span class="shop-fee-num">{{shopInfo.sale}}</span>
        </div>
      </div>

      <div class="sg-row-wrap">
        <div
          class="shop-review"
          v-if="shopInfo.review"
        >
          <span
            class="sg-shop-review"
            v-for="(item, index) in shopInfo.review"
            :key="index"
          >
            {{item}}
          </span>
        </div>

        <div
          class="shop-review-wrap"
          v-else
        >
          {{shopInfo.rank}}
        </div>
      </div>

    </div>
  </router-link>
</template>

<script>
export default {
  name: 'cm-SgShopInfo',
  props: ['shopInfo', 'to'],
  // data() {
  //   return {
  //     shopInfo: {
  //       shopId: '001',

  //       isbrand: true,
  //       imgSrc: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105',

  //       shopName: '叫了碗面',

  //       rate: 5.1,
  //       sale: 0,
  //       distance: 33,
  //       time: 50,

  //       fee: 15,

  //       review: ['这家店很好吃!', '精选品牌'],
  //       rank: '国区内推排行榜',
  //     }
  //   }
  // }
}
</script>
