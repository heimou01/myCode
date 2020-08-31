# 反向代理（Nginx)
## 概述
 >反向代理指用户端口与服务器端口之间添加一个代理服务器，代理服务器与服务器可以看做一个整体。

## nginx基本操作
### 命令窗口
### 1.运行：打开cmd在正确路径中运行nginx
### 2.测试：打开localhost：80查看是否运行成功
---
### start nginx      启动nginx
### nginx -s reload  重启nginx
### nginx -s nginx   关闭nginx
### 配置文件：nginx.conf，更改配置操作在改文件中进行。
---
## pm2多进程操作
### 依赖包：pm2
### 安装：npm install pm2 -g
---
### 基本操作
### npx pm2 start app.js --name myapp //开启进程
### npx pm2 list       //查看进程列表
### npx pm2 delete 0   //关闭[0]进程
### npx pm2 delete all //关闭全部进程
### npx pm2 reload 0   //跟新[0]进程

## 具体示例
```html
<!-- index.html -->
  <a href="http：//localhost:3001"></a>
  <a href="http：//localhost:3002"></a>
  <!--端口3001 3002 分别对应端口4000 5000 -->
```
```javascript 
// 配置客户端服务器
const express =require('express');
const app=express();
app.get('/',(req,res)=>{
   res.sendFile('./xxxx/index.html')
})
app.listen(3000)
```
```javascript
//配置后端服务器demo1
const express =require('express');
const app=express();
app.get('/',(req,res)=>{
   res.send('this is sever demo1')
})
app.listen(4000)
```
```javascript
//配置后端服务器demo2
const express =require('express');
const app=express();
app.get('/',(req,res)=>{
   res.send('this is sever demo2')
})
app.listen(5000)
```
```conf
#代理服务器配置

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       3001;
        server_name  localhost;
        location / {
            proxy_pass http://localhost:4000;
        }
        
        #代理服务器端口3001 对应后端端口4000
        
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    server {
        listen       3002;
        server_name  localhost;
        location / {
            proxy_pass http://localhost:5000;
        }

        #代理服务器端口3002 对应后端端口5000

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
   
}

```










