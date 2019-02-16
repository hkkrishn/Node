const path = require('path');
const express = require('express');
const rootDir = require('../helper/path')
const router = express.Router();
//mini express app

router.get('/',(req,res,next)=>{
  //console.log(req.body);
  res.sendFile(path.join(rootDir,'views','shop.html'))
 
});

module.exports = router;