require("dotenv").config();

const express=require('express')
const app=express()
const port=5000
const router=require('./Router/productRoutes')


app.get('/',(req,res)=>{
    res.send('hello!')
})

app.use(express.json())
app.use('/api/products/',router)

app.listen(port,()=>{
    console.log(`server started in ${port}`)
})