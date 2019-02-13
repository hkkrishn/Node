//creating a node server
const http = require('http');
const routes = require('./routes')
//request listener is a function that runs for every requests
//callback server
 var server = http.createServer(routes);
server.listen(3000);
//starts the process will keep this running for incoming requests
//looping for requests


