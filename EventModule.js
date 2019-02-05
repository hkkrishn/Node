var events = require('events');
var util = require('util');

class Person extends events.EventEmitter{
  constructor(name) {
    super();
    this.name = name;
  }
}

var hari = new Person('Hari');
var arthur = new Person('Arthur');
var teresa = new Person('Teresa');

var ppl = [hari,arthur,teresa];

ppl.forEach((person)=>{
  person.on('speak',(message)=>{
    console.log(`${person.name} said: ${message}`);
  })
});

hari.emit('speak','FUCK YOU');
arthur.emit('speak','EEEEEEAULETSGOBOOOOYS');
teresa.emit('speak','GATOO');


// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent',(message)=>{
//   console.log(message);
// });
// myEmitter.emit('someEvent','dingle');


