const express=require('express')
const path=require('path')

const app=express()

const serverport=process.env.PORT || 242

app.use('/public',express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send("hello from backend")
})


app.listen(serverport,()=>console.log("lol"))

