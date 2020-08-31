import React,{Component} from 'react';
import './App.css';
import Proptypes from "prop-types";
import GoBack  from './components/goBack'
import {Link,
          Route,
        BrowserRouter as Router} from  'react-router-dom'
import Swiper from '../src/components/swiper'
import {Nav_top,Nav_Bottom} from '../src/components/nav'
import  List from'../src/components/list'
import Cata_List from '../src/components/classify_'
import  Commity from './components/goods'
import  ShopCar from    './components/shopCar'
import Login from './components/login'
import Succeed from './components/succeed'

//首页

class Home extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Nav_top></Nav_top>
                <Swiper></Swiper>
                <List></List>
                <Nav_Bottom></Nav_Bottom>
            </div>
        )
    }
}

//分类
class Classify extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        var goback=this.props.history.goBack
        return(
            <div >
                  <GoBack goback={goback}></GoBack>
                 <Cata_List ></Cata_List>
                <Nav_Bottom></Nav_Bottom>
            </div>
        )
    }
}


class App extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        return(
            <div>
               <Router>
                   <Route path="/" exact component={Home}></Route>
                   <Route path="/listshop" exact component={Classify}></Route>
                   <Route path='/shops/:id' exact component={Commity}></Route>
                   <Route path='/shopcar' exact component={ShopCar}></Route>
                   <Route path='/login' exact component={Login}></Route>
                   <Route path="/succeed" exact component={Succeed}></Route>
               </Router>
            </div>
        )
    }

}

export default App;
