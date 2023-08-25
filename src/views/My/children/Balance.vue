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

.balance-card-wrap {
  background-color: #3190e8;
  padding: 0.5rem;

  .balance-card-main {
    background-color: aliceblue;
    border-radius: 5px;
    padding: 0 0.5rem;

    .balance-card-header,
    .balance-card-body,
    .balance-card-footer {
      padding: 0.5rem 0;
    }

    .balance-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: gray;

      .balance-card-details {
        display: flex;
        align-items: center;

        .balance-card-details-text {
          color: #3190e8;
        }

        .balance-card-details-icon {
          width: 1rem;
          height: 1rem;

          img {
            width: 100%;
            height: 100%;

            object-fit: cover;
          }
        }
      }
    }

    .balance-card-body {
      .balance-card-balance-num {
        font-size: 2.25rem;
      }
    }
  }
}

.bill-record-wrap {
  .bill-record-header {
    padding: 0.5rem;
    color: gray;
  }
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
    <Header title="我的余额" :isGoBack="true"></Header>

    <!------- 余额卡片 ------->
    <!-- #region  -->
    <div class="balance-card-wrap">
      <div class="balance-card-main">
        <!------- 顶部 ------->
        <!-- #region  -->
        <div class="balance-card-header">
          <span class="balance-card-describe">当前余额</span>
          <div class="balance-card-details">
            <div class="balance-card-details-icon">
              <img src="../../../assets/images/Balance/query_icon.png" alt="">
            </div>
            <router-link :to="{ name: 'BalanceQuery' }" class="balance-card-details-text">余额说明</router-link>
          </div>
        </div>
        <!-- #endregion  -->
        <!------- end ------->

        <!------- 中心 ------->
        <!-- #region  -->
        <div class="balance-card-body">
          <span class="balance-card-balance-num">0.00</span> 元
        </div>
        <!-- #endregion  -->
        <!------- end ------->

        <!------- 底部 ------->
        <!-- #region  -->
        <div class="balance-card-footer">
          <van-button type="primary" color="gray" block disabled>
            提现
          </van-button>
        </div>
        <!-- #endregion  -->
        <!------- end ------->
      </div>
    </div>
    <!-- #endregion  -->
    <!------- end ------->

    <!------- 明细记录 ------->
    <!-- #region  -->
    <div class="bill-record-wrap">
      <div class="bill-record-header">交易明细</div>

      <div class="bill-record-body">
        <template v-if="userInfo.bill && userInfo.bill.length > 0">0</template>
        <van-empty description="暂无明细记录" v-else />
      </div>
    </div>
    <!-- #endregion  -->
    <!------- end ------->

    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Header from '../../../components/Header'

export default {
  name: 'My',
  components: { Header },
  data() {
    return {
      userInfo: {
        bill: []
      }
    }
  }
}
</script>


