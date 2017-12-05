<template>
    <div class="goods">
        <div class="menu-wrapper">
            <ul>
                <li v-for="item in goods" class="menu-item">
                    <span class="text">
                        <classMap class="icon-text" v-show="item.type>0" :num="item.type"></classMap>
                        <span class="item-text">{{ item.name }}</span>
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper">
            <ul>
                <li v-for="item in goods" class="food-list">
                    <div class="foods-title">{{ item.name }}</div>
                    <ul>
                        <li v-for="food in goods[0].foods" class="food-item">
                            <div class="food-icon">
                                <img :src="food.icon" width="57" height="57">
                            </div>
                            <div class="content">
                                <div class="food-name">{{ food.name }}</div>
                                <div class="food-des">{{ food.description }}</div>
                                <div class="sales">
                                    <span>月售{{ food.sellCount }}份</span>
                                    <span>好评率{{ food.rating }}%</span>
                                </div>
                                <div class="price">
                                    <span class="new-price">￥{{ food.price }}</span>
                                    <span class="old-price" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import classMap from "../classMap/classMap.vue"

    export default{
        name: 'goods',
        props: {
            seller: {
                type: Object
            }
        },
        data(){
            return {
                "goods": [
                    {
                        "name": "热销榜",
                        "type": -1,
                        "foods": [
                            {
                                "name": "皮蛋瘦肉粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 229,
                                "rating": 100,
                                "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "很喜欢的粥",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "扁豆焖面",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 188,
                                "rating": 96,
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "info": "",
                                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "葱花饼",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 124,
                                "rating": 85,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "没啥味道",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 1,
                                        "text": "很一般啊",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "牛肉馅饼",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 114,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "难吃不推荐",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "招牌猪肉白菜锅贴/10个",
                                "price": 17,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 101,
                                "rating": 78,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "不脆,不好吃",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "南瓜粥",
                                "price": 9,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 91,
                                "rating": 100,
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红豆薏米美肤粥",
                                "price": 12,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 86,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "八宝酱菜",
                                "price": 4,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 84,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红枣山药糙米粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 81,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "糊塌子",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 80,
                                "rating": 93,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "单人精彩套餐",
                        "type": 2,
                        "foods": [
                            {
                                "name": "红枣山药粥套餐",
                                "price": 29,
                                "oldPrice": 36,
                                "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                                "sellCount": 17,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "冰爽饮品限时特惠",
                        "type": 1,
                        "foods": [
                            {
                                "name": "VC无限橙果汁",
                                "price": 8,
                                "oldPrice": 10,
                                "description": "",
                                "sellCount": 15,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "还可以",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "精选热菜",
                        "type": -1,
                        "foods": [
                            {
                                "name": "娃娃菜炖豆腐",
                                "price": 17,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 43,
                                "rating": 92,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "菜量还可以,味道还可以",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "手撕包菜",
                                "price": 16,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 29,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "香酥黄金鱼/3条",
                                "price": 11,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 15,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "爽口凉菜",
                        "type": -1,
                        "foods": [
                            {
                                "name": "八宝酱菜",
                                "price": 4,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 84,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "拍黄瓜",
                                "price": 9,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 28,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "精选套餐",
                        "type": -1,
                        "foods": [
                            {
                                "name": "红豆薏米粥套餐",
                                "price": 37,
                                "oldPrice": "",
                                "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                                "sellCount": 3,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "皮蛋瘦肉粥套餐",
                                "price": 31,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 12,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "果拼果汁",
                        "type": -1,
                        "foods": [
                            {
                                "name": "蜜瓜圣女萝莉杯",
                                "price": 6,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 1,
                                "rating": "",
                                "info": "",
                                "ratings": [],
                                "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "加多宝",
                                "price": 6,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 7,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "VC无限橙果汁",
                                "price": 8,
                                "oldPrice": 10,
                                "description": "",
                                "sellCount": 15,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "还可以",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "小吃主食",
                        "type": -1,
                        "foods": [
                            {
                                "name": "扁豆焖面",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 188,
                                "rating": 96,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "葱花饼",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 124,
                                "rating": 85,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "没啥味道",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 1,
                                        "text": "很一般啊",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "牛肉馅饼",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 114,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "难吃不推荐",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "招牌猪肉白菜锅贴/10个",
                                "price": 17,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 101,
                                "rating": 78,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "不脆,不好吃",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "糊塌子",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 80,
                                "rating": 93,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "特色粥品",
                        "type": -1,
                        "foods": [
                            {
                                "name": "皮蛋瘦肉粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 229,
                                "rating": 100,
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "很喜欢的粥",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "南瓜粥",
                                "price": 9,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 91,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红豆薏米美肤粥",
                                "price": 12,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 86,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红枣山药糙米粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 81,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "鲜蔬菌菇粥",
                                "price": 11,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 56,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": ""
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "田园蔬菜粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 33,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    }
                ],
            }
        },
        components: {
            classMap
        }
    }
</script>

<style>
    .goods {
        position: absolute;
        display: flex;
        top: 175px;
        bottom: 47px;
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .menu-wrapper {
        flex: 0 0 80px;
        width: 80px;
        background: #f3f5f7;
    }

    .menu-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 54px;
        width: 80px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }

    .text {

    }

    .foods-wrapper {
        width: calc(100% - 80px);
    }

    .icon-text {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-repeat: no-repeat;
        vertical-align: top;
    }

    .item-text {
        display: inline;
        color: rgba(9, 8, 8, 0.94);
        font-size: 12px;
        font-weight: 200;
        line-height: 12px;
        vertical-align: top;
    }

    .food-item {
        display: flex;
        margin: 18px 18px 0 18px;
        padding-bottom: 18px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }

    .food-item:last-child{
        border-bottom: hidden;
    }

    .foods-title {
        padding-left: 14px;
        height: 26px;
        background-color: #f3f5f7;
        font-size: 12px;
        line-height: 26px;
        color: rgb(147, 153, 159);
        border-left: 2px solid #d9dde1;
    }

    .food-name {
        font-size: 12px;
        line-height: 14px;
        padding: 2px 0 8px 0;
        color: rgb(7, 17, 27);
    }

    .food-des {
        margin-bottom: 8px;
        color: rgb(147, 153, 159);
        font-size: 10px;
        line-height: 10px;
    }

    .sales{
        color: rgb(147, 153, 159);
        font-size: 10px;
        line-height: 10px;
        padding-right:12px;
    }

    .price{
        font-weight: 700;
        line-height: 24px;
    }

    .new-price{
        margin-right: 8px;
        font-size: 14px;
        color: rgb(240,20,20);
    }

    .old-price{
        text-decoration: line-through;
        font-size: 10px;
        color: rgb(147, 153, 159);
    }

    .food-icon {
        flex: 0 0 57px;
    }

    .content {
    }
</style>