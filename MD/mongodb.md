# mongodb 
```javascript
const mongodb=require('mongodb')
var mongoClient=mongodb.MongoClient
const ObjectId=mongodb.ObjectId

const mongodbUrl='mongodb://127.0.0.1:27017'
MongoClient.connect(mongoUrl,function(err,client){
    if(err){
        console.log(err)
        return 
    }
    var db=client.db('test')    //创建库
    db.collection('user')      //创建集合
    client.close()
})


```

```javascript

MongoClient.connect(mongoUrl,function(err,client){
    if(err){
        console.log(err)
        return 
    }
    var db=client.db('test')   
    var user= db.collection('user')     
    //添加
    user.insert({name:'sss'},function(err,result){

    })
    //查找
    user.find({}).toArry(function(err,result){

    })
    //修改
      user.update({name:'xxx'},{$set:{name:'yyy'}},function(err,result){

      })
    //删除
    user.remove({_id:Objectid(id)},function(err,result){

    })
})


```