<style lang="scss" scoped>
.main-body {
  padding: 3rem 0 4rem;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffff;
}

a {
  list-style: none;
  text-emphasis: none;
  color: black;
}

.userFriend {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.stortBox {
  display: flex;
  // margin-top: 1rem;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;

}

.stortImgBox {
  width: 3rem;
  height: 3rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.stortImgBox img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.stortNameBox {
  display: flex;
  flex-direction: column;
  width: 80%;
  border-bottom: 1px solid #f9f3f3;
}

.ltInfo {
  // padding-bottom: 1rem;
  color: #d2cece;
  font-size: 13px;
  font-weight: 600;
  padding-bottom: 0.2rem;
}

.name {
  display: flex;
  margin-bottom: 0.3rem;
}

.stortBoxAndTime {
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.times {
  font-size: 12px;
  color: #d2cece;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0.3rem;
}
</style>

<template>
  <div class="main-body">
    <Header title="信息"></Header>
    <!-- <div @click="$router.push('/message/friends')">1111</div> -->
    <div class="userFriend">

      <div v-for="(item, index) in getStortsData" :key="index"
        @click="routerData(item.stortName, item.stortImg, item.stortChatTime)">
        <router-link :to="{ name: 'Friends', query: { name: item.stortName, img: item.stortImg, time: item.stortChatTime } }" class="stortBox">
          <div class="stortImgBox">
            <img :src="require(`@/${item.stortImg}`)" alt="">
          </div>
          <div class="stortNameBox">
            <div class="name">
              <div class="stortBoxAndTime">
                <span>{{ item.stortName }}</span>
              </div>
              <div class="times">
                <span>{{ item.stortChatTime }}</span>
              </div>
            </div>
            <!-- 聊天信息 -->
            <div class="ltInfo">
              <span>聊天信息</span>
            </div>
          </div>
        </router-link>
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
import { mapGetters } from 'vuex'
import Header from '../../components/Header'

export default {
  name: 'Message',
  components: { Header },
  computed: {
    ...mapGetters("Storts", ["getStortsData"])
  },
  methods: {
    routerData() {

    }
  },
  mounted() {
    console.log(this.getStortsData);

  }
}
</script>


