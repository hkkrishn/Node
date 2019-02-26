const path = require('path');
const express = require('express');
const rootDir = require('../helper/path')
const router = express.Router();
const adminData = require('./admin');
//mini express app

router.get('/',(req,res,next)=>{
  const products  = adminData.products;
  const description = adminData.description;

  res.render('shop',{
    prods:products,
    pageTitle:'Shop',
    path:'/',
    hasProducts:products.length>0,
    activeShop: true,
    productCSS:true
  });
 
});

module.exports = router;