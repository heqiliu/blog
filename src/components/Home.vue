<template>
    <div>
        <h2 class="title">{{title}}</h2>
    </div>
</template>
<script>
    export default{
        
        data(){
            return {
                name:'home',
                title:'个人简介'
            }
        }
    }
</script>
<style scoped>
    .title{
        margin-top:10px;
    }
</style>