const fs = require("fs");

function readHelper() {
  return new Promise((resolve) => {
    fs.readFile('assignments\\week-2\\01-async-js\\easy\\file.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log("wrong filepath entered");
      }
      else {
        resolve(data);
      }
    });
  })
}


readHelper().then((data) => {
  let processesData = "", temp = "";
  // console.log(data.length);
  let fl = 1;
  for (let i = 0; i < data.length; i++) {
    if (fl) {
      temp += data[i];
      if (data[i] == " ") {
        processesData += temp;
        fl = 0;
        temp = "";
      }
    }
    else {
      if (fl == 0) {
        if (data[i] != " ") {
          temp += data[i];
          fl = 1;
        }
      }
    }
    if ((i == data.length - 1) && processesData != " ") {
      processesData += temp;
    }
  }

  fs.writeFile('assignments\\week-2\\01-async-js\\easy\\file.txt', processesData, ()=>{});
  console.log("success");
});