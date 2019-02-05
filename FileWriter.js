//file writing core modules
var fs = require('fs');
//typical naming convention
//fs module
//reading and files method it a synchronous method it has to first read the file before it can go an do something else.
//Keep an eye for character encoding
// var readMe = fs.readFileSync('./README.txt','utf8');
var readMe = fs.readFile('./README.txt','utf8',(err,data)=>{
  if(err){
    console.log(err)
  } else{
    console.log(data);
    fs.writeFile('WRITEME.txt',data,(err,data)=>{
      console.log('done')
    });
  }

});

//console.log(readMe);
console.log('test')
//writing a file.
