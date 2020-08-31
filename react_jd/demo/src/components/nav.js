import React,{Component} from 'react';
import {Link,
    Route,
  BrowserRouter as Router} from  'react-router-dom'
class Nav_top extends Component {
    constructor(props){
        super(props)
    }
    render(){

         return(
             <div className="nav_top_wrap">
                
             </div>
         )
    }
}

class Nav_Bottom extends Component {
    constructor(props){
        super(props)
        this.state={
            incon:[{
                link:'/',
                name:'首页',
                incon_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png',
                on_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png'
            },{
                link:'/listshop',
                name:'分类',
                incon_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png',
                on_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png',
            },
            {
                link:'/shopcar',
                name:'购物车',
                incon_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png',
                on_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/45205/32/12889/3890/5d9c4b12E7bc2c425/dd60fafbde8542ca.png'
            },
            {
                link:'/superise',
                name:'京喜',
                incon_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png',
                on_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png'
            },
            {
                link:'/login',
                name:'登录',
                incon_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png',
                on_img:'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png'
            }]
        }
    }
    LoadingData(){
        window.location.reload()
    }
   
    render(){
       
        var {incon}=this.state
        return(
            <div className="nav_bottom_wrap">
                <ul className="nav_bottom_wrap_ul">
                    {
                         incon.map((item,index)=>{
                             return(
                                 <li key={index} className='_bottom_wrap_item' onClick={()=>{this.LoadingData()}}>
                                     <Route path={item.link} exact children={(e)=>{
                                       return(
                                        <Link to={item.link} className="_bottom_link">
                                        <img src={e.match? item.on_img:item.incon_img} alt="" className='_bottom_imgs'/>
                                      </Link>
                                       )
                                     }}></Route>
                                 </li>
                             )
                         })
                    }
                </ul>
            </div>
        )
    }
}


export {Nav_top,Nav_Bottom}