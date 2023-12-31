import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
// import cookieParser from 'cookie-parser';

const authMiddleWare=(req,res,next)=>{
    try {
        let token = req.header("Authorization");
    
        if (!token) {
          return res.status(403).send("Access Denied");
        }
    
        if (token.startsWith("Bearer")) {
          token = token.slice(7, token.length).trimLeft();
        }
    
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}
export default authMiddleWare;
//PERFECT dont play with it