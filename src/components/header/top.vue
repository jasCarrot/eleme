<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <div class="brand"></div>
                    <div class="name">{{ seller.name }}</div>
                </div>
                <div class="description">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
                <div class="supports">
                    <div class="icon" :class="classMap[seller.supports[0].type]"></div>
                    <div class="supports-description">{{ seller.supports[0].description }}</div>
                </div>
            </div>
            <div class="supports-count" @click="showMe">
                <span class="active-count">{{ seller.supports.length }}个</span>
                <span class="icon-arrow-right"></span>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <span class="bulletin-icon"></span>
            <span class="bulletin-text">{{ seller.bulletin }}</span>
            <span class="icon-arrow-right"></span>
        </div>
        <div class="bg-header">
            <img width="100%" height="100%" :src="seller.avatar">
        </div>
        <div v-show="showMea" class="detail">
            <div class="detail-wrapper">
                <div class="detail-con fix"></div>
            </div>
            <div class="detail-foot">
                <div class="icon-close"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'top',
        data() {
            return {
                showMea: false,
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
        },
        methods: {
            showMe() {
                this.showMea =! this.showMea;
            }
        },
        created() {
            this.classMap = [ 'decrease', 'discount', 'special', 'invoice', 'guarantee']
        }
    }
</script>

<style>
    .header {
        position: relative;
        color: white;
        background-color: rgba(7, 17, 27, 0.2);
        overflow: hidden;
    }

    .content-wrapper {
        position: relative;
        display: flex;
        justify-content: flex-start;
        padding: 24px 12px 18px 24px;
    }

    .avatar > img {
        border-radius: 4px;
    }

    .content {
        margin-left: 16px;
    }

    .title {
        display: flex;
        justify-content: flex-start;
    }

    .brand {
        margin: 2px 6px 0 0;
        width: 30px;
        height: 18px;
        background-image: url("brand@2x.png");
        background-size: 30px 18px;
    }

    .name {
        margin-top: 2px;
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;
    }

    .description {
        margin-top: 8px;
        font-size: 12px;
        font-weight: 200;
        line-height: 12px;
    }

    .supports {
        display: flex;
        justify-content: flex-start;
        margin-top: 10px;
        font-size: 10px;
        font-weight: 200;
    }

    .supports-description {
        padding-top: 1px;
        /*line-height: 12px;*/
    }

    .icon {
        margin-right: 4px;
        width: 12px;
        height: 12px;
    }

    .decrease {
        background-image: url("decrease_1@2x.png");
        background-size: cover;
    }

    .discount {
        background-image: url("discount_1@2x.png");
        background-size: cover;
    }

    .guarantee {
        background-image: url("guarantee_1@2x.png");
        background-size: cover;
    }

    .invoice {
        background-image: url("invoice_1@2x.png");
        background-size: cover;
    }

    .special {
        background-image: url("special_1@2x.png");
        background-size: cover;
    }

    .supports-count {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.2);
        right: 12px;
        bottom: 16px;
        height: 24px;
        width: 40px;
        line-height: 18px;
        border-radius: 14px;
        text-align: center;
    }

    .active-count {
        margin-left: 8px;
        font-weight: 200;
        font-size: 10px;
    }

    .icon-arrow-right {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-top: 1px solid #999;
        border-right: 1px solid #999;
        transform: rotate(45deg);
    }

    .supports-count > .icon-arrow-right {
        margin-right: 4px;
        margin-bottom: 1px;
    }

    .bulletin-wrapper {
        position: relative;
        padding: 0 24px 0 12px;
        background-color: rgba(7, 17, 27, 0.2);
        line-height: 28px;
        height: 28px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .bulletin-icon {
        display: inline-block;
        /*vertical-align: top;*/
        margin-top: 8px;
        width: 22px;
        height: 12px;
        background-image: url("bulletin@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bulletin-text {
        vertical-align: top;
        font-weight: 200;
        font-size: 10px;
    }

    .bulletin-wrapper > .icon-arrow-right {
        position: absolute;
        right: 12px;
        top: 12px;
    }

    .bg-header {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        filter: blur(10px);
    }

    .detail {
        position: fixed;
        /*z-index: ;*/
        width: 100%;
        height: 100%;
        overflow: auto;
        background: rgba(7, 17, 27, 0.5);
    }

    .detail-wrapper{
        min-height: 100%;
    }

    .detail-con{
        padding-bottom: 64px;
    }

    .detail-foot{
        position: relative;
        width: 32px;
        height: 32px;
        margin: ;
    }

    .fix{
        display: inline-block;
    }

    .fix:after{
        display: block;
        content: ".";
        height: 0;
        line-height: 0;
        clear: both;
        visibility: hidden;
    }
</style>