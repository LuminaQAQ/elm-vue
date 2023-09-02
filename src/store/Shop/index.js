const Shop = {
    namespaced: true,
    state: {
        shopInfo: '',
        shopCart: window.localStorage.getItem('ShopCart')
            ? JSON.parse(window.localStorage.getItem('ShopCart'))
            : window.localStorage.setItem('ShopCart', JSON.stringify([])),
        orderShopCart: '',
        deliveryFee: '',
    },
    getters: {
        GetShopInfo(state) {
            return state.shopInfo;
        },
        GetShopCart(state) {
            return state.shopCart;
        },
        GetDeliveryFee(state) {
            return state.deliveryFee;
        },
        ComputeShopCartPrice(state) {
            return function (shopId) {
                let sum = 0;

                try {
                    if (state.shopCart.length > 0) {
                        state.shopCart.filter(item => {
                            if (item.shopId == shopId) {
                                item.shopCart.filter(dItem => {
                                    sum += dItem.price * dItem.num
                                })
                            }
                        })
                    }
                    return sum;
                } catch {
                    return sum;
                }

            }
        },
        ComputeShopCartLength(state) {
            return function (shopId) {
                let len = 0;

                try {
                    if (state.shopCart.length > 0) {
                        state.shopCart.filter(item => {
                            if (item.shopId == shopId) {
                                item.shopCart.filter(dItem => {
                                    len += dItem.num;
                                })
                            }
                        })
                    }

                    return len;
                } catch {
                    return len;
                }


            }
        },
        GetOrderShopCart(state) {
            return state.orderShopCart;
        }
    },
    actions: {
        commitThisShopId(context, value) {
            context.commit('GetThisShop', value);
        },
        commitAddShopCart(context, value) {
            context.commit('AddToCart', value);
        },
        commitMinusToCart(context, value) {
            context.commit('MinusToCart', value);
        },
        commitThisShopCart(context, value) {
            context.commit('GetThisShopCart', value);
        },
        commitRemoveShopCart(context, value) {
            context.commit('RemoveShopCart', value);
        }
    },
    mutations: {
        ShopInitShopInfo(state, value) {
            const defaultInfo = [
                {
                    "shopId": "001",
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了1碗面",
                    "isBrand": true,
                    "notice": "欢迎光临，用餐高峰请提前下单，谢谢",
                    "deliver": "商家",
                    "deliverFee": 5,
                    "rate": 5.1,
                    "option": [
                        "吃的",
                        "不是吃的",
                        "喝的",
                        "不是喝的"
                    ],
                    "optionDetails": {
                        "吃的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "002",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                        ],
                        "不是吃的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "002",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                        ],
                        "喝的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "002",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                        ],
                        "不是喝的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "002",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "001",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "001",
                            },
                        ],
                    }
                },
                {
                    "shopId": "002",
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了2碗面",
                    "isBrand": true,
                    "notice": "欢迎光临，用餐高峰请提前下单，谢谢",
                    "deliver": "商家",
                    "deliverFee": 5,
                    "rate": 5.1,
                    "option": [
                        "吃的",
                        "不是吃的",
                        "喝的",
                        "不是喝的"
                    ],
                    "optionDetails": {
                        "吃的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "002",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                        ],
                        "不是吃的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "002",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                        ],
                        "喝的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "002",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                        ],
                        "不是喝的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "002",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "002",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "002",
                            },
                        ],
                    }
                },
                {
                    "shopId": "003",
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了3碗面",
                    "isBrand": true,
                    "notice": "欢迎光临，用餐高峰请提前下单，谢谢",
                    "deliver": "商家",
                    "deliverFee": 5,
                    "rate": 5.1,
                    "option": [
                        "吃的",
                        "不是吃的",
                        "喝的",
                        "不是喝的"
                    ],
                    "optionDetails": {
                        "吃的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "002",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                        ],
                        "不是吃的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                        ],
                        "喝的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "003",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                        ],
                        "不是喝的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "003",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "003",
                            },
                        ],
                    }
                },
                {
                    "shopId": "004",
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了4碗面",
                    "isBrand": true,
                    "notice": "欢迎光临，用餐高峰请提前下单，谢谢",
                    "deliver": "商家",
                    "deliverFee": 5,
                    "rate": 5.1,
                    "option": [
                        "吃的",
                        "不是吃的",
                        "喝的",
                        "不是喝的"
                    ],
                    "optionDetails": {
                        "吃的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "002",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                        ],
                        "不是吃的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                        ],
                        "喝的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                        ],
                        "不是喝的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "004",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "004",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "004",
                            },
                        ],
                    }
                },
                {
                    "shopId": "005",
                    "imgSrc": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F4d6645e4-4ed9-48fc-8873-d94439944750%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694791231&t=94f2d38ecb2e5576fbad810021129105",
                    "shopName": "叫了5碗面",
                    "isBrand": true,
                    "notice": "欢迎光临，用餐高峰请提前下单，谢谢",
                    "deliver": "商家",
                    "deliverFee": 5,
                    "rate": 5.1,
                    "option": [
                        "吃的",
                        "不是吃的",
                        "喝的",
                        "不是喝的"
                    ],
                    "optionDetails": {
                        "吃的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "002",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "003",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "004",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                        ],
                        "不是吃的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                        ],
                        "喝的": [
                            {
                                "goodsId": "001",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "006",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                        ],
                        "不是喝的": [
                            {
                                "goodsId": "001",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "005",
                                "title": "不可食用的可食用色素",
                                "img": "/assets/images/Shop/GoodsImg2.jpg",
                                "price": 200,
                                "monthSales": 321,
                                "shopId": "005",
                            },
                            {
                                "goodsId": "006",
                                "title": "可食用的不可食用色素",
                                "img": "/assets/images/Shop/GoodsImg1.jpg",
                                "price": 100,
                                "monthSales": 123,
                                "shopId": "005",
                            },
                        ],
                    }
                },
            ];

            const info = window.localStorage.getItem('shopDetails')
                ? JSON.parse(window.localStorage.getItem('shopDetails'))
                : window.localStorage.setItem('shopDetails', JSON.stringify(defaultInfo));


            state.shopInfo = info;
        },
        GetThisShop(state, value) {
            let ajax = JSON.parse(window.localStorage.getItem('shopDetails'));

            state.shopInfo = ajax.filter(item => {
                return item.shopId === value.shopId;
            })[0]
            state.deliveryFee = state.shopInfo.deliverFee;
        },
        AddToCart(state, value) {
            if (!state.shopCart) state.shopCart = [];
            if (!value.cart.num && value.cart.num != 0) value.cart.num = 1;

            let json = JSON.parse(JSON.stringify(value));

            let shopId = json.shopId;
            let goodsId = json.cart.goodsId;

            if (state.shopCart.length == 0) {
                const data = {
                    shopId,
                    shopCart: [],
                }

                state.shopCart.push(data);
                state.shopCart[0].shopCart.push(json.cart)
            } else {
                let flag = true;

                state.shopCart.filter(item => {
                    if (item.shopId == shopId) {
                        let deepFlag = true;
                        item.shopCart.filter(dItem => {
                            if (dItem.goodsId == goodsId) {
                                dItem.num++;
                                flag = false;
                                deepFlag = false;
                            }
                        })

                        if (deepFlag) {
                            item.shopCart.push(json.cart);
                            flag = false;
                        }
                    }
                })

                if (flag) {
                    const data = {
                        shopId,
                        shopCart: [],
                    }
                    data.shopCart.push(json.cart);
                    state.shopCart.push(data);
                }
            }

            state.shopInfo.update = false;
            state.shopInfo.update = true;

            window.localStorage.setItem('ShopCart', JSON.stringify(state.shopCart));
        },
        MinusToCart(state, value) {
            let json = JSON.parse(JSON.stringify(value));

            let shopId = json.shopId;
            let goodsId = json.cart.goodsId;

            state.shopCart.filter(item => {
                if (item.shopId == shopId) {

                    for (let i = 0, dItem; dItem = item.shopCart[i++];) {
                        if (dItem.goodsId == goodsId && dItem.num > 0) {

                            if (--dItem.num == 0) {
                                item.shopCart.splice(i - 1, 1);
                            }
                        }
                    }
                }
            })

            state.shopInfo.update = false;
            state.shopInfo.update = true;

            window.localStorage.setItem('ShopCart', JSON.stringify(state.shopCart));
        },
        GetThisShopCart(state, value) {
            state.shopCart.filter(item => {
                if (item.shopId == value) {
                    state.orderShopCart = item.shopCart;
                }
            })
        },
        RemoveShopCart(state, value) {
            for (let i = 0, info; info = state.shopCart[i++];) {
                if (info.shopId == value) {
                    try { state.shopCart.splice(i - 1, 1); } catch { }

                }
            }

            window.localStorage.setItem('ShopCart', JSON.stringify(state.shopCart));
        }
    },
}

export default Shop;