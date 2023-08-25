<template>
     <div class="main-body">
        <Header title="我的劵包" :isGoBack="true"></Header>
     </div>
</template>
<script>
import Header from '../../../components/Header'
export default {
    name: 'My',
    components: { Header },

}
</script>

<style lang="scss" scoped>
.main-body {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1099;
    background: #ffff;
    width: 100%;
    height: 100%;
}
</style>