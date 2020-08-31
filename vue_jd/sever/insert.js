var mongoControl =require('./mongoControl');
var mongodb=require('mongodb');
const { constants } = require('buffer');

var swiperData =new mongoControl('Swiper_Data','pictures')
var HomeListData=new mongoControl("Home_list",'list')     //首页商品分类列表
var BottomIcon=new mongoControl('Bottom_Icon','item')    //底部导航栏图标
var shopsDatas=new mongoControl('Vue_shops','shops');   //分类商品列表
var  shopsCarData=new mongoControl('Vue_shopcar','shops_items') //购物车数据






// shopsDatas.insert(obj,(err,result)=>{
//       if(err){
//           console.log(err)
//       }else{
//           console.log(result)
//       }
//   })


//  shopsCarData.remove({},(err,result)=>{
//       if(err){
//           console.log(err)
//       }
//       else{
//           console.log(result)
//       }
//   })
shopsCarData.find({},(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})
// shopsDatas.removeById('5f0d0e63bc8c9822209d921d',(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })