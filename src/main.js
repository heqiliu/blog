import Vue from 'vue'
import App from './App.vue'


import Header from './components/Header'
import Content from './components/Content'
import About from './components/About'
import Note from './components/Note'
import Home from './components/Home'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

Vue.config.productionTip = false

//创建路由词典
const myRoutes=[
  
  {path:'/',redirect:'/index'},
  {path:'/index',components:{
    left:Header,
    right:Content
  }
 },
 {
   path:'/home',components:{
     left:Header,
     right:Home
   }
 },
{
  path:'/about',components:{
    left:Header,
    right:About
  }
},
{
  path:'/note',components:{
    left:Header,
    right:Note
  }
},
  
];
//创建路由对象,路由词典给路径
const myRouter=new VueRouter({
  mode:'history',
  routes:myRoutes
});

new Vue({
  //路由对象给router
  router:myRouter,
  render: h => h(App),
}).$mount('#app')
