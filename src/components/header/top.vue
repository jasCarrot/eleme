<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <div class="brand"><img src="brand@2x.png"> </div>
                    <div class="name">{{ seller.name }}</div>
                </div>
                <div class="supports">
                    <div class="description">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
                    <div class="supports-description">{{ seller.supports[0].description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'top',
        data() {
            return {
                "seller": {
                    "name": "粥品香坊（回龙观）",
                    "description": "蜂鸟专送",
                    "deliveryTime": 38,
                    "score": 4.2,
                    "serviceScore": 4.1,
                    "foodScore": 4.3,
                    "rankRate": 69.2,
                    "minPrice": 20,
                    "deliveryPrice": 4,
                    "ratingCount": 24,
                    "sellCount": 90,
                    "bulletin": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
                    "supports": [
                        {
                            "type": 0,
                            "description": "在线支付满28减5"
                        },
                        {
                            "type": 1,
                            "description": "VC无限橙果汁全场8折"
                        },
                        {
                            "type": 2,
                            "description": "单人精彩套餐"
                        },
                        {
                            "type": 3,
                            "description": "该商家支持发票,请下单写好发票抬头"
                        },
                        {
                            "type": 4,
                            "description": "已加入“外卖保”计划,食品安全保障"
                        }
                    ],
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
                    "pics": [
                        "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
                        "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
                        "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
                        "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
                    ],
                    "infos": [
                        "该商家支持发票,请下单写好发票抬头",
                        "品类:其他菜系,包子粥店",
                        "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
                        "营业时间:10:00-20:30"
                    ]
                }
            }
        }
    }
</script>

<style>
    .header {
        display: flex;
        color: white;
        background-color: #7e8c8d;
    }

    .content-wrapper {
        display: flex;
        justify-content: flex-start;
        padding: 24px 12px 18px 24px;
    }

    .content {
        padding-left: 16px;
    }

    .title {
        display: flex;
        justify-content: flex-start;
    }

    .brand {
        margin: 2px 0 8px 0;
        width: 30px;
        height: 18px;
        /*background-image: url("brand@2x.png");*/
    }

    .name {
        padding-top: 2px;
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;
    }

    .description {
        padding-top: 8px;
        font-size: 12px;
        font-weight: 100;
        line-height: 12px;
    }

    .supports-description {
        padding-top: 10px;
        font-size: 10px;
        font-weight: 100;
        line-height: 12px;
    }
</style>