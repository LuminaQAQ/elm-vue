<template>
    <div class="main-body">
        <Header title="我的劵包" :isGoBack="true"></Header>

        <div class="heard">
            <div class="heardBox">
                <div class="allText" v-for="(item, index) in tabData" :key="index" @click="tabChange(index)">
                    <span>{{ item.datas }}</span>
                </div>
                <div class="lines" ref="line"></div>
            </div>
        </div>
        <div class="imgBoxFalse" v-show="cardimgIsbool">
            <div class="centerImg">
                <img :src="imgsrc" alt="">
            </div>
            <div class="cardtext">
                <div class="toptext">
                    <span>没有可用劵</span>
                </div>
                <div class="bottomtext">
                    <span>诶嘿，居然一张券都没有</span>
                </div>
            </div>
        </div>
        <div class="indexOf" v-show="isbools">
            <div class="filterBox">
                <div class="filter">
                    <div class="spanBox" @click="sortdata">
                        <span style="width: 100px; display: block;">{{ textData }}</span>
                    </div>
                    <div class="allLx" @click="allType">
                        <span >{{ textType }}</span>
                    </div>
                    <div class="allLxs">
                        <span>历史红包</span>
                    </div>
                </div>
            </div>



            <div class="centerStyle">
                <div class="back" v-show="isboolShow" @click="isboolHide">
                    <div class="itemsBox">
                        <div class="itemsTab" v-for="(item, index) in  itemsTabData " :key="index"
                            @click="changeClick(index)">
                            <span :class="{ blue: item.colorchange }">按{{ item.tabitems }}</span>
                        </div>
                    </div>
                </div>
                <div class="backs" v-show="isboolFalse" @click="isboolhidden">
                    <div class="itemsBox">
                        <div class="itemsTab" v-for="(item, index) in allTypeData" :key="index"
                            @click="changeClicks(index)">
                            <span :class="{ blue: item.colorchange }">{{ item.typedata }}</span>
                        </div>
                    </div>
                </div>
                <div class="imgBoxFalse" v-show="cardimgIsbools">
                    <div class="centerImg">
                        <img :src="imgsrc" alt="">
                    </div>
                    <div class="cardtext">
                        <div class="toptext">
                            <span>没有可用劵</span>
                        </div>
                        <div class="bottomtext">
                            <span>诶嘿，居然一张券都没有</span>
                        </div>
                    </div>
                </div>
                <div class="cards" v-for="( item, index ) in  getdata " :key="index">
                    <div class="itemBox">
                        <div class="imgBox">
                            <img :src="require(`@/${item.cardImg}`)" alt="">
                        </div>
                        <div class="rightBox">
                            <div class="topText">
                                <span>{{ item.cardstate }}</span>
                            </div>
                            <div class="bottomBox">
                                <span>{{ item.cardTime }} 到期</span>
                            </div>
                        </div>
                        <div class="moneyBox">
                            <div class="money">
                                <span style="color: #ff4e36;font-weight: 700;">￥</span>
                                <span class="textStyle">{{ item.cardmoney }}</span>
                            </div>
                            <div class="num">
                                <span>满{{ item.cardSum }}可用</span>
                            </div>
                        </div>
                    </div>
                    <div class="opencard">
                        <div class="shopposen">
                            <!-- <span></span> -->
                            <div class="righttext">
                                <span>{{ item.cardName }}</span>
                            </div>
                            <div class="btnBox">
                                <button class="goto">去使用</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div></div> -->
                <div class="konhgbai">

                </div>
            </div>

        </div>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Empty } from 'vant';
import Header from '../../../components/Header'
export default {
    name: 'My',
    components: { Header },
    data() {
        return {
            tabData: [{
                datas: "红包"
            }, {
                datas: "劵"
            }],
            colors: "rgb(2, 182, 253)",
            isbools: true,
            itemsTabData: [
                {
                    tabitems: "默认排序",
                    colorchange: true,

                }, {
                    tabitems: "金额排序(升序)",
                    colorchange: false,

                }, {
                    tabitems: "金额排序(降序)",
                    colorchange: false,

                }],

            isboolShow: false,
            textData: "默认排序",
            getdata: [],
            originalData: [],
            cardimgIsbool: false,
            imgsrc: require("../../../assets/images/Myself/cards.png"),
            allTypeData: [
                {
                    typedata: "全部类型",
                    colorchange: true,
                },
                {
                    typedata: "平台红包",
                    colorchange: false,
                },
                {
                    typedata: "店铺红包",
                    colorchange: false,

                },
                {
                    typedata: "商品红包",
                    colorchange: false,
                },
                {
                    typedata: "配送红包",
                    colorchange: false,

                },
                {
                    typedata: "跑腿红包",
                    colorchange: false,
                },
            ],
            textType: "全部类型",
            isboolFalse: false,
            cardimgIsbools: false,
            matchedItems: [],
            isFirst: true,

            csdata: []

        }
    },
    methods: {
        tabChange(index) {
            // tab切换
            if (index == 1) {
                this.$refs.line.style = "left:4.5rem;"
                this.isbools = false
                this.cardimgIsbool = true

                this.isboolFalse = false
                this.isboolShow = false
            }
            if (index == 0) {
                this.$refs.line.style = "left:1.4rem;"
                this.isbools = true
                this.cardimgIsbool = false
            }
        },
        sortdata() {
            this.isboolShow = true
            this.isboolFalse = false


        },
        isboolHide() {
            this.isboolShow = false

        },
        changeClicks(index) {
            this.allTypeData.forEach((item, i) => {
                item.colorchange = i === index;
            });
            for (let i = 0; i < this.allTypeData.length; i++) {
                if (i == index) {
                    this.textType = this.allTypeData[index].typedata
                }
            }

            const filters = [];
            if (this.textType !== "全部类型") {
                filters.push(item => item.cardName === this.textType);
            }
            // 添加其他筛选条件

            if (filters.length > 0) {
                this.getdata = [...this.originalData].filter(item => filters.every(filter => filter(item)));
            } else {
                this.getdata = [...this.originalData];
            }

            this.cardimgIsbools = this.getdata.length === 0;
        },
        // 排序
        changeClick(index) {
            this.itemsTabData.forEach((item, i) => {
                item.colorchange = i === index;
            });
            for (let i = 0; i < this.itemsTabData.length; i++) {
                if (i == index) {
                    this.textData = this.itemsTabData[index].tabitems
                }
            }

            if (index == 0) { // 默认排序
                this.getdata = [...this.originalData];
            }
            if (index == 1) { // 金额排序（升序）
                this.getdata = [...this.getdata].sort((a, b) => a.cardmoney - b.cardmoney);
            }
            if (index == 2) { // 时间排序
                this.getdata = [...this.getdata].sort((a, b) => b.cardmoney - a.cardmoney);
            }
        },
        // ...
        // 分类(店铺)

        allType() {
            this.isboolFalse = true
            this.isboolShow = false

        },
        isboolhidden() {
            this.isboolFalse = false
        }
    },
    // computed
    computed: {
        ...mapGetters("Vipdata", ['getvipData'])

    },
    mounted() {
        for (let i = 0; i < this.itemsTabData.length; i++) {

        }

        this.getdata = this.getvipData
        this.originalData = [...this.getvipData];
        // 是使用扩展运算符 ...来复制数组 this.getvipData 的内容，并创建一个新的数组。通过这种方式，你可以复制 this.getvipData 数组中的元素原数据不会影响
    }
}
</script>

