const expess=require('express')
const app=expess()

app.use('/',require('./index'))
app.use('/admin',require('./admin'))
app.listen(4000)