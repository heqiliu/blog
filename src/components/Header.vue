<template>
    <div class="container">
        <h2>个人博客</h2>
        <img class="sculpture" src="@/assets/市民中心.jpg">
        <h3>{{myName}}</h3>
        <h4 :style="{'color':randomColor()}">To be a dedicated coder</h4>
        <div class="list">
            <ul>
                <li v-for="(item,idx) in list" :key="item.idx">
                    <router-link :class="{'clickClass':itemCheck==idx}" :to='item.path' @click.native=tabClass(idx)>{{item.name}}</router-link>
                </li>
                
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Header',
        data(){
            return {
                myName:'何奇流',
                title:'To be a dedicated coder',
                list:[
                    {name:'home',path:'/home'},
                    {name:'about',path:'/about'},
                    {name:'note',path:'/note'}
                ],
                itemCheck:0
            }
        },
        methods:{
            tabClass(idx){
                this.itemCheck=idx;
            },
            randomColor(){
                var r =  Math.floor(Math.random()*256);
                var g =  Math.floor(Math.random()*256);
                var b =  Math.floor(Math.random()*256);  
               return `rgb(${r},${g},${b},04)`;
            }
            
        },
        
        created(){
           //遍历list，再遍历每个元素，只要不是空元素，就反元素下标赋值给点击的那个组件
           //刷新后依旧选择有效
            this.list.forEach((element,index)=>{
               for(let i in element){
                   if(element[i].indexOf(this.$route.path) >= 0){
                       this.itemCheck = index;
                   }
               }
            });    
            const timer=setInterval(()=>{
            this.randomColor();
              },1000);
     
        }
         
    }
</script>
<style scoped>
    /*整个容器*/
    .container{
        text-align:center;
    }
    /*图片*/
    .container .sculpture{
        display:inline-block;
        width:100px;
        height:100px;
        border-radius:50%;
    }

    /*一串字母*/
    .container h4,h3{
        margin:20px 0 ;
    }
    /*ul下的三个链接*/
    .list ul li{
        border-top:1px solid orange;
        padding:15px 0;
        border-collapse:collapse;
    }
    .list ul li:last-child{
        border-bottom:1px solid orange;
    }
    /*li标签选中时的字体颜色*/
    .clickClass{
        color:red !important;
    }
</style>