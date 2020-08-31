//前台服务器

const expess=require('express')
const app=expess()
var mongodb=require('mongodb')
var ObjecId=mongodb.ObjectID
var mongoControl=require('./mongoControl')
const router=expess.Router();
var shopListData=new mongoControl('shopList','shop-item')  //商品数据
var ListData=new mongoControl('List','list-item')          //首页列表数据
//var swipers=new mongoControl('pictures','imgs')      //轮播图数据
var ClassifyData=new mongoControl('Classify','classify_item')    //分类列表数据
var bodyParser=require('body-parser')
var shopCarData=new mongoControl('shopcar','items')  //购物车数据库
  

router.use(bodyParser.urlencoded({extended:false}))

router.get('/list',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
   
   ListData.find({},(err,result)=>{
       if(err){
           res.status(404).send("列表信息不存在")
       }else{
           res.send(result).status(200)
       }
   })

})


router.post('/listshop',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    console.log(req.body)
    var {classify}=req.body
    ClassifyData.find({classify:classify},(err,result)=>{
        if(err){
            res.send('列表信息不存在').status(404)
        }else{
            res.send(result).status(200)
        }
    })
})


router.post('/shops',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    var {id}=req.body
    ClassifyData.findById(id,(err,result)=>{
        if(err){
            res.send('商品信息不存在').status(404)
        }else{
            res.send(result).status(200)
        }
    })
   

})

router.post('/toshopcar',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    var {id}=req.body
    ClassifyData.findById(id,(err,result)=>{
        if(err){
            res.send('数据库错误').status(404)
        }else{
            res.send(result).status(200)
        }
    })
   
})
router.post('/shopcar',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    console.log(req.body)
    var data=req.body
    shopCarData.insert(data,(err,result)=>{
        if  (err){
            res.send('数据错误').send(404)
        }else{
            res.send(result).status(200)
        }
    })

})
router.get('/shopcar',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    shopCarData.find({},(err,result)=>{
        if  (err){
            res.send('数据错误').send(404)
        }else{
            res.send(result).status(200)
        }
    })
})
module.exports=router