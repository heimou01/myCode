const express = require("express");
const bodyParser = require("body-parser");
const router =express.Router() ;
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/login',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
     var {username,password}=req.body
     if(username=="admin"&&password=="admin"){
         res.status(200).send("登录成功")
         
     }
  
})


module.exports=router