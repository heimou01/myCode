import React,{Component} from 'react';
import {Link,
    Route,
  BrowserRouter as Router} from  'react-router-dom'
  import $ from 'jquery'
  
class Cata_List extends Component{
    constructor(props){
        super(props)
        this.state={
            cataArr:[
                {cataName:'热门推荐'},
                {cataName:'手机数码'},
                {cataName:'电脑办公'},
                {cataName:'家用电器'},
                {cataName:'汽车生活'}
            ],
            cataList:[],
            index:0
        }
    }
    change(e,cataName){
        this.setState({
            index:e
        })
        $.ajax({
            url:'http://localhost:4000/listshop',
            method:'POST',
            data:{classify:cataName},
            success:(result)=>{
                // console.log(result)
                this.setState({
                    cataList:result
                })
            }
            
        })
        
      
    }
    goback(){
        this.props.history.goBack()
    }

    
    render(){
        var {cataArr,cataList} =this.state
     
        return (
         
            <div className="cata_wrap">
               
               <ul className="cata_ul_1">
                     {
                         cataArr.map((item,index)=>{
                              return(
                             <li key={index}  className={`cata_li ${index==this.state.index?'cata_active':""}` } onClick={()=>{this.change(index,item.cataName)}}>{item.cataName} <Link to="/listshop"  className='cata_link' ></Link></li>
                              )
                         })
                     }
               </ul>
               <ul className="cata_ul_2">
                    {
                        cataList.map((item,index)=>{
                            return(
                                <Link to={`/shops/${item._id}`} className="cata_2_link" key={index}>
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

export default Cata_List