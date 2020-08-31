const express =require('express')
const bodyParser=require('body-parser')
const mongodb=require('mongodb')
const mongoControl=require('../sever/mongoControl')
var PersonDate=new mongoControl('persons','item')

const app=express()


app.use(bodyParser.urlencoded({extended:false}))

app.get('/getAllpersons',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    PersonDate.find({},(err,result)=>{
         if(err){
             res.status(404).send('数据错误，找不到联系人信息')
         }else{
             res.status(200).send(result)
         }
    })
})
app.post('/details',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    var {id}=req.body
    console.log(id)
    PersonDate.findById(id,(err,result)=>{
       if(err){
           res.status(500).send('服务器错误')
       }else{
           res.status(200).send(result)
           
       }
    })
})
app.post('/search',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    var {PhoneNum}=req.body
    //  if(name){
    //      PersonDate.find({name:name},(err,result)=>{
    //          if(err){
    //              res.status(404).send('找不到该联系人')
    //          }else{
    //              res.status(200).send(result)
    //          }
    //      })
    //  }
     if(PhoneNum){
        PersonDate.find({phoneNum:PhoneNum},(err,result)=>{
            if(err){
                res.status(404).send('找不到该联系人')
            }else{
                res.status(200).send(result)
               console.log(result)
            }
        })
     }
})
app.post('/addPerson',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
      var {name,phoneNum,address}=req.body
      PersonDate.insert({name:name,phoneNum:phoneNum,address:address},(err,result)=>{
          if(err){
               res.status(500).send('服务器错误')
          }else{
              res.status(200).send('新增联系人成功')
          }
      })
})
app.post('/deletePerson',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
      var {name}=req.body
      PersonDate.remove({name:name},(err,result)=>{
          if(err){
              res.status(500).send('服务器错误')
          }else{
              res.status(200).send('删除联系人成功')
          }
      })
})
app.post('/changePerson',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
   console.log(req.body)
    var {id,name,phoneNum,address}=req.body
    PersonDate.findById(id,(err,result)=>{
        if(err){
            res.status(500).send('服务器错误')
        }else{
            console.log(result)
           PersonDate.update(result[0],{name:name,phoneNum:phoneNum,address:address},(err,result)=>{
               if(err){
                   console.log('数据错误,修改失败')
               }else{
                   res.status(200).send('修改联系人信息成功')
               }
           })
           
        }
    })
   
})
app.post('/findone',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')   
    var {id}=req.body
    PersonDate.findById(id,(err,result)=>{
        if(err){
            res.status(500).send('服务器错误')
        }else{
            res.status(200).send(result)
        }
    })
       
})
console.log('sever run succeed')
app.listen(3001)