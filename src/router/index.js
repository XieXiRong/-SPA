import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Categorys from '../pages/Categorys/Categorys'
import Shiwu from '../pages/Shiwu/Shiwu'
import Shopcart from '../pages/Shopcart/Shopcart'
import Personal from '../pages/Personal/Personal'
const Item = () => import('../pages/Item/Item')
import Jujia from '../pages/Item/Jujia/Jujia'
import SheetBag from '../pages/Item/SheetBag/SheetBag'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/personal',
      component: Personal,
    },
    {
      path: '/msite',
      component: Msite,
    },
    {
      path: '/categorys',
      component: Categorys,
    },
    {
      path: '/shopcart',
      component: Shopcart,
    },
    {
      path: '/shiwu',
      component: Shiwu,
    },
    {
      path:'/',
      redirect:'/msite',
    },
    {
      path: '/item',
      component: Item,
      children:[
        {
          path: '/jujia',
          component: Jujia,
        },
        {
          path: '/sheetbag',
          component: SheetBag,
        }
      ]
    },
  ]
})
