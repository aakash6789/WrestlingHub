
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { wwestars } from './data/index.js';
import Star from './models/SuperStar.js';
import starRoutes from './routes/SuperStar.js';
import authRoutes from './routes/RegisterAuth.js'
import getSuperStar from './controllers/SuperStar.js';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import { register } from './controllers/Auth.js';
import cookieParser from 'cookie-parser';
import authMiddleWare from './middleware/authMiddleWare.js';
import Comment from './models/Comment.js';
import { comments } from './data/index.js';
import commentRoute from './routes/CommentRoute.js'
import multer from "multer";
import bodyParser from 'body-parser';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app=express();
dotenv.config();
const uniqueSuffix = Date.now() + '-'; 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  // filename: function (req, file, cb) {
    
  //   cb(null, uniqueSuffix + '-' +path.extname(file.originalname))
  // }
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({ storage });
// app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
// const corsOptions = {                      //
//     origin: 'http://localhost:5173',
//     methods:'GET,POST,PATCH,PUT'       //
    
// }; 
app.use(express.urlencoded({extended:false}));
app.use(cors({ origin: 'http://localhost:5173', credentials: true })); 
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
// app.use("/assets",express.static(path.join(__dirname,'public/assets')));
app.use('/uploads', express.static('uploads'));
app.get('/',(req,res)=>{
    // res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.send("Great going!");
})
app.use('/comment',commentRoute);
app.use('/gmoat',authMiddleWare);
app.use('/superstar',starRoutes);
// app.post("/auth/register",upload.single('picture'), (req, res) => {
//   // Access the file through req.file
//   console.log(req.file);
//   // console.log(formData);
// });
app.post("/auth/register",upload.single('file'),register,(req,res)=>{
  console.log(req.file);
  console.log("file uploaded");
});
app.use('/auth',authRoutes);
app.get('/gmoat',authMiddleWare,(req,res)=>{
 res.status(200).json("Access granted");
})
//DB CONNECTION
const port=process.env.PORT;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
app.listen(port, () => console.log(`Server listening on port ${port} !`));
Star.insertMany(wwestars);
  Comment.insertMany((comments));
}).catch((error)=>console.log(`${error}: DB did not connect`));
// export default serverlessFunction;
//server on 3000 client on- 
//60% done just 40 more to go
