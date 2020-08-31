import React,{Component} from 'react';
import $ from 'jquery'

class Succeed extends Component {
    constructor(props){
        super(props)
    }
   clearValue(){
    window.location.reload()
   }
    handelAdd(name,classify,img,price,info){
         $.ajax({
             url:'http://localhost:4000/admin/addshop',
             data:{
                 name:name,
                 classify:classify,
                 img:img,
                 price:price,
                 info:info
            },
            method:'POST',
            success:(result)=>{
                console.log(result)
            }
           
         })
         this.clearValue()
    }
    render(){

         return(
             <div className="succeed_wrap">
                 <div className="title">个人界面</div>
                 <form className="upshelf_form">
                     <input type="text" className="name" placeholder="商品名称"/> 
                     <input type="text" className="classify" placeholder="商品分类"/>
                     <input type="text" className="img" placeholder="商品图片"/>
                     <input type="text" className="price" placeholder='商品价格'/>
                     <input type="text" className="info" placeholder="商品介绍" />
                     <input type="button" className="upshelf_btn" value="添加商品" onClick={()=>{
                         this.handelAdd($('.name').val(),$('.classify').val(),$('.img').val(),$('.price').val(),$('.info').val())
                     }}/>
                 </form>
             </div>
         )
    }
}


export default Succeed