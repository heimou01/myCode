var mongodb=require('mongodb')
var mongoControl=require('./mongoControl')
const mongodbUrl='mongodb://127.0.0.1:27017'
var ObjectId=mongodb.ObjectID
var ListData=new mongoControl('List','list-item')  
var swipers=new mongoControl('pictures','imgs')

var ClassifyData=new mongoControl('Classify','classify_item')

var shopCarData=new mongoControl('shopcar','items')


shopCarData.find({},(err,res)=>{
  console.log(res)
})