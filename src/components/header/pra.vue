<template>
    <div class="detail-label">
        <div class="line"></div>
        <div class="text">{{message}}</div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default{
        props:{
            message:'message'
        }
    }
</script>

<style>
    .detail-label {
        display: flex;
        width: 80%;
        margin: 28px auto 24px auto;
    }

    .line {
        flex: auto;
        position: relative;
        top: -6px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .text {
        padding: 0 12px;
        font-size: 14px;
        font-weight: 700;
    }
</style>