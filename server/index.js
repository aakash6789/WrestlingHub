// import {express} from express;
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Great going!")
})
app.listen(3000, () => console.log('Server listening on port 3000!'));
//server on 3000 client on- 
//60% done just 40 more to go
//aaksh1456c@ id for mongodb