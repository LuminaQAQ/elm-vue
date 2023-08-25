<style lang="scss" scoped>
.main-body {
    padding: 3rem 0 0;

    position: absolute;
    z-index: 1099;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 3rem);

    background-color: #1b1e28;
}

.imgBox {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.muyuImg {
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.muyuImg img {
    width: 100%;
    user-select: none;

    // object-fit: cover;
    // transform: scale(0.10, 0.10);


}

.countNumber {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #ffff;
    margin-top: 2rem;
}

.click {
    animation: am ease 0.5s;
}

@keyframes am {
    0% {
        transform: scale(1, 1);
    }

    30% {
        transform: scale(0.90, 0.90);

    }

    60% {
        transform: scale(1.01, 1.01);

    }

    100% {
        transform: scale(1, 1);

    }
}

.spanText {
    position: absolute;
    right: -28px;
    top: 10px;
    color: #ffff;
    animation: am2 ease-out 1.5s;
    opacity: 0;
    z-index: 1000;
}



@keyframes am2 {
    from {
        transform: translateY(0);
        opacity: 1;

    }

    to {
        transform: translateY(-35px);
        opacity: 0;
    }
}
</style>

<script>
import Header from '../../../components/Header'
export default {
    name: 'My',
    components: { Header },
    data() {
        return {
            clickCount: 0,
            isbool: false,

        }
    },
    methods: {
        gotomuyu() {
            this.clickCount += 1;
            if (this.isbool == false) {
                // this.$refs.muyu.classList.remove("click")
                // void this.$refs.muyu.offsetWidth
                this.$refs.muyu.classList.add("click")
                this.gongde()
                this.isbool = true
            }

            setTimeout(() => {
                if (this.isbool == true) {
                    this.$refs.muyu.classList.remove("click")
                    this.isbool = false

                }
            }, 300)
            localStorage.setItem("clickCount", this.clickCount);
        },
        gongde() {
            let audio = new Audio();
            audio.src = require("../../../assets/images/happily/sound.mp3");
            audio.play();
        }
    },
    mounted() {
        const storedClickCount = localStorage.getItem("clickCount");
        if (storedClickCount) {
            this.clickCount = parseInt(storedClickCount);
        }
    }


}
</script>
<template>
    <div class="main-body">
        <Header title="娱乐" :isGoBack="true"></Header>
        <div class="countNumber">
            您的功德值:{{ clickCount }}
        </div>
        <div class="imgBox">

            <div class="muyuImg">
                <div class="spanText" v-show="isbool">
                    <span ref="spans">功德+1</span>
                </div>
                <img src="../../../assets/images/happily/muyu.png" alt="" ref="muyu" @click="gotomuyu">
            </div>
        </div>

    </div>
</template>
