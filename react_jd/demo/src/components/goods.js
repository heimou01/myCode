import $ from 'jquery'
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import GoBcak from './goBack'
var mongodb=require('mongodb')


class Commity extends Component {
    constructor(props){
        super(props)
        this.state={
           goods:[]
        }
    }
    componentWillMount(){
        var {id}=this.props.match.params
       
        $.ajax({
            url:'http://localhost:4000/shops',
            method:'POST',
            data:{id:id},
            success:(result)=>{
                // console.log(result)
                this.setState({
                    goods:result[0]
                })
            }
            
        })
    }
    getGoodsId(e){
       $.ajax({
           url:'http://localhost:4000/toshopcar',
           method:"POST",
           data:{id:e},
           success:(result)=>{
            //    console.log(result)
               var data=result[0]
               $.ajax({
                   url:'http://localhost:4000/shopcar',
                   method:'POST',
                   data:data,
                   success:(result)=>{
                        console.log(result)
                   }
               })
               
           }
           
       })
    }
    render(){
         
        var goback=this.props.history.goBack
        
         var {name,price,info,img,_id}=this.state.goods
        //  var {name,price,infor,img} =this.state.goods[0]
         return(
             
             <div className="goods_wrap">
                 <GoBcak goback={goback}></GoBcak>
                <img src={img} alt="" className="shop_img"/>
                <p className="shop_name">{name}</p>
                <p className="shop_info">{info}</p>
                <span className="shop_price">{price}</span>
              <div className="shop_btn_wrap">
                    <Link to="/shopcar" className="shopcar_btn" onClick={()=>{this.getGoodsId(_id)}}>购物车</Link>
                    <Link to='/buy' className="by_now_btn" >立刻购买</Link> 
              </div>
                  
              
             </div>
             
         )
    }
}

export default Commity