const mongodb=require('mongodb')
var mongoClient=mongodb.MongoClient
const mongodbUrl='mongodb://127.0.0.1:27017'
var ObjectId=mongodb.ObjectID

var MongoControl=function(dbname,collectName){
    this.dbname=dbname
    this.collectName=collectName
    this.insert=function(obj,callback){
        mongodb.connect(mongodbUrl,(err,client)=>{
            if(err){
                console.log(err)
            }else{
                var db=client.db(dbname)
                var collection=db.collection(collectName)
                collection.insert(obj,(err,result)=>{
                    callback(err,result)
                    client.close()
                })
            }
        })
    }
    this.find=function(obj,callback){
        mongodb.connect(mongodbUrl,(err,client)=>{
            if(err){
                console.log(err)
            }else{
                var db=client.db(dbname)
                var collection=db.collection(collectName)
                collection.find(obj).toArray((err,result)=>{
                    callback(err,result)
                    client.close()
                })
            }
        })
    }
    this.remove=function(obj,callback){
        mongodb.connect(mongodbUrl,(err,client)=>{
            if(err){
                console.log(err)
            }else{
                var db=client.db(dbname)
                var collection=db.collection(collectName)
                collection.remove(obj,(err,result)=>{
                            callback(err,result)
                            client.close()
                })
            }
        })
    }
    this.update=function(obj1,obj2,callback){
        mongodb.connect(mongodbUrl,(err,client)=>{
            if(err){
                console.log(err)
            }else{
                var db=client.db(dbname)
                var collection=db.collection(collectName)
                collection.update(obj1,{$set:obj2},(err,result)=>{
                    callback(err,result)
                    client.close()
                })
            }
        })
    }
    this.findById=function(_id,callback){
        mongodb.connect(mongodbUrl,(err,client)=>{
            if(err){
                console.log(err)
            }else{
                var db=client.db(dbname)
                var collection=db.collection(collectName)
                collection.find({_id:ObjectId(_id)}).toArray((err,result)=>{
                    callback(err,result)
                    client.close()
                })
            }
        })
    }
    this.removeById=function(_id,callback){
        mongodb.connect(mongodbUrl,(err,client)=>{
            if(err){
                console.log(err)
            }else{
                var db=client.db(dbname)
                var collection=db.collection(collectName)
                collection.remove({_id:ObjectId(_id)},(err,result)=>{
                    callback(err,result)
                })
            }
        })
    }
}

module.exports=MongoControl