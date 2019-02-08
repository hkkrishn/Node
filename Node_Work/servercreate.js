//creating a node server
var fs = require('fs');
const http = require('http');
//request listener is a function that runs for every requests
//callback server
 var server = http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  //process.exit();
});
server.listen(3000);
//starts the process will keep this running for incoming requests
//looping for requests


