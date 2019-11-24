const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/register',(req,res,next)=>{
  var username = req.body.username;
  var password = req.body.password;
  if(username&&password){
    const token = jwt.sign({username:username}, process.env.SECRET_KEY,{expiresIn:60*10});
    res.status(200).json({
      status: true,
      token: token
    })
  }else{
    res.status(400).json({
      status: false,
      message: 'username or password is undefined'
    })
  }
});

module.exports = router;