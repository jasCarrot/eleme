<template>
    <div id="app">
        <top :seller="seller"></top>
        <div class="tab">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评价</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import top from './header/top.vue'

    export default{
        name: 'components',
        data() {
            return {
                seller: {},
            }
        },
        components: {
            top,
        }
    }
</script>

<style>
    #app > .tab {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 0.5px solid rgba(7, 17, 27, 0.37);
    }

    .tab-item {
        flex: 1;
        text-align: center;
    }
</style>