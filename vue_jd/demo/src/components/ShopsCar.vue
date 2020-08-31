<template>
    <div class="shopCar_wrap">
        <Goback></Goback>
         <ul class="shopCar_ul">
             <li class="shopCar_li">
                   <router-link :to="{path:'/car/'+item._id}" v-for="item in items" v-bind:key="item._id" class="shopCar_link">
                    <img class="img" :src="item.url" alt />
                     <p class="name">{{item.name}}</p>
                     <span class="info">{{item.info}}</span>
                      <span class="price">￥{{item.price}}</span>
                 </router-link>
             </li>
         </ul>
         <BottomNav></BottomNav>
    </div>
</template>

<script>
import Goback from './Goback'
import BottomNav from './Bottom_Nav'
import $ from 'jquery'
export default {
    name:'ShopsCar',
    data() {
        return {
            items:[]
        }
    },
    created() {
        this.getDatas()
    },
    methods: {
        getDatas:function(){
            var that =this
             $.ajax({
                 url:'http://localhost:4001/getshopscar',
                 type:'get',
                 success:function(result){
                       that.items=result
                 }
             })
        },
        check:function(){
            console.log(this.$route)
        }
    },
   components:{
       Goback,
       BottomNav
   }
}
</script>