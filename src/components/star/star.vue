<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" class="item-star" :class="itemClass"></span>
    </div>
</template>

<script>
    export default{
        props:{
            size:{
                type: Number
            },
            score{
                type: Number
            }
        },
        computed:{
            starType(){
                return 'star-' + this.size;
            }
        }
    }
</script>

<style>

</style>