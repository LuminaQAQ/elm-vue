<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 0;

  position: absolute;
  z-index: 1099;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 3rem);
  -webkit-user-drag: none;
  overflow: hidden;

  background-color: rgb(246, 246, 246);
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

.row {
  padding: 0.5rem;
  border: 0;
  margin: 0;
}

.user-info-wrap {
  background-color: #3190e8;

  .user {
    position: relative;
    display: flex;
    align-items: center;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: white;

    .avatar {
      width: 4rem;
      height: 4rem;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }

    .user-name {
      font-size: 1.2rem;
    }
  }

  .point-num-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: white;

    .point {
      font-size: 1.2rem;

      .point-num {
        font-size: 1.25rem;
        font-weight: 600;
      }
    }

    .record {
      color: gray;
    }
  }
}

.goods-wrap {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  height: 75vh;
  overflow: auto;
}
</style>

<template>
  <div class="main-body">
    <Header title="积分商城" :isGoBack="true"></Header>

    <div class="user-info-wrap row">
      <div class="user">
        <div class="avatar">
          <img src="../../../assets/images/Myself/my.png" alt="">
        </div>
        <div class="user-name">uesrName</div>
      </div>

      <div class="point-num-wrap row">
        <div class="point">
          积分: <span class="point-num">0</span>
        </div>
        <div class="record">记录 &gt;</div>
      </div>

    </div>

    <div class="point-goods-wrap">
      <van-dropdown-menu>
        <van-dropdown-item v-model="type" :options="option1" @change="goodsSort(type, order)" />
        <van-dropdown-item v-model="order" :options="option2" @change="goodsSort(type, order)" />
      </van-dropdown-menu>

      <div class="goods-wrap">

        <template v-for="(item, index) in showInfo">
          <sg-point-card :key="index" :info="item">
          </sg-point-card>
        </template>
      </div>
    </div>

    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Header from '../../../components/Header'
import SgPointCard from '@/components/common/SgPointCard.vue'

export default {
  name: 'My',
  components: { Header, SgPointCard }, data() {
    return {

      type: 'default',
      order: 'default',
      option1: [
        { text: '全部商品', value: 'default' },
        { text: '家庭用品', value: '家庭' },
        { text: '餐饮美食', value: '食品' },
      ],
      option2: [
        { text: '默认排序', value: 'default' },
        { text: '积分升序', value: 'positive' },
        { text: '积分降序', value: 'reverse' },
      ],


      goodsInfo: [
        {
          id: 2,
          img: 'assets/images/Shop/GoodsImg1.jpg',
          title: '积分商品2',
          point: 18,
          type: '家庭'
        },
        {
          id: 1,
          img: 'assets/images/Shop/GoodsImg2.jpg',
          title: '积分商品1',
          point: 20,
          type: '食品'
        },
        {
          id: 3,
          img: 'assets/images/Shop/GoodsImg1.jpg',
          title: '积分商品3',
          point: 17,
          type: '家庭'
        },
        {
          id: 4,
          img: 'assets/images/Shop/GoodsImg2.jpg',
          title: '积分商品4',
          point: 10,
          type: '食品'
        },
        {
          id: 6,
          img: 'assets/images/Shop/GoodsImg1.jpg',
          title: '积分商品6',
          point: 16,
          type: '食品'
        },
        {
          id: 5,
          img: 'assets/images/Shop/GoodsImg2.jpg',
          title: '积分商品5',
          point: 20,
          type: '家庭'
        },
        {
          id: 7,
          img: 'assets/images/Shop/GoodsImg1.jpg',
          title: '积分商品7',
          point: 15,
          type: '食品'
        },
        {
          id: 8,
          img: 'assets/images/Shop/GoodsImg2.jpg',
          title: '积分商品8',
          point: 30,
          type: '家庭'
        },
      ],

      showInfo: []
    };
  },
  methods: {
    goodsSort(type, order) {

      if (type == order) return this.showInfo = [...this.goodsInfo];

      this.showInfo = this.sortHandler(type, order);
    },

    filterFn(type, order) {
      if (type == 'default') return [...this.goodsInfo];

      return this.goodsInfo.filter(item => {
        return item.type == type;
      });
    },
    sortFn(type, order, val) {
      if (order == 'default' && order == type) return val;
      return val.sort((a, b) => {
        return order == "positive" ? a.point - b.point : b.point - a.point;
      })
    },

    sortHandler(type, order) {
      let filter = this.filterFn(type, order);
      let sort = this.sortFn(type, order, filter);

      return sort;
    },

  },
  mounted() {
    this.goodsSort(this.type, this.order);
  }
}
</script>


