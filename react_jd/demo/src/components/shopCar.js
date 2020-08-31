import React,{Component} from 'react';
import $ from 'jquery'
import {Link} from  'react-router-dom'
import GoBcak from './goBack'
class ShopCar extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        $.ajax({
            url:'http://localhost:4000/shopcar',
            method:'GET',
            success:(result)=>{
                this.setState({
                      data:result
                })
            }
        })
    }
    render(){
       var data=this.state.data
       var goback=this.props.history.goBack
         return(
            <div className="cata_wrap">
                <GoBcak goback={goback}></GoBcak>
                 <ul className="cata_ul_2">
                    {
                        data.map((item,index)=>{
                            return(
                                <Link to={`/shops/${item._id}`} className="cata_2_link shop_car_link" key={index}>
                                <li className="cata_2_li">
                                    <img src={item.img} alt="" className="cata_2_img"/>
                                    <p className="cata_2_name">{item.name}</p>
                                    <span className="cata_2_price">{item.price}</span>
                                  
                                </li>
                                </Link>
                            )
                        })
                    }
               </ul>
             </div>
         )
    }
}


export default ShopCar