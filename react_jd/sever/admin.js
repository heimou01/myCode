//后台服务器 
const express=require('express')
const app=express()
const router=express.Router();
var bodyParser=require('body-parser')
router.use(bodyParser.urlencoded({extended:false}))
var mongodb=require('mongodb')
var  mongoControl =require('./mongoControl') 
var ClassifyData=new mongoControl('Classify','classify_item')



router.post('/login',(req,res)=>{
    console.log(req.body)
    res.setHeader("Access-Control-Allow-Origin",'*')
    var {username,password}=req.body
    if(username=='admin'&&password=="123"){
        res.send("ok").status(200)
    }
})


router.post('/addshop',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    console.log(req.body)
    
    // ClassifyData.insert(req.body,(err,result)=>{
    //     if(err){
    //         res.send('发布商品失败')
    //         return
    //     }else{
    //          res.send(result).status(200)
    //     }
    // })
     
})

module.exports=router