//前台服务器
var express=require('express');
var mongoControl=require('./mongoControl');
var mongodb=require('mongodb');
var bodyParser=require('body-parser');
var router=express.Router();
router.use(bodyParser.urlencoded({ extended: false }));


//数据库
var HomeListData=new mongoControl("Home_list",'list')            //首页列表数据
var shopsDatas=new mongoControl('Vue_shops','shops');            //商品列表数据
var  shopsCarData=new mongoControl('Vue_shopcar','shops_items')  //购物车数据
var swiperData =new mongoControl('Swiper_Data','pictures')       //轮播图数据
var BottomIcon=new mongoControl('Bottom_Icon','item')      //底部导航图标

//接口
//   / 首页   /classifiton 分类   /shopCar   购物车    /addShops 添加到购物车  

//  /swiper 拉取轮播图数据
router.get('/swiper',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    swiperData.find({},(err,result)=>{
        if(err){
            res.status(404).send("Not Found")
        }else{
            res.send(result)
        }
    })
})
//  /classify  首页商品分类列表数据
router.get('/classify',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    HomeListData.find({},(err,result)=>{
        if(err){
            res.status(404).send("Not Found")
        }else{
            res.send(result)
        }
    })
})
router.get('/bottomNav',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    BottomIcon.find({},(err,result)=>{
        if(err){
            res.status(404).send("Not Found")
        }else{
            res.send(result)
        }
    })
})
router.get('/shoplist',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    shopsDatas.find({},(err,result)=>{
        if(err){
            res.status(404).send("Not Found")
        }else{
            res.send(result)
        }
    })
})
router.post('/shops',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    var {name}=req.body
    shopsDatas.find({classify:name},(err,result)=>{
        if(err){
            res.status(404).send("Not Found")
        }else{
            res.send(result)
        }
    })
})
router.post('/getshops',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    var {id}=req.body
    shopsDatas.findById(id,(err,result)=>{
        if(err){
            res.status(404).send("Not Found")
        }else{
            res.send(result)
            console.log(result)
        }
    })
})
router.post('/addcar',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    var {id}=req.body
    shopsDatas.findById(id,(err,result)=>{
       var shops =result[0]
       var {classify,name,price,info,url} =shops
       var obj={
           classify:classify,
           name:name,
           url:url,
           price:price,
           info:info
       }
       shopsCarData.insert(obj,(err,result)=>{
        if(err){
            res.status(404).send("Not Found")
        }else{
            res.send('ok')
        }
       })
    })
})
router.get('/getshopscar',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
 
    shopsCarData.find({},(err,result)=>{
        if(err){
            res.status(404).send("Not Found")
        }else{
            res.send(result)
        }
    })
})
router.post('/getshopscar',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    var {id}=req.body
    shopsCarData.findById(id,(err,result)=>{
        if(err){
            res.status(404).send("Not Found")
        }else{
            res.send(result)
        }
    })
})
console.log('serve run successd')
module.exports=router