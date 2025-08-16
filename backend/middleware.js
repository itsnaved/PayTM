const jwt= require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

const authMiddleware=(req, res, next)=>{
     const authHead= req.headers.authorization;

     if(!authHead || !authHead.startswith('Bearer ')){
        return res.status(403).json({});
     }

     const token= authHead.split(' ')[1];

     try {
        const decoded= jwt.verify(token, JWT_SECRET);

        if(decoded.userId){
        req.userId= decoded.userId;
        next();
        } else{
        return res.status(403).json({});
        }
        
     } catch (error) {
        return res.status(403).json({});
     }
};

module.exports={
    authMiddleware
}