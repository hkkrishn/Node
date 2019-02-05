var count = (arr) => {
 return `There are ${arr.length} elements in this array`
}

var adder = (a,b) =>{
  return `The sum of ${a} and ${b} is ${a+b}`
}

console.log(count([1,2,4,5]));

module.exports.count = count;
module.exports.adder = adder;