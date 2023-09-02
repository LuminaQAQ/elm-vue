<template>
    <div class="main-body">
        <Header title="服务中心" :isGoBack="true"></Header>
        <div class="pages">
            <div class="headerBox">
                <img src="../../../assets/images/Serve/back.jpg" alt="" class="backImg">
                <div class="headerText">
                    <span>Hi，您好，智能小e为您服务!</span>
                </div>
                <div class="gonggao">
                    <van-notice-bar scrollable left-icon="volume-o" text="订单问题请联系客服"
                        style="margin-top: 0.5rem; border-radius: 4px;" @click="isboolShow" v-show="isbool" />
                </div>
                <section class="centerStyle">
                    <div class="gonggaoBox">
                        <div class="help">
                            <span>帮助中心</span>
                        </div>
                        <div class="helpData" v-for="(item, index) in helpData" :key="index">
                            <div style="position: relative;">
                                <span>{{ item.datas }}</span>
                                <span class="imgRightBox">
                                    <img src="../../../assets/images/Serve/icohuo.png" alt="">
                                </span>
                            </div>
                            <!-- <span></span> -->

                        </div>
                        <div class="helpbottom">

                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../../components/Header'
export default {
    name: "My",
    components: { Header },
    data() {
        return {
            helpData: [{
                datas: "我的订单超时了怎么办？"
            }, {
                datas: "订单一直没有骑士接单怎么办？"

            }, {
                datas: "骑士提前点击送达了怎么办？"
            }, {
                datas: "错送漏送餐品怎么办？"
            }, {
                datas: "怎么退单？"
            }, {
                datas: "怎么催单？"
            }],
            isbool: true
        }
    },
    methods: {
        isboolShow() {
            this.isbool = false
        }
    }
}
</script>
<style lang="scss" scoped>
.main-body {
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    position: absolute;
    z-index: 1099;
    top: 0px;
    left: 0px;
}

.headerBox {
    position: relative;
    width: 100%;
    height: 95%;
    background-color: var(--background-color);
}

.backImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
}

.pages {
    width: 100%;
    height: 100%;
}

.headerText {
    position: relative;
    color: #ffff;
    padding: 1rem 0rem 0rem 2rem;
}

.gonggao {
    margin-bottom: 16px;
    padding: 0px 16px;
}

.centerStyle {
    margin-bottom: 16px;
    padding: 0px 16px;
    position: relative;


}

.help {
    background: #ffff;
    padding: 0.5rem 0.3rem 0.5rem 0.3rem;
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid rgba(0, 0, 0, .06);
    font-weight: 800;
}

.helpData {
    background: #ffff;
    padding: 0.5rem 0.3rem 0.5rem 1rem;
    font-size: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, .06);
    display: flex;
    flex-direction: column;
    align-items: left;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.imgRightBox {
    position: absolute;
    width: 0.7rem;
    // right: 7.5rem;
    top: 2px;
}

.imgRightBox img {
    object-fit: cover;
    width: 100%;
}

.helpbottom {
    background: #ffff;
    width: 100%;
    padding: 1rem 0 1rem 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}
</style>