<style lang="scss" scoped>
.main-body {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1099;
    background: #f5f5f5;
    width: 100%;
    height: 100%;


}

.heard {
    width: 100%;
    background: #ffff;

}

.heardBox {
    display: flex;
    padding: 1rem 0.5rem 1rem 1rem;
    position: relative;
    font-weight: 700;
}

.allText {
    margin-right: 1.5rem;
}

.lines {
    position: absolute;
    top: 2.7rem;
    left: 1.4rem;
    box-sizing: border-box;
    width: 2.4rem;
    height: 0.5rem;
    overflow: hidden;
    background-color: #02b6fd;
    border-radius: 0.25rem;
    transform: scale(.5);
    transform-origin: top left;
    transition: all 0.3s;
}

.filter {
    display: flex;
    padding: 0.6rem;
    color: #989898;
    font-size: 14px;
}

.filterBox {
    background: #ffff;
}

.allLx {
    margin-left: 1rem;
}

.allLxs {
    margin-left: auto;
}

.centerStyle {
    flex: 1 1 0%;
    overflow: scroll;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background: rgb(245, 245, 245);
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 90vh;
    // margin-bottom:10rem;
}

.itemBox {
    display: flex;
    background: #ffff;
    padding: 0.8rem;
    margin-top: 0.5rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;


}

.imgBox {
    width: 3rem;
}

.imgBox img {
    width: 100%;
    height: 100%;
}

.rightBox {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    max-height: 3.5rem;
}

.bottomBox {
    color: #e0e0e0;
    font-size: 12px;
    margin-top: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
}

.topText {
    text-align: left;
    font-size: 0.875rem;
    font-weight: 500;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1rem;
    position: relative;
    margin-top: 0.3rem;
    color: rgba(0, 0, 0, 0.9);
}

.moneyBox {
    margin-left: auto;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
}

.textStyle {
    font-size: 1.5rem;
    color: #ff4e36;
    font-weight: 700;
}

.num {
    margin-top: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.opencard {
    background: #ffff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.shopposen {
    display: flex;
    padding: 0.8rem 0.5rem 0.8rem 0.5rem;
    align-items: center;
}

.btnBox {}

.righttext {
    font-size: 0.75rem;
    color: #7f7f7f;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 1rem;
    word-break: break-all;
    margin-left: 0.5rem;
}

.goto {
    display: flex;
    height: 1.5rem;
    width: 4rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    border: 0px;
    font-size: 13px;
    padding: 0.2rem;
    background-image: linear-gradient(90deg, rgb(255, 114, 71) 0%, rgb(255, 75, 51) 100%);
}

.btnBox {
    margin-left: auto;
    color: #ffff;
    margin-right: 0.8rem;

}

.back {
    z-index: 10001;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.75);
    left: 0;
    width: 100%;
    height: 90%;
}

.itemsBox {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.itemsTab {
    background: #ffff;
    display: flex;
    font-size: 13px;
    padding: 1rem 0.5rem 0.8rem 0.5rem;
    color: rgba(0, 0, 0, 0.6);
}

.blue {
    color: rgb(2, 182, 253);
}

// .custom-image {}
.imgBoxFalse {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 50%;
}

.centerImg {
    width: 15rem;


}

.centerImg img {
    width: 100%;
    object-fit: cover;
}

.toptext {
    text-align: center;
    font-size: 16px;
    color: #b8b8b8;
    font-weight: 700;
}

.bottomtext {
    margin-top: 0.5rem;
    color: #bdbdbd;
    font-size: 14px;
}

.backs {

    z-index: 10001;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.75);
    left: 0;
    width: 100%;
    height: 90%;

}

.konhgbai {
    width: 100%;
    padding:5rem 0rem 5rem 0rem;
}
</style>