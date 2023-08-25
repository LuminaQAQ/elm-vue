<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 4rem;
}

.titleBox {
  width: 100%;
  margin-top: 2rem;
}

.listTab {
  display: flex;
  padding: 0rem 1rem 0rem 1rem;
  position: relative;
}

.listTab span {
  position: relative;
  flex: 0 0 auto;
  font-size: 1.1rem;
}

.allTab {
  padding: 0.5rem;
  margin-right: 0.3rem;
  font-weight: 800;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  white-space: nowrap;
  -webkit-line-clamp: 1;
}

.lines {
  // width:;
  position: absolute;
  top: 2.2rem;
  left: 1.9rem;
  box-sizing: border-box;
  width: 2.5rem;
  height: 0.5rem;
  overflow: hidden;
  background-color: #02b6fd;
  border-radius: 0.25rem;
  transform: scale(.5);
  transform-origin: top left;
  transition: all 0.3s;
}

// 订单
.orderMain {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.orderBox {
  // padding: 0rem 0.5rem 0rem 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: auto;
  padding: 0.75rem 0.75rem 0.75rem 0.75rem;
  margin: 0.5rem 0.75rem 0;
  background: #fff;
  border-radius: 0.375rem;
  // height: 2rem;
}

.orderHeard {
  display: flex;
  // height: 1.5rem;
  align-items: center;
  // justify-content: space-between;
  width: 100%;
}

.orderImg {
  flex: none;
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 0.25rem;
  margin-right: 0.3125rem;
  width: 2rem;
}

.orderImg img {
  width: 100%;
  object-fit: cover;
}

.orderName {
  display: -webkit-box;
  overflow: hidden;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.40625rem;
  color: #191919;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-right: 0.3rem;
}

.orderName span {
  font-weight: 800;
}

.arrowRight {
  flex: none;
  width: 0.8rem;
  // height: 0.6875rem;
  display: flex;
  align-items: center;
}

.arrowRight img {
  width: 100%;
  object-fit: cover;
}

.orderStatus {
  flex: 1 0 auto;
  font-size: 0.875rem;
  color: #999;
  text-align: right;
}

.foodBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: none;
  margin-top: 1rem;
}

.foodBoxImg {
  display: flex;
  flex: auto;
  overflow-x: auto;
  max-width: 15.625rem;
}

.foodImg {
  flex: none;
  position: relative;
  display: flex;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  overflow: hidden;
}

.foodCart {
  flex: none;
  width: 4.25rem;
  height: 4.25rem;
  background-size: 4.25rem;
}

.foodCart img {
  width: 100%;
  object-fit: cover;
}

.texts {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  color: #fff;
  background-color: #0000004c;
  width: 4.25rem;
  left: 0;
  bottom: 2px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.foodPrice {
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 0.5rem;
  white-space: nowrap;
}

.foodNumber {
  margin-top: 0.3125rem;
  font-size: 0.75rem;
  color: #999;
  text-align: right;
}
</style>

<template>
  <div class="main-body">
    <Header title="订单"></Header>
    <!-- 导航栏 -->
    <div class="backnone" v-show="foodisBool">
      <div class="titleBox">
        <div class="listTab">
          <div class="allTab" v-for="(itemTab, indexTab) in getorderTab" :key="indexTab" @click="changeTab(indexTab)">
            <span>{{ itemTab.texts }}</span>
          </div>

          <div class="lines" ref="line"></div>
        </div>
      </div>
      <!-- end -->
      <div class="orderMain" v-show="isBoolStrot">
        <div class="orderBox" v-for="(item, index) in getorderData" :key="index">
          <div class="orderHeard">
            <div class="orderImg">
              <img :src="require(`@/${item.stortImg}`)" alt="">
            </div>
            <div class="orderName">
              <span>{{ item.stortName }}</span>
            </div>
            <div class="arrowRight">
              <img src="../../assets/images/ShopCart/right1.png" alt="">
            </div>
            <div class="orderStatus">
              <span>{{ item.distribution }}</span>
            </div>
          </div>
          <div class="foodBox">
            <div class="foodBoxImg">
              <div class="foodImg" v-for="(items, indexs) in item.foodImgBox" :key="indexs">
                <div class="foodCart">
                  <img :src="require(`@/${items.foodImg}`)" alt="">
                </div>
                <div class="texts">
                  <span>{{ items.foodInfoData }}</span>
                </div>
              </div>

            </div>
            <div class="foodPrice">
              <div class="foodMoney">
                <span style="font-size: 0.75rem;">￥</span>
                <span style="font-size: 1rem;margin-left: 0.125rem;">{{ getfoodnum(item.foodImgBox) }}</span>
              </div>
              <div class="foodNumber">
                <span>共{{ item.foodImgBox.length }}件</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Orderloading v-show="isbool"></Orderloading>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { mapState } from 'vuex';

import Header from '../../components/Header'
import Orderloading from '../../components/common/Orderloading';

export default {
  name: 'ShopCart',
  components: { Header, Orderloading },
  data() {
    return {
      isbool: true,
      foodisBool: false,
      foodNumber: "",
      sumMoney: 0,
      isBoolStrot:true,
    }
  },
  computed: {
    ...mapState('Order', ['orderData']),
    ...mapGetters('Order', ['getorderData']),
    ...mapGetters('Order', ['getorderTab'])
  },
  methods: {
    funTime() {
      setTimeout(() => {
        this.isbool = false
        this.foodisBool = true
      }, 3000)
    },
    // 商品数量and商品总价
    getfoodnum(data) {
      if (data) {
        let sum = 0;
        data.filter(item => {
          sum += item.price
        })
        return sum;
      }
    },
    changeTab(index) {
      console.log(index);
      if (index == 1) {
        this.$refs.line.style = "left:6rem"
        this.isBoolStrot = false
      }
      if (index == 0) {
        this.$refs.line.style = "left:2rem"
          this.isBoolStrot = true
      }
      if (index == 2) {
        this.isBoolStrot = false
        this.$refs.line.style = "left: 10rem"
      }
    }
  },
  mounted() {
    this.funTime()
    this.getfoodnum()
    console.log(this.getorderTab);
  },

}
</script>


