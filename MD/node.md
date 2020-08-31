# Node.js
## 1. fs模块(File system)
```javascript
//1.简单文件操作
//2.复杂文件操作
//3.文件夹操作
//4.文件/文件夹通用
//5.文件监听
//6.文件流
//append 追加到文件
//copyFile 复制一个文件到另一个文件
//readFile 读取文件全部内容
//writeFile 写入文件（文件存在则会覆盖）
```
```javascript
const fs=requeir('fs')
```
### 检测是目录还是文件
```javascript
const fs=requeir('fs')
fs.stat('文件/目录'，(err,stats)=>{
  if(err){
      console.log(err)
  }else{
         console.log(stats);
         console.log(`文件：${stats.isFile()}`)
         console.log(`目录：${stats.isDirectory()}`)
  }
})
```
### 创建目录

```javascript
fs.mkdir('目录名称',(err)=>{

})
```
### 写入文件
```javascript
fs.writeFile('写入的文件名'，(err)=>{

})
```
### 写入追加文件
```javascript
fs.appendFile('追加文件名',(err)=>{

})
```
### 读取文件
```javascript
fs.readFile('要读取的文件名','utf-8',(err,data)=>{

})

```
### 读取目录
```javascript
fs.readdir('要读取的目录名',(err,data)=>{

})
```
### 重命名
```javascript
fs.rename('旧文件名','新文件名',(err)=>{

})
```
### 删除目录
```javascript
fs.rmdir('目录名'，(err)=>{

})
```
### 删除文件
```javascript
fs.unlink('文件名'，(err)=>{

})
```
### 复制文件
```javascript
fs.copyFile('文件1','文件2'，(err)=>{

})

```
### 文件监听
```javascript
fs.watch('路径',function(event,filename){
  
})
```
### 数据流
### 1. 从文件中读取数据流
```javascript
var Filestream=fs.createReadStream('文件名')
var str=''
Filestream.on('data',(chunk)=>{
str+=chunk
})
Filestream.on('end',()=>{
  console.log(str.toString())
})
```
### 2. 以文件流写入文件
```javascript
var fileWriteStream=fs.creatWriteStream('文件名')
var str='写入的数据'
fileWriteStream.write(str,'utf-8')
fileWriteStream.end()
fileWriteStream.on('finish',()=>{

})
```
### 管道流
```javascript
var readFile=fs.creatReadStream('文件名1')
var writeFile=fs.creatWriteStream('文件名2')
readFile.pipe(writeFile)
``` 
## 2.url模块
```javascript
const url=requeir('url')
```
### 解析地址
```javascript
var baseurl='www.baidu.com/?wd=node'
var obj=url.parse(baseurl)
```
### 生成地址
```javascript
var url1=url.format(obj)
```
### 拼接地址
```javascript
var url01='www.baidu.com'
var url02='/?wd=node'
var allurl=url.resolve(url01,url02)
//以浏览器打开超链接的方式拼接字符串
//url.resolve('http://www.baidu.com/16565','asfaf')=>
//http://www.baidu.com/asfaf
```
## 3.path模块
```javascript
const path=requeir('path')
```
### 路径解析
```javascript
var obj=path.parse('文件路径')
var pathObj=path.parse('C:/Users/PC/Desktop/2019-10-19/10-19/demol.js')
```
### 返回路径字符串
```javascript
var accept=path.format('obj')

```
### 拼接返回绝对路径
```javascript
var str=path.resovle('文件名')
```
### 拼接返回相对路径
```javascript
var str=path.join('字符串1','字符串2')
var str=path.join('./','index.js')
```
## 4.querystring模块
```javascript
const queryString=requeir('querystring')
```
### 解析query
```javascript
var strurl='www.baidu.com/?wd=node&&user=eward'
var queryObj=queryString.parse(url.parse(strurl).query)

```
### 生成query
```javascript
var query=queryString.stringify('queryObj')
```
### 编码
```javascript
var espaceQuery=queryString.espace(query)
```
### 解码
```javascript
var unespaceQuery=queryString.unespace(espaceQuery)
```
## 5. http模块
```javascript
const http=require('http')
const request=require('request')
request('https://baidu.com',{
  headers:{

  },

},function(err,res,body){
  console.log(body)
})
```
### 创建服务器
```javascript
var sever=http.creatSever((req,res)=>{
  if(req.url=='/'){
    res.WriteHead(200,{'Conten-Type':'text/html;charset=utf-8'})
    res.Write('数据')
    res.end()
  }
})
sever.listen(端口)
sever.listen(3000)
```
## 6.express模块 
安装包语句：**npm install express --save**
```javascript
const express=require('express')
var app=express() //初始化
app.use(express.static('获取的文件')) // 静态文件获取
app.get('/',(req,res)=>{
  res.sentFile('文件名')  // 发送文件
})
app.listen(端口)
```