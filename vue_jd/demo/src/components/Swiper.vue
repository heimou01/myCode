<template>
    <div class="swiper_bgc">
        <div class="swiper_wrap">
            <ul class="swiper_ul" >
                <a href="" class="swiper_link" v-for="(item,index) in items" v-bind:key="item._id" :class="[index==indexNum? 'active':'']">
                   <li class="swiper_li" >
                    <img :src="item.url" alt />
                  </li>
                </a>
                 <ul class="swiper_point">
                     <li class="point_li" v-for="(item,index) in items" v-bind:key="item.id" @click="handle(index)" :class="[index==indexNum? 'point_active':'']"></li>
                 </ul>
            </ul>
           
        </div>
    </div>

</template>
<script>
import $ from 'jquery'
export default {
    name:'Swiper',
    data() {
        return {
            items:null,
            indexNum:0,
        }
    },
    created() {
        this.GetDatas()
        setInterval(()=>{
            this.move()
        },1500)
    },
    methods: {
        GetDatas:function(){
            var that=this
            $.ajax({
                url:'http://localhost:4001/swiper',
                type:'get',
                success:function(result){
                    that.items=result
                    // console.log(result)
                }
            })
        },
        move:function(){
            var indexData=this.indexNum
            indexData++;
            if(indexData>this.items.length-1){
                indexData=0
            }
            this.indexNum=indexData
        },
        handle:function(e){
            this.indexNum=e
        }
       
    },
}
</script>