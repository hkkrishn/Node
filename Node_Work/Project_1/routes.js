const fs = require('fs');
const userList = [];

const requestHandler = (req,res)=>{
  console.log(req.url)
  const url = req.url;
  const method = req.method;
  if(url === '/'){
    res.write('<html>')
    res.write('<head><title> Enter Document</title></head>')
    res.write('<body><h1> Hari says Hello</h1><br><h1>Enter Users</h1><form action = "/users" method = "POST"><input type = "text" name = "users"><button type = "submit">Send</button></form></body>')
    res.write('</html>')
     return res.end();
   }
  
   if(url === "/users" && method === 'POST'){
      const users = [];
      req.on('data',(chunk) => {
        users.push(chunk);
      });
      req.on('end',()=>{
        const parseUsers = Buffer.concat(users).toString();
        console.log(parseUsers);
        const user = parseUsers.split('=')[1];
        userList.push(user);
        fs.writeFile('users.txt',user,(err)=>{
          res.statusCode = 302;
          return res.end();
        });
      });
   }else if(url === "/list" ){
    res.write('<html>')
    res.write('<head><title> My First Page</title></head>')
    res.write('<body><h1>User List!</h1><br><form method="get" action="/user"><button type="submit">Continue</button></form></body>')
    res.render(<script>userList.forEach(item)=>{console.log(item)}</script>)
    res.write('</html>')
   }

   console.log(userList);
   res.write('<html>')
   res.write('<head><title> My First Page</title></head>')
   res.write('<body><h1>User Submitted!</h1><form action="/list"><button type="submit">Continue</button></form></body>')
   res.write('</html>')
   res.end();
  
  
  
}
module.exports = requestHandler;