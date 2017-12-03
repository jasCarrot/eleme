<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" class="item-star" :class="itemClass"></span>
    </div>
</template>

<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';


    export default{
        props: {
            size: {
                type: Number
            },
            score: {
                type: Number
            }
        },
        computed: {
            starType(){
                return 'star-' + this.size;
            },
            itemClasses() {
                let result = [];
                let score = Math.floor(this.score * 2) / 2
                let hasDecimal = score % 1 !== 0;
                let integer = Math.floor(score);
                for (let i = 0; i < integer; i++) {
                    result.push(CLS_ON);
                }
                if (hasDecimal) {
                    result.push(CLS_HALF)
                }
                while (result.length < LENGTH) {
                    result.push(CLS_OFF);
                }
                return result;
            }
        }
    }
</script>

<style>

    .star {
        font-size: 0;
    }

    .item-star {
        display: inline-block;
        background-repeat: no-repeat;
    }

    .star-48 > .item-star {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background-size: 20px 20px;
    }

    .star > .item-star:last-child {
        margin-right: 0;
    }

    .star-48 > .on {
        background-image: url("star48_on@2x.png");
    }

    .star-48 > .half {
        background-image: url("star48_half@2x.png");
    }

    .star-48 > .off {
        background-image: url("star48_off@2x.png");
    }

    .star-36 > .item-star {
        width: 15px;
        height: 15px;
        margin-right: 6px;
        background-size: 15px 15px;
    }

    .star-36 > .item-star:last-child {
        margin-right: 0;
    }

    .star-36 > .on {
        background-image: url("star36_on@2x.png");
    }

    .star-36 > .half {
        background-image: url("star36_half@2x.png");
    }

    .star-36 > .off {
        background-image: url("star36_off@2x.png");
    }

    .star-24 > .item-star {
        width: 10px;
        height: 10px;
        margin-right: 3px;
        background-size: 10px 10px;
    }

    .star-24 > .item-star :last-child {
        margin-right: 0;
    }

    .star-24 > .on {
        background-image: url("star24_on@2x.png");
    }

    .star-24 > .half {
        background-image: url("star24_half@2x.png");
    }

    .star-24 > .off {
        background-image: url("star24_off@2x.png");
    }


</style>