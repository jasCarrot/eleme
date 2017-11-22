<template>
    <div>
        <top></top>
        <div class="tab-item">
            <router-link to="'/goods">商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="'/ratings">评价</router-link>
        </div>
        <div class="tab-item">
            <router-link to="'/seller">商家</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import top from './header/top.vue'

    export default{
        name:'components',
        components:{
            top,
        }
    }
</script>

<style>

</style>