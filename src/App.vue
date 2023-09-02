<template>
  <div id="app">
    <transition
      name="router-fade"
      mode="out-in"
    >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <Footer></Footer>
  </div>
</template>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;

  height: 100vh;
  scrollbar-width: none;
  background-color: #f5f5f5;
}

:where(body, html) ::-webkit-scrollbar {
  width: 0;
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>

<script>
import Footer from './components/Footer'

export default {
  components: { Footer }
}
</script>




