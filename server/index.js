
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const dotenv = require('dotenv');
dotenv.config();
app.get('/',(req,res)=>{
    res.send("Great going!");
})
const port=process.env.PORT;
app.listen(port, () => console.log('Server listening on port 3000!'));
//server on 3000 client on- 
//60% done just 40 more to go
//aaksh1456c@ id for mongodb