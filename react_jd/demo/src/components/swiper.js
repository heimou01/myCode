import React,{Component} from 'react';

class Swiper extends Component {
    constructor(props){
        super(props)
        this.state={
            arry:[{
                swi_img:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/133695/15/520/153346/5ece1b7dE8f59f30c/200eb5b32f13b299.jpg!cr_1125x445_0_171!q70.jpg.dpg"
            },{
                swi_img:"//img10.360buyimg.com/pop/s590x470_jfs/t1/119537/37/6975/85257/5ecceb3dE97f91005/bc7074266fb7231e.jpg.webp"
            },{
                swi_img:"//img30.360buyimg.com/pop/s590x470_jfs/t1/134462/5/297/58522/5ecb8e57Ef1a954f5/22343b2eb0400ff6.jpg.webp'"
            },{
                swi_img:"//img12.360buyimg.com/pop/s590x470_jfs/t1/122770/16/2651/89249/5ec7315bEea3012c4/069a7b1edf3c8e0b.jpg.webp"
            },{
                swi_img:"//img10.360buyimg.com/pop/s590x470_jfs/t1/119537/37/6975/85257/5ecceb3dE97f91005/bc7074266fb7231e.jpg.webp"
            },{
                swi_img:"//img14.360buyimg.com/da/s590x470_jfs/t1/126185/19/2578/83567/5ec766bdE6ccda9b9/c51be2d5188a1d56.jpg.webp'"
            }],
            index:0
        }
    }
  
    goNext(){
        var index=this.state.index
        index++
        if(index>this.state.arry.length-1){
            index=0;
            
        }
        this.setState({
            index:index
        })
    }
    componentWillMount(){
       this.timer= setInterval(()=>{this.goNext()}, 1600);
    }
    handle(e){
       this.setState({
           index:e
       })
    }
    render(){
        
      
       var {arry,}=this.state
       var sindex=this.state.index
    //    console.log(sindex)
        return(
           
            <div className='swiper_wrap'>
               <ul className="swiper_ul">
               {
                  arry.map((item,index)=>{
                       return(
                           <li className={`swiper_li ${index==sindex?"active":""}`} key={index}>
                               <img src={item.swi_img} alt=""/>
                           </li>
                       )
                  })
                }
               </ul>
               <ul className='point_ul'>
                   {
                          arry.map((item,index)=>{
                            return(
                               <li className={`${index==this.state.index? "pointLight":""}`} key={index} onClick={()=>{this.handle(index)}}></li>
                            )
                       })
                   }
               </ul>
            </div>
        )
    }
    componentWillUnmount(){
       clearInterval(
           this.timer
       )
    }
}

export default Swiper