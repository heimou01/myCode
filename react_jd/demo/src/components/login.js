import React,{Component} from 'react';
import $ from 'jquery'

class Login extends Component {
    constructor(props){
        super(props)
    }
    handleLogin(username,password){
        $.ajax({
            url:'http://localhost:4000/admin/login',
            method:'POST',
            data:{
                username:username,
                password:password,
                
            },
            success:(result)=>{
                console.log(result) 
                if(result=="ok"){
                    this.props.history.push('/succeed')
                }
            }
            
        })
    }
    render(){
         console.log(this.props)
         return(
             <div className="login_wrap">
                <form className="login_form">
                    <input type="text" name='username' id="username" placeholder="用户名"/>
                    <input type="password" name='password' id="password" placeholder="密码"/>
                    <input type="button" className="login_btn" value="登录" onClick={()=>{this.handleLogin(
                        $('#username').val(),$('#password').val()
                    )}}/>
                </form>
             </div>
         )
    }
}


export default Login