const fs = require("fs");

fs.readFile('assignments\\week-2\\01-async-js\\easy\\file.txt', 'utf-8', (err, data) => {
  console.log(data);
  console.log("Error status: ");
  if(err){
    console.log("erro happens, check it");
  }
  else{
    console.log("wow, it went well");
  }
})

console.log("hello from the outside")
let sum = 0;
for(let i = 0; i<1e8; i++){
  sum += i;
}
console.log("hello from the outside2")
console.log(sum);