import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Categorys from '../pages/Categorys/Categorys'
import Shiwu from '../pages/Shiwu/Shiwu'
import Shopcart from '../pages/Shopcart/Shopcart'
import Personal from '../pages/Personal/Personal'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/personal',
      component: Personal,
      meta:{
        showFoot:false
      }
    },
    {
      path: '/msite',
      component: Msite,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/categorys',
      component: Categorys,
      meta:{
        showFoot:false
      }
    },
    {
      path: '/shopcart',
      component: Shopcart,
      meta:{
        showFoot:false
      }
    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta:{
        showFoot:false
      }
    },
    {
      path:'/',
      redirect:'/msite',
    }
  ]
})
