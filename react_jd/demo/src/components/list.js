import React,{Component} from 'react';
import $ from 'jquery'

class List extends Component {
    constructor(props){
        super(props)
        this.state={
            listArry:[]
        }
    }
    componentWillMount(){
        $.ajax({
            url:'http://localhost:4000/list',
            method:"GET",
            success:(result)=>{
                this.setState({
                    listArry:result
                })
            //   console.log(result)
            }
        })
    }
    render(){
        var {listArry}=this.state
        return(
            <div className="list_wrap">
               <div className="pic_wrap">
                     <img src="//m.360buyimg.com/mobilecms/s750x200_jfs/t1/113179/10/8246/170551/5ecd3469Ec32c62e3/b209724e5042521f.jpg!q70.dpg.webp" alt=""/>
               </div>
                 <ul className="list_ul_1">
                   {
                      listArry.map((item,index)=>{
                          return (
                              <li className="list_ul_1_item" key={index}>

                                  <img className='_item_img'  src={item.item_incon} alt=""/>
                                 <span className="_item_name">{item.item_name}</span>
                              </li>
                          )
                      })
                   }
                 </ul>
               
            </div>
        )
    }
}

export default List