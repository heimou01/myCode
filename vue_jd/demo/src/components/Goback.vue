<template>
    <div class="goback" @click="goback()">＜</div>
    
</template>
<script>
export default {
    name:'Gobcak',
    methods:{
      goback:function(){
           this.$router.go(-1);
      },
    }
}
</script>