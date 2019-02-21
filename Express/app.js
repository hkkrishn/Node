
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const adminData = require('./routes/admin');
const userRoutes = require('./routes/shop');
//create express application
//add new middleware function takes 3 args
//next is a function that is passed by express.
//next arg is executed to allow the request to travel to the next middleware

//parser, registers a middleware  and call next and will do all the body parsing whcih is sent from a form.
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes);
app.use(userRoutes);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','error.html'))
  //res.redirect('/')
})

//remember that the express listen function already calls createServer(this)
app.listen(3000);