const path = require('path');
const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product',(req,res,next)=>{
  //console.log('In another Middleware ');
  res.sendFile(path.join(__dirname,'../','views','add-product.html'));//Allows us to send a response
});

router.post('/add-product',(req,res,next)=>{
  products.push({title:req.body.title})
  res.redirect('/')
});

exports.routes = router;
exports.products = products;
