import Vue from 'vue'
import vuex from '../store/index'
import not from '../views/not.vue';
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'
import Cart from '../views/cart.vue'
import Password from '../views/Password.vue'
import PhoneCode from '../views/PhoneCode.vue' 
import Me from '../views/Me.vue';
import Init from '../components/Me/init.vue'
import Order from '../components/Me/Order.vue'
import Information from '../components/Me/Information.vue'
import ConfirmAnOrder from '../views/ConfirmAnOrder.vue';
import Seckill from '../views/Seckill.vue';
import ViewMore from '../views/ViewMore.vue'
import ShowMore from '../views/ShowMore.vue';
import Submitted from '../views/OrdersSubmitted.vue';
import orderDetails from '../components/Me/orderDetails.vue';
import Search from '../views/search.vue';
import MoreVideo from '../views/MoreVideo.vue'
Vue.use(VueRouter)
  
const routes = [
  {
    path: '/',
    components: { default: Home },
    name: 'home',
    meta: {
      title: '小米商城 - 小米10 Pro、Redmi 10X、小米MIX Alpha，小米电视官方网站'
    }
  },
  {
    path: '/detail/:id',
    name: 'details',
    components: { default: Detail },
  },
  {
    path: '/login/',
    name: 'login',
    components: { default: Login },
  },
  {
    path:'/register',
    name:'register',
    components:{default: Register}
  },
  {
    path:'/cart/:id',
    components:{default:Cart},
    name:'cart',
    meta:{
      requireAuth:true
    }
  },
  {
    path:"/password",
    components:{default:Password},
    name:'password'
  },
  {
    path:"/phonecode",
    components:{default:PhoneCode},
    name:"phonecode"
  },
  {
    path:'/me/:id',
    components:{default:Me},
    name:'me',
    meta: {
      title: '个人中心',
      requireAuth:true
    },
    children:[
      {
        path:'init',
        components:{default:Init},
        name:'init',
        meta: {
          title: '个人中心',
          requireAuth:true
        },
      },
      {
        path:"order",
        components:{default:Order},
        name:'order',
        meta: {
          title: '个人中心',
          requireAuth:true
        },
      },
      {
        path:"information",
        components:{default:Information },
        name:'information',
        meta: {
          title: '个人中心',
          requireAuth:true
        },
      },
      {
        path:'orderdetails/:id',
        name:'orderdetails',
        components:{default:orderDetails},
        meta: {
          title: '个人中心',
          requireAuth:true
        },
      }
    ]
  },
  {
    path:'/affirm/:id',
    components:{default:ConfirmAnOrder},
    name:'affirm',
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/seckill',
    components:{default:Seckill},
    name:"seckill"
  },
  {
    path:"/viewmore",
    components:{default:ViewMore},
    name:"viewmore"
  },
  {
    path:'/showmore',
    components:{default:ShowMore},
    name:'showmore'
  },
  {
    path:'/submitted',
    name:'submitted',
    components:{default:Submitted},
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/search/:id',
    components:{default:Search},
    name:'search'
  },
  {
    path:'/morevideo/',
    components:{default:MoreVideo},
    name:'morevideo'
  },
  {
    path:'*',
    components:{default:not},
    name:'404'
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  
  if (to.meta.title) {
    document.title = to.meta.title
  }
  console.log(to)
  if(to.meta.requireAuth){
    if(vuex.state.user.isLogin){
      next()
    }else{
      next({
        name:'login'
      })
    }
  }else{
  next()
  }
})
export default router
