
<style lang="scss" scoped>

.main-bodys {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 3rem));
    z-index: 2000;
}

.centerStyle {
    display: flex;
    align-items: center;
    justify-content: center;
}

.loadingText {
    font-family: 'Poppins', sans-serif;
    position: relative;
    font-size: 2rem;
    color: #f5f5f5;
    -webkit-text-stroke: 0.2rem #fafafa;
}

.loadingText::before {
    content: 'Loading...';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #02b6fd;
    -webkit-text-stroke: 0rem #fafafa;
    border-right: 2px solid #02b6fd;
}

.loadingText::before {
    width: 0%;
    overflow: hidden;
}

@keyframes animate {
    0% {
        width: 0%;
    }

    90% {
        width: 100%;
    }

    100% {
        width: 100%;
    }
}

.loadingText::before {
    animation: animate 1.5s linear infinite alternate;
}
</style>
<template>
    <div class="main-bodys">
        <div class="centerStyle">
            <h2 class="loadingText">Loading...</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: "Orderloading",
}
</script>