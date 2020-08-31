<template>
    <div class="classify_wrap">
        <ul class="classify_ul">     
            <router-link :to="{path:'/shoplist/'+item.classify}" class="classify_link" v-for="item in items" v-bind:key="item.id">
                 <li class="classify_li">
                    <img :src="item.url" alt />
                    <span class="classify_name">{{item.classify}}</span>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name:'Classify',
    data:function(){
        return {
            items:null
        }
    },
    methods:{
        GetClassify:function(){
            var that=this
             $.ajax({
                 url:'http://localhost:4001/classify',
                 type:'get',
                 success:function(result){
                      that.items=result
                   
                 }
             })
        }
    },
    created() {
        this.GetClassify()
    },
}
</script>