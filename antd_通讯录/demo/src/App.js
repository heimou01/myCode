import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {BrowserRouter as Router,
Route} from'react-router-dom'
import Home from './component/Home'
import AddPage from './component/AddpPage'
import Infomation from './component/Infomation'
import UpdataPage  from './component/UpdataPage'


class App extends React.Component{
     render(){
         return (
           <Router>
              <Route path='/'exact component={Home}></Route>
              <Route path='/addone' exact component={AddPage}></Route>
              <Route path='/person/:id' exact component={Infomation}></Route>
              <Route path='/update/:id' exact component={UpdataPage}></Route>
           </Router>
         )
     }
}

export default App;
