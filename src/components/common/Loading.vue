<style lang="scss" scoped>
.loading-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 3rem));
  z-index: 2000;

  .loading {
    width: 3rem;
    height: 3rem;

    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateY(0rem);
    z-index: 2001;

    animation: Loading infinite 3s linear alternate;
  }

  .loading-shadow {
    transform-origin: 50% 50% 0;
    transform: translateY(1.5rem) rotateX(60deg);

    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.15);
    z-index: 2000;

    animation: LoadingShadow infinite 0.3s linear alternate;
  }
}

@keyframes LoadingShadow {
  0% {
    transform: translateY(1.5rem) rotateX(60deg) scale(0.5);
  }
  100% {
    scale: 1;
    transform: translateY(1.5rem) rotateX(60deg) scale(1);
  }
}

@keyframes Loading {
  0% {
    transform: translateY(0rem);
    background-image: url("../../assets/images/Home/breakfast_icon.png");
  }

  10% {
    transform: translateY(3rem);
  }
  19% {
    transform: translateY(0rem);
  }
  20% {
    transform: translateY(0rem);
    background-image: url("../../assets/images/Home/flavor_icon.png");
  }

  30% {
    transform: translateY(3rem);
  }
  39% {
    transform: translateY(0rem);
  }
  40% {
    transform: translateY(0rem);
    background-image: url("../../assets/images/Home/hamburger_icon.png");
  }

  50% {
    transform: translateY(3rem);
  }
  59% {
    transform: translateY(0rem);
  }
  60% {
    transform: translateY(0rem);
    background-image: url("../../assets/images/Home/noodle_icon.png");
  }

  70% {
    transform: translateY(3rem);
  }
  79% {
    transform: translateY(0rem);
  }
  80% {
    transform: translateY(0rem);
    background-image: url("../../assets/images/Home/beverage_icon.png");
  }

  90% {
    transform: translateY(3rem);
  }
  99% {
    transform: translateY(0rem);
  }
  100% {
    transform: translateY(0rem);
    background-image: url("../../assets/images/Home/breakfast_icon.png");
  }
}
</style>

<template>
  <div class="loading-wrap">
    <div class="loading"></div>
    <div class="loading-shadow"></div>
  </div>
</template>

<script>
export default {
  name: 'CM-Loading',
}
</script>


