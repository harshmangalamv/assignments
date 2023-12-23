const fs = require("fs");

const txt = "we could be heroes, we could be";

fs.writeFile('assignments\\week-2\\01-async-js\\easy\\file.txt', txt, ()=>{
  console.log("success");
});