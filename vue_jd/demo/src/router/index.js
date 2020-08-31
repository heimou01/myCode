import VueRouter from "vue-router";
import Vue from "vue";
import Home from '../components/Home.vue'
import ShopsList from '../components/ShopsList.vue'
import ShopCar from '../components/ShopsCar.vue'
import Login from '../components/Login.vue'
import LoginOk from '../components/LoginSucceed.vue'
import BottomNav from '../components/Bottom_Nav.vue'
import Details from '../components/Details.vue'
import CarDetails from '../components/CarDetails.vue'

Vue.use(VueRouter);

var router=new VueRouter({
    routes:[
      {
          path:'/',
          component:Home,
      },
      {
        path:'/shoplist/:id',
        component:ShopsList,
        children:[
          {
            path:'/shoplist',
            components:{BottomNav,ShopsList}
          }
        ]
      },
      {
        path:'/shopcar',
        component:ShopCar
      },
      {
        path:'/login',
        component:Login,
      },
      {
          path:'/loginsucceed',
          component:LoginOk
      },
      {
        path:'/shops/:id',
        component:Details
      },
      {
        path:'/car/:id',
        component:CarDetails
      }
    
    ]
})

export default router


