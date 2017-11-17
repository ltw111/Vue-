import Vue from "vue";

import App from "./App.vue";


//使用mintUI插件 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)


//引入vue-router设置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//引入vue-resource 来进行请求  不用实例化直接下面都可以用
import VueResource from 'vue-resource'
Vue.use(VueResource)

import Home from "./components/Home.vue"
import ShopCar from "./components/ShopCar.vue"
import Member from "./components/Member.vue"
import Search from "./components/Search.vue"
import Newlist from "./components/newlist.vue"


//引入全局css样式
import "./root.css" 


//会用moment.js设置时间格式

import moment from "moment"
//定义一个过滤器

Vue.filter("filter",function (input,fmstring){
   return  moment(input).format(fmstring)
})





var router=new VueRouter({
    linkActiveClass:"mui-active",
    routes:[
        {name:"home",path:"/",redirect:"/Home"},
        {name:"home",path:"/Home",component:Home},
        {name:"ShopCar",path:"/ShopCar",component:ShopCar},
        {name:"Member",path:"/Member",component:Member},
        {name:"Search",path:"/Search",component:Search},
        {name:"newlist",path:"/Newlist",component:Newlist}
    ]
})

//引入mui的css样式 
import "./static/css/mui.min.css"

new Vue({
    el:"#app",
    router,
    render:createElement =>createElement(App)
})