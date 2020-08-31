# Webpack
## 环境安装
### npm install webpack -dev--save
## 初始化package.json
 ### npm init -y     初始化一个package.json文件
 ### 运行         npx webpack --watch
## 插件
 ### 命令行工具    npm install -D webpack-cli
 ### 浏览器插件（自动刷新自动编译） npm install webpack-dev-server
 ### 自动删除多余文件  clean-webpack-plugin
 ### html文件插件  html-webpack-plugin
 ### 编译css文件   css-loader style-loader
 ### 编译图片文件  file-loder
 ### 编译less文件  less-loader   (必须与 css-loader style-loader 一起使用才会生效)
 ## 指令
 ### 运行（打包）： npx webpack --watch
 ### 浏览器打开： npx  webpack-dev-server --open --port 端口号（默认8080）

 ## webpack.config.js文件配置
 ### 关键字
  1. entry: 入口文件
  2. output: 出口文件
  3. plugins：插件
  4. moudle：模块

### entry
```javascript
//入口文件
module.exports={
   entry:{
       filename:filepath     //文件名：文件路径
       //入口文件可为多个文件
   }
}
```
### ouput
```javascript
module.exports={
  output:{
      filename:'文件名称',   //多文件输出  filename: [name]+bandel.js
      path:'输出路径'
  }

```
```javascript
module.exports={
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',    //插件
            title:'hello'
        })
    ]
}

```
### 模板
```javascript
// webpack.config.js
module.exports={
    entry:{
       index:path.resolve(__dirname,'./src/index.js'),
       console:path.resolve(__dirname,'./src/index2.js')
    },
    output:{
       filename:'[name]_bandle.js',
       path:path.resolve(__dirname,'./dist')
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'hello'
        })
    ],
    module:{
        rules:[
           {
               test : /\.css$/,
               use:[
                   "file-loader",
                   "css-loader"
               ],
           },
           {
             test:/\.less$/,
             use:[
                "less-loader",
                "css-loader",
                "style-loader"
            ],
           },
           {
               test:/\.(jpg|png|svg|gif)$/,
               use:[
                   "file-loader"
               ]
           }

        ]
    }
}
```