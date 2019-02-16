const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
  //console.log('In another Middleware ');
  res.sendFile(path.join(__dirname,'../','views','add-product.html'));//Allows us to send a response
});

router.post('/add-product',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/')
});

module.exports = router;