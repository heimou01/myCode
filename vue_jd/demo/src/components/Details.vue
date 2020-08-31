<template>
    <div class="detail_wrap">
        <Goback class="return"></Goback>
        <img class="img" :src="items.url" alt />
        <p class="name">{{items.name}}</p>
        <span class="info">{{items.info}}</span>
          <span class="price">￥{{items.price}}</span>
      <div class="btn_wrap">
         <button class="inputCar" @click="AddCar(items._id)">加入购物车</button>
         <button class="buyNow">立即购买</button>
      </div>
   
    </div>
</template>
<script>
  import $ from 'jquery'
  import Goback from './Goback'
export default {
    name :'Details',
    components:{
        Goback,
    },
    data() {
        return {
            items:[]
        }
    },
    created() {
        var that =this
        that.getDates()
    },
    methods: {
        getDates:function(){
            var id =this.$route.params.id
            var that=this
         $.ajax({
             url:'http://localhost:4001/getshops',
             type:'post',
             data:{id:id},
             success:function(result){
                that.items=result[0]
                
             }
         })
    },
    AddCar:function(id){
        var that=this
        $.ajax({
             url:'http://localhost:4001/addcar',
             type:'post',
             data:{id:id},
             success:function(result){
                this.items=result
                console.log('添加成功')
                if(result=='ok'){
                    that.$router.push('/shopcar')
                }
             }
        })
    },
     check:function(){
        console.log(this.$route)
    }
    },
   
}
</script>