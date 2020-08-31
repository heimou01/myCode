# Vue
配置环境
```
npm install @vue/cli -g
```
创建文件
```
npx vue create demo
```
运行
```
npm run sever
```
代码提示
```
vue 2 snippets , vue Vscode snippets
```
## 组成部分

 ### main(生成一个Vue实例)

 ```javascript
  Vue.config.production=false //是否处于开发模式   
 ```
 ```javascript
  new Vue({
      el:"#app",
      render:(createElement)=>{
         return createElement(App)
      }
  })
  //等价于
  new Vue({
  render: h => h(App),
}).$mount('#app')
//el:"#app" = $mount("#app")
 ```

 ### 组件
 ```javascript
  //组成部分  template（模板） script（逻辑） style（css样式）

   <template>
     <div id="template">
        <p>{{handle}}</p>
        <p></p>
     </div>
   </template>
  <script>
  import HelloWorld from './componets/HelloWorld.vue'
   export default {
       name:'App',  //组件名称
       //引入的其他组件
       components:{  
           HelloWord
       },
       data:function(){
           return{
            value:"",
           }
       }
       //函数调用时必须加括号
     methods:{
         handel:()=>{
            return "这是handel函数"
         }
     }
     //属性调用（将函数作为一个属性）
     //computed 内的函数必须有一个return 
     computed:{
         handle2:()=>{
             return "这是handle2函数"
         }
     },
     //监听属性值的变化
     watch:{
       value:function(newVal,oldVal){

       }     
     }
   }
  
  </script>
  <style>
   #app{
       color:"red";
       font-size:12px;
   }
  </style>
  
 ```
 ### 参数传递

 ```javascript
   <template>
     <Component title="组件一"></Component>
      <Component title="组件二"></Component>
       <Component title="组件三"></Component>
   </template>
   <script>
   
      export default {
          name:'Component',
          data:function(){
              return {
                  count :0
              },
          },
          methos:{
              handle:()=>{
   
              }
          },
          props：["title"]
      }
   
   </script>
 ```
 ## 事件与指令
 ```javascript
 // 绑定  v-bind
  // class 与 style 绑定
     <div v-bind:class="ClassName"> </div>
      <div v-bind:class="{active：isactive}"> </div>
       <div v-bind:class="[ClassName1,ClassName2]"> </div>
     
     //v-if 条件指令  判断是否进行渲染
     <div v-if="ok">
         It is Ok
     </div>
      <div v-else>
         It is No
     </div>
     //  v-else 元素必须紧跟与 v-if或v-else-if的元素之后
 ```
  ```javascript
  //列表渲染 v-for
    <ul> 
      <li v-for="(item,index) in arry">
         {{item.name}}
      </li>
    </ul>
    arry=[{
        name:'小明'
    },{
        name:'大明'
    }]
    //常用形式  利用v-for渲染列表 必须绑定有  key="attribute(属性)"
     <ul> 
      <li v-for="item in items" v-bind:key="item.id">  
         {{item.name}}
      </li>
    </ul>
 
 ```
 ```javascript
    //常用标签
    // <img :src="" \alt>   img标签在vue中与在html中有区别
 ```


 ## 路由
  ### 安装 
  ```
  npm  install vue-router --save
  ```

  ### 使用
  ```javascript
 import VueRouter from 'vue-router';
 import Vue from 'vue'
 import Home from './Home.vue';

  Vue.use(VueRouter);
   var router =new VueRouter({
       path:'/home',   //接口
       component: Home,   //组件
   })
   export default router
  ```

 

  ### 路由参数
   ```javascript
   //  /接口：id
     <template>
        <div>
          <router-link to="/page/1">文章1</router-link>
          <router-link to="/page/2">文章2</router-link>
           <router-view></router-view>            {/*显示组件*/}
        </div>
        
     </template>
      var router = new VueRouter(
     {
      path:'/page:id',
      component:Page
     },
     )
   ```   
   ```javascript
    // <router-link :to="{path:'/link'+item.url}">文章1</router-link>
   ```
   ```javascript
     // $route  $router

       this.$route 
       //包含类似于React中的路由参数  Routeprops  （history location pramas ...）
       this.$router 
       // 包含关于 VueRouter实例的参数

     
   ```
  ### 路由跳转
    ```javascript
    import Page from './Page.vue';
    import None from './None.vue';

      var router = new VueRouter(
     {
      path:'/page:id',
      component:Page
     },
     {
         path:'/jump',
         redirect:'/back', //重定向
     }，
     {
         path:'*',
         component : None ,   //类似于React中的Switch组件  必须写在最后面
     }
     )

     
    ```
    ```javascript
    //  运用栈进行跳转路由
     export default {
         name: 'Strack',
         methods:{
             push:function(){
                 this.$route.push()    //添加栈进行跳转
             },
             relace:function(){
                 this.$route.replace()   //重命名栈进行跳转
             },
             go:function(){
                 this.$route.go(-index)   //根据当前的栈判断返回前index个栈
             }
         }
     }

    ```

  ### 路由嵌套

  ```javascript
  import Component from './Component.vue'
    <template>
       <div>
        <route-link to="/inserRoute:id/inserone">one</route-link>
         <route-link to="/inserRoute:id/insertwo">two</route-link>
       </div>
    </template>
    var router = new VueRouter({
        path:'/inserRoute:id',
        component:Component,
        children:[
            {
                path:'inserone',
                component:childcomponentOne,
            },
             {
                path:'insertwo',
                component:childcomponentTwo,
            },
        ]
    })
  ```