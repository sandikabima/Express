const express = require('express')
const router = require('./router')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use('/', router)

app.listen(port, ()=>{
    console.log('Example app listening on port', port)
})