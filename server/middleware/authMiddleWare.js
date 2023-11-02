import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
// import cookieParser from 'cookie-parser';

const authMiddleWare=(req,res,next)=>{
    const token=req.cookies;
    console.log(typeof(token));
    // const {token}=req.body;
    console.log(token);
  if(!token){
    console.log("No token present");
  }
  else{
  jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
      if(err){
        console.log(err);
      }else{
        console.log(decodedToken);
        res.status(200).json('All good');
        next();
      }
  })
}
}
export default authMiddleWare;