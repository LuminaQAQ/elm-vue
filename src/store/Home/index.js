
const Home = {
    namespaced: true,
    state: {
        shopInfo: '',
    },
    getters: {
        GetShopInfo(state) {
            return state.shopInfo;
        }
    },
    actions: {
        commitShopInfo(context, value) {
            context.commit('SetShopInfo', value);
        },
    },
    mutations: {
        HomeInitShopInfo(state, value) {
            const defaultInfo = [
                {
                    "shopId": "001",
                    "isbrand": true,
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了1碗面",
                    "rate": 5.1,
                    "sale": 0,
                    "distance": 33,
                    "time": 50,
                    "fee": 15,
                    "review": [
                        "这家店很好吃!",
                        "精选品牌"
                    ],
                    "rank": "国区内推排行榜"
                },
                {
                    "shopId": "002",
                    "isbrand": true,
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了2碗面",
                    "rate": 5.1,
                    "sale": 0,
                    "distance": 33,
                    "time": 50,
                    "fee": 15,
                    "review": [
                        "这家店不好吃!",
                        "精选品牌"
                    ],
                    "rank": "国区内推排行榜"
                },
                {
                    "shopId": "003",
                    "isbrand": true,
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了3碗面",
                    "rate": 5.1,
                    "sale": 0,
                    "distance": 33,
                    "time": 50,
                    "fee": 15,
                    "review": [
                        "这家店不好吃!",
                        "精选品牌"
                    ],
                    "rank": "国区内推排行榜"
                },
                {
                    "shopId": "004",
                    "isbrand": true,
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了4碗面",
                    "rate": 5.1,
                    "sale": 0,
                    "distance": 33,
                    "time": 50,
                    "fee": 15,
                    "review": [
                        "这家店不好吃!",
                        "精选品牌"
                    ],
                    "rank": "国区内推排行榜"
                },
                {
                    "shopId": "005",
                    "isbrand": true,
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了5碗面",
                    "rate": 5.1,
                    "sale": 0,
                    "distance": 33,
                    "time": 50,
                    "fee": 15,
                    "review": [
                        "这家店不好吃!",
                        "精选品牌"
                    ],
                    "rank": "国区内推排行榜"
                },
                {
                    "shopId": "006",
                    "isbrand": true,
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了6碗面",
                    "rate": 5.1,
                    "sale": 0,
                    "distance": 33,
                    "time": 50,
                    "fee": 15,
                    "review": [
                        "这家店不好吃!",
                        "精选品牌"
                    ],
                    "rank": "国区内推排行榜"
                },
                {
                    "shopId": "007",
                    "isbrand": true,
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了7碗面",
                    "rate": 5.1,
                    "sale": 0,
                    "distance": 33,
                    "time": 50,
                    "fee": 15,
                    "review": [
                        "这家店不好吃!",
                        "精选品牌"
                    ],
                    "rank": "国区内推排行榜"
                },
                {
                    "shopId": "008",
                    "isbrand": true,
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了8碗面",
                    "rate": 5.1,
                    "sale": 0,
                    "distance": 33,
                    "time": 50,
                    "fee": 15,
                    "review": [
                        "这家店不好吃!",
                        "精选品牌"
                    ],
                    "rank": "国区内推排行榜"
                }
            ];

            let info = window.localStorage.getItem('shopInfo')
                ? JSON.parse(window.localStorage.getItem('shopInfo'))
                : window.localStorage.setItem('shopInfo', JSON.stringify(defaultInfo));

            state.shopInfo = info || defaultInfo;
        },
    },
}

export default Home;