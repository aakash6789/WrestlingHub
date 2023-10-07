// import {express} from express;
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Great going!")
})
app.listen(3000, () => console.log('Server listening on port 3000!'));
//server on 3000 client on-