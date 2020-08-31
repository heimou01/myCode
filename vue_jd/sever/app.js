var  express =require("express");
var app=express();
app.use("/",require('./index'))
app.use("/admin",require('./admin'))
app.listen(4001);