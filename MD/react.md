# React
## React 环境配置 
```javascript
// 后端输入
npm install creat-react-app

// 创建文件
npx creat-react-app index

// 运行文件
npm start
```

## 引入引出语句（import export）

### import语句
```javascript

import React from 'react'
//从react文件引入 React这个元素

//2.引入文件
import './App.css' 

//3.引入文件中的非默认元素
import {obj} from './文件名'

```
### exprort 语句
```javascript
//1. 导出默认元素
export default App
// 2.导出非默认元素
export {obj,obj1}

```
**导出非默认的元素的顺序必须与引用非默认元素顺序对应**

```javascript

// 导出   export.js

export {obj,obj1,obj2}

// 引入 import.js

import {obj,obj1,obj2} from './export'

```

## JSX语法（js+css+html的结合）
```javascript
import React from 'react'
// jsx语法
class App extents React.Component {
    constructor(props){
        super(props)
        this.state={
            now:fasle,
        }
    }
    render(){
        return (
            //根节点
            <div>
        {/*jsx语句区域*/}
            </div>
        )
    }
}

//  2.jsx花括号语法 在jsx中写入js代码
import imgs from './1.jpg'

class App extents React.Component {
    constructor(props){
        super(props)
        this.state={
            now:fasle,
        }
    }
    handel(){
        console.log('这是一个函数')
    }
    render(){
        var arr={1,2,3,4}
        return (
            <div>
             {/*改变样式*/}
              <div style={{color:'red',width:'10px'}}></div>
               {/*引入图片*/}
               <img src={imgs} alt="">
                {/*className*/}
                <p className='p1'></p>
                 {/*运行函数*/}
                 <div onClick={()=>{this.handle()}}></div>
                  {/*遍历生成标签*/}
                  <ul>
                   { arr.map((item,index)=>{
                        return (
                            <li key={index}>{item}</li>
                        ) 
                    })}
                  
                  </ul>
            </div>
        )
    }
}
```
* 1.style语法 ： 在花括号语法中使用键值对的方式（对象）改变元素的样式
* 2.引入图片  ： 图片无法直接输入地址，必须用一个变量接收从外部文件引入该图片
* 3.监听器 ：  监听器运行的函数必须用es6的函数形式包裹，否则函数会直接运行或者失去其作用域


## setState函数

```javascript
class App extents React.Component {
    constructor(props){
        super(props)
        this.state={
            now:fasle,
        }
    }
    handle(){
        this.setState={
            now:!this.state.now
        }
    }
    render(){
        return (
           
            <div>
              {console.log(this.state.now)}
            </div>
        )
    }
}
// setState函数 改变初始设置的状态（state）的值（state.now）

```
## React组件
```javascript
//  新建组件Text
class Text extends React.Component{
    constructor(props){
        super(props)
        this.state=''
    }
    render(){
        return(
            <div></div>
        )
    }
}
// 新建组件Button
class Button  extends React.Component{
    constructor(props){
        super(props)
        this.state=''
    }
    render(){
        return(
            <button></button>
        )
    }
}
// 组件引用
  class App extends React.Component{
      constructor(props){
          super(props)
          this.state=''
      }
      render(){
          return (
              <Text></Text>
              <Button></Button>
          )
      }
  }

```
### 组件之间的参数传递（props）
```javascript
// 方式1：
class Button  extends React.Component{
    constructor(props){
        super(props)
        this.state=''
       
       
    }
    render(){
         // 父组件传递的信息保存在this.props中
         console.log(this.props)
        //  父组件传递的标签保存在this.props.children中
        return(
            <button></button>
        )
    }
}
class App extends React.Component{
      constructor(props){
          super(props)
          this.state=''
      }
      render(){
          return (
            //父组件传递信息给Button组件
              <Button content='父组件传递的信息'>
               <div>父组件传递的标签 </div>
              </Button>
          )
      }
  }


// 方式2：
import PropTypes from 'prop-types'


class Text extends React.Component{
    constructor(props){
        super(props)
        this.state=''
    }
    statci contextTypes={
        color:PropTypes.string
    }
    render(){
        // 父组件传递的内容保存在this.context中
        console.log(this.context)
        return(
            <div></div>
        )
    }
}
 class App extends React.Component{
      constructor(props){
          super(props)
          this.state={
              color:'red'
          }
      }
    // 给子组件传递的参数类型
      static childContextTypes={
           color:PropTypes.string
      }
    // 传递的具体内容
    getChildContex=funtion(){
        return{
             color:this.state.color
        }
    }  
      render(){
          return (
              <Text></Text>
              
          )
      }
  }
// 默认参数
class Text extends React.Component{
    constructor(props){
        super(props)
        this.state=''
    }
    // 限制参数类型
    static propTypes={
       colors:PropTypes.string  //默认参数类型
    }
    static defaultProps ={
        colors:'red'    //默认参数
    }
    render(){
        // 默认参数也保存在this.props中
        console.log(this/props)
        return(
            <div style={{color:colors}}></div>
        )
    }
}
```
1.组件之间通过props传递的参数可以是任意类型
2.当父组件没有传递参数时默认参数才会有作用
3.通过方式2传递的内容 其传递与接收的类型必须对应

### 组件的生命周期
```javascript
class App extends React.Component{
      constructor(props){
        //   组件的初始化 initialiaztion
          super(props)
          this.state=''
      }
      componentWillMount(){
        //   组件准备加载
      }
      render(){
        //   组件加载
          return (
             <div></div>
          )
      }
      componentDidMount(){
        //   组件加载完成 
      }
  }
// 组件状态改变
class App extends React.Component{
      constructor(props){
          super(props)
          this.state=''
      }
      shouldComponentUpdate(){
        //   组件可以更新？
         return ture
      }
      componentWillUpdate(){
        //  组件准备更新
      }
      render(){
          return (
             
          )
      }
      componentDidUpdate(){
        //   组件更新完成
      }
  }
class H1 extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (

        )
    }
    componentWillUnMount(){
        // 组件准备卸载
    }
}
```
### React 路由

```javascript
import  {Route     //路由组件
,BrowserRouter as Router     //路由根组件
,Link              //链接组件
,Switch           // 路由选择
,Redirect       //重定向
, Prompt              // 弹窗
 } from 'react-router-dom'


 //简单跳转
class Blog extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
           <div>blogs</div>
        )
    }
}
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
           <div>home</div>
        )
    }
}
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router>
             <Link to='/blog'>博客</Link> 
             <Link to='/home'>首页</Link>    
             <Route path='/blog' ></Route>
             <Route path='/home'></Route>          
            </Router>
        )
    }
}
//路由的渲染
// 1.函数渲染
 <Route path='/blog' render={()=>{return <div>blog</div> }}></Route>
//2.组件渲染
 <Route path='/home' component={Home}></Route>
  <Route path='/blog' component={Blog}></Route>

//严格匹配(exact)
 <Route path='/home' exact component={Blog}></Route>

 //Switch路由选择
 <Switch>
   <Route path='/home' component={Home}></Route>
   <Route path='/blog' component={Blog}></Route>
    <Route  render={()=>{<div>404</div>}}></Route>
 </Switch>
 // /home /blog 之外的接口页面默认为404  
 //放在最前会覆盖所有接口（所有接口都显示404）  

 //重定向
<Redirect from='/blogs' to='/blog'></Reairect>

//弹窗
<Prompt when={true} message={'xxxxxxxx'}></Prompt>

//参数传递
//component 传递Page组件 父组件传递的参数保存在this.props中
// /:id ==> /1 /2

  // 1.
   class Page extends React.Component {
       constructor(props){
           super(props)
       }
       console.log(this.props)
       render(){
           return (
               <div>文章{this.props.match.params.id}</div>
           )
       }
   }
   class App extends React.Component {
       constructor(props){
           super(props)
       }
       render(){
           return (
               <Router>
                  <Link to='/page/1'>文章1</Link>  
                  <Link to='/page/2'>文章2</Link>             
                  <Route path='/page/:id' component={Page}></Route>
               </Router>
           )
       }
   }

   //2.  render 函数渲染  参数保存在 函数的形式参数中(props)=>{}
   class Page extends React.Component {
       constructor(props){
           super(props)
       }
       console.log(this.props)
       render(){
           return (
               <div>文章{this.props.match.params.id}</div>
           )
       }
   }
   class App extends React.Component {
       constructor(props){
           super(props)
       }
       render(){
           return (
               <Router>
                  <Link to='/page/1'>文章1</Link>  
                  <Link to='/page/2'>文章2</Link>             
                  <Route path='/page/:id' render={(props)=>{
                      return <div>{console.log(this.props)}</div>
                  }}></Route>
               </Router>
           )
       }
   }
 
 //history 的页面跳转
class App extends React.Component {
       constructor(props){
           super(props)
       }
       render(){
           return (
               <Router>
                  <Link to='/goback'></Link>
                   <Link to='/home/page'>文章</Link>
                    <Link to='/home/blogs'>博客</Link>
                    <Route path='/home/:id' render={(props)=>{
                        return (
                            <div>{this.props.parmas.id}</div>
                        )
                    }}></Route>
                    <Route path='/goback' render={(props)=>{
                        return(
                            <button onClick={()=>{this.props.history.goBack()} }>返回上一级</button>
                        )
                    }}></Route>
               </Router>
           )
       }
   }
 //Route 的children 属性
   //children 属性 ： 保证 匹配到哪一个路由 两个Link都会存在
  <Route path='/' exact children={()=>{return (
       <Link to='/blog'>博客</Link>
       <Link to='/'>首页</Link>
       }
  )} 
 }>
  </Route>

//遍历生成路由

const routers=[
    {
        path:'/',
        exact:'ture',
        component:Nav_Component,
    },
     {
        path:'/blog',
        exact:'ture',
        component:Blog_Component,
    },

]
 class Nav_Component extends Component {
     render(){
         return (
             <div>首页</div>
         )
     }
 }
 class Blog_Component extends Component {
     render(){
         return (
             <div>博客</div>
         )
     }
 }
class App extends Component {
     render(){
        return(
         <Router>
          routers.map((item,index)=>{
              return <Route path={item.path} exact={item.exact} component={item.component}><Route>
          })
        </Router>
        )
     }
 }

```




