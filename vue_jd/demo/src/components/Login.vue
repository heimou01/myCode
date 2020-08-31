<template>
    <div class="login_wrap">
        <p class="title">用户登录</p>
        <form action="http://localhost:4001/admin/login" class="login_form" method="post">
            <input class="login_username" type="text" placeholder="请输入账号" name="username" v-model="value">
            <input class="login_password" type="password" placeholder="请输入密码" name="password" v-model="pass">
          <input type="button"  class="login_submit" @click="fun1(value,pass)" value="登录" >
        </form>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name:'Login',
    data:function(){
        return{
            value:null,
            pass:null
        }
    },
    watch: {
        value:function(oldValue){
            this.value=oldValue
        },
        pass:function(oldValue){
            this.pass=oldValue
        }
    },
    methods:{
        fun1:function(username,password){
            var that =this
           $.ajax({
               url:'http://localhost:4001/admin/login',
               type:'post',
               data:{
                  username:username,
                  password:password
               },
               success:function(result){
                     if(result=="登录成功"){
                      that.$router.push('/loginsucceed')
                     }
               }
           })
        },
    }
}
</script>