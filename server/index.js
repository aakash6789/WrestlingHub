
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { wwestars } from './data/index.js';
import Star from './models/SuperStar.js';
import starRoutes from './routes/SuperStar.js';
import getSuperStar from './controllers/SuperStar.js';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app=express();
dotenv.config();
// app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
// const corsOptions = {                      //
//     origin: 'http://localhost:5173',
//     methods:'GET,POST,PATCH,PUT'       //
    
// }; 
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/assets",express.static(path.join(__dirname,'public/assets')));
app.get('/',(req,res)=>{
    // res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.send("Great going!");
})
app.use('/superstar',starRoutes);
//DB CONNECTION
const port=process.env.PORT;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
app.listen(port, () => console.log('Server listening on port 3000!'));
Star.insertMany(wwestars);
}).catch((error)=>console.log(`${error}: DB did not connect`));
//server on 3000 client on- 
//60% done just 40 more to go
//aaksh1456c@ id for mongodb