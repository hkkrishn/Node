const http = require('http');

const express = require('express');



//create express application
const app = express();

app.use('/meeka',(req,res,next)=>{
  console.log('Dingle is Ready to Mingle');
  res.send('<img src="https://images.unsplash.com/photo-1520848315518-b991dd16a625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"><br><h1>Dingle is Ready to Mingle</h1>');//Allows us to send a response
});
app.use('/boo',(req,res,next)=>{
  console.log('In another Middleware ');
  res.send('<img src="https://i.pinimg.com/236x/3d/ef/68/3def680d7d5fd813bd727739c79cc9f6--husky-pups-hilarious.jpg"><br><h1>Boo!</h1>');//Allows us to send a response
});
const server = http.createServer(app);
server.listen(3000);