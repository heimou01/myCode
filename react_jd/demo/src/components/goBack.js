import React,{Component} from 'react';

class GoBack extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
     var goback=this.props.goback
     console.log(goback)
         return(
             <div className="_goback" onClick={()=>{goback()}}>
                {'<'}
             </div>
         )
    }
}

export default GoBack
