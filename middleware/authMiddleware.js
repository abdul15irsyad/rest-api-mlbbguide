const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
  var token = req.headers.token;
  if(token){
    jwt.verify(token, process.env.SECRET_KEY,(err,decoded)=>{
      if(err){
        res.status(403).json({
          status: false,
          message: 'forbidden'
        });
      }else{
        next();
      }
    });
  }else{
    res.status(401).json({
      status: false,
      message: 'please provide a token'
    });
  }
}