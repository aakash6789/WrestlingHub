
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const dotenv = require('dotenv');
const cors=require('cors');
const morgan=require('morgan');
dotenv.config();
const corsOptions = {                      //
    origin: 'http://localhost:3000'   ,
    methods:'GET,POST,PATCH,PUT'       //
}; 
app.use(cors(corsOptions));
app.use(morgan("common"));
app.use(express.json());
  app.get('/',(req,res)=>{
    res.send("Great going!");
})
//DB CONNECTION
const port=process.env.PORT;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
app.listen(port, () => console.log('Server listening on port 3000!'));
}).catch((error)=>console.log(`${error}: DB did not connect`));
//server on 3000 client on- 
//60% done just 40 more to go
//aaksh1456c@ id for mongodb