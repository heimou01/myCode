const mongodb=require('mongodb')
const mongoControl=require('./mongoControl')

var PersonDate=new mongoControl('persons','item')

// var obj ={
//     name: '中国移动',
//     phoneNum: '10086',
//     address: '中国移动营业厅'
// }

// PersonDate.insert(obj,(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })




// PersonDate.removeById('5f1ff7f13b10c730447eee67',(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })
// PersonDate.update({name:'张胜男'},{name:'张三'},(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })
PersonDate.find({},(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})