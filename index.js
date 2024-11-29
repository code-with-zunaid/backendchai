const express = require('express')
const app = express()
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

const port=4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter',(req,res)=>{
    res.send('this  is twiter social media :')
    console.log("this is twiter :");
})
app.get('/facebook',(req,res)=>{
    res.send('this is the facebook here you can post your ideas');
})

app.get('/youtube',(req,res)=>{
    res.send('this is video plateform')
})

app.get('/login',(req,res)=>{
    res.send('<h1>zunaid you are login</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})