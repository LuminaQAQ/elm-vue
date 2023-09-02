<style lang="scss" scoped>
.main-body {
    padding: 3rem 0 4rem;

}

.backs {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: #f5f5f5;
}

.sendBox {
    display: flex;
    width: 100%;
    background: #f2f2f2;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.sendInputInfo {
    border: 0px;
    padding: 0.6rem 0 0.6rem 0.3rem;
    width: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

}

.sendInput {
    width: 70%;
    // margin: 0 auto;
}

.sendText {
    background: #75bbfb;
    border: 0px;
    color: #fff;
    font-size: 15px;
    height: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.sendInput {
    width: 80%;
    margin-left: 0.5rem;
}

.sendBtnBox {
    width: 20%;
    margin-right: 0.5rem;
}

.userImg {
    width: 2.5rem;
    margin-left: 1rem;
}

.userImg img {
    width: 100%;
}

.centerSend {
    overflow: auto;
    padding-bottom: 3rem;

}

.info {
    display: flex;
    align-items: center;

}

.infoText {
    background: #fff;
    width: 50%;
    margin-left: 0.5rem;
    padding: 0.3rem 0.3rem 1rem 0.3rem;
    margin-top: 1rem;
    border-radius: 4px;
    white-space: normal; // 允许换行
    word-break: break-word;
}

.infoRightText {
    background: #fff;
    border-radius: 4px;
    width: 50%;
    margin-right: 0.5rem;
    padding: 0.3rem 0.3rem 1.5rem 0.3rem;
    margin-top: 1rem;
    white-space: normal; // 允许换行
    word-break: break-word;
    margin-left: auto;
    position: relative;
}

.infoRight {
    display: flex;
    align-items: center;

}

.userImgRight {
    width: 2.5rem;
    margin-right: 1rem;
    // margin-left: 0.5rem;
}

.userImgRight img {
    width: 100%;
}

.cleardata {
    position: absolute;
    color: #75bbfb;
    font-size: 12px;
    bottom: 0px;
}
</style>

<template>
    <div class="backs">
        <div class="main-body">
            <Header title="聊天" :isGoBack="true"></Header>
            <div class="centerSend">
                <div class="info">
                    <div class="userImg">
                        <img src="../../../assets/logo.png" alt="">
                    </div>
                    <div class="infoText">
                        <div>您好我是商家</div>
                    </div>
                </div>

                <div class="infoRight" v-for="(item, index) in sendUserData" :key="index">
                    <div class="infoRightText" @click="deleteData(index)">
                        <div>{{ item }}</div>
                        <div class="cleardata">删除</div>
                    </div>
                    <div class="userImgRight">
                        <img src="../../../assets/logo.png" alt="">
                    </div>
                </div>
            </div>
            <div class="sendBox">
                <div class="sendInput">
                    <input type="text" class="sendInputInfo" ref="sendUserInfo" @keyup.enter="gotosend">
                </div>
                <div class="sendBtnBox">
                    <button class="sendText" @click="gotosend">发送</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../../components/Header'
import { Dialog } from 'vant';
import { Notify } from 'vant';
export default {
    name: 'Message',
    components: { Header },
    data() {
        return {
            sendUserData: [],
        }
    },
    methods: {
        gotosend() {
            const sendData = this.$refs.sendUserInfo.value
            this.sendUserData.push(sendData);
            // 将数据转化为字符串
            localStorage.setItem("userSendData", JSON.stringify(this.sendUserData));
            this.$refs.sendUserInfo.value = ""
        },
        // 清除数据
        clearTime() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1; // 注意月份从0开始，需要加1
            const currentDay = currentDate.getDate();
            const currentHour = currentDate.getHours();
            const currentMinute = currentDate.getMinutes();
            const currentSecond = currentDate.getSeconds();
            // console.log();
            console.log(currentYear + "-" + currentMonth + "-" + currentDay + " " + currentHour + ":" + currentMinute + ":" + currentSecond);
        },
        // 清除聊天数据
        deleteData(index) {
            Dialog.confirm({
                title: '提示',
                message: '确认删除这条消息？',
            })
                .then(() => {
                    if (index >= 0 && index < this.sendUserData.length) {
                        this.sendUserData.splice(index, 1);
                        // 更新本地存储的数据
                        localStorage.setItem("userSendData", JSON.stringify(this.sendUserData));
                    }
                })
                .catch(() => {
                    // 取消删除
                });
        },

    },
    mounted() {
        // 读取游览器中字符串数据prase
        const storedData = localStorage.getItem("userSendData");
        if (storedData) {
            // 将字符串转化成数组
            this.sendUserData = JSON.parse(storedData);
        }
        this.clearTime()

    }
}
</script>


