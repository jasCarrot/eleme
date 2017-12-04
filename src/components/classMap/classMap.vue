<template>
    <span :class="classMap[num]"></span>
</template>

<script>
    export default{
        props: {
            num: {
                type: Number
            }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        }
    }
</script>

<style>
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
</style>