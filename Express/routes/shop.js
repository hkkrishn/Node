const path = require('path');
const express = require('express');
const rootDir = require('../helper/path')
const router = express.Router();
const adminData = require('./admin');
//mini express app

router.get('/',(req,res,next)=>{
  console.log(adminData.products);
  //console.log(req.body);
  res.sendFile(path.join(rootDir,'views','shop.html'))
 
});

module.exports = router;