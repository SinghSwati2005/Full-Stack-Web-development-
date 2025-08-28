const express = require ("express")
const { ftruncateSync } = require("fs")
require('dotenv').config()
const app = express()
const port =4000
app.get('/',(req,res)=>{
    res.send("hi")
})
app.get('/twitter',(req,res)=>{
    res.send('hi.com')
})

app.get('/login',(req,res)=>{
res.send('<h1> Please Login')
})

app.get('/api/jokes',(req,res)=>{
    const jokes =[{
        id: 1,
        title: 'funny',
        content : 'all is well' 
    },
    {
        id: 2,
        title: 'serious',
        content : 'do ur bit' 
    },
    {
        id: 3,
        title: 'sad',
        content : 'i cant tell what i can ' 
    },
      
    ];
    res.send(jokes);
});
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`);
    
})