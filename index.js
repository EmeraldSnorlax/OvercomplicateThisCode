function getFunction(fname, a = globalThis) {
  let b = a[fname];
  if (typeof b == "function") {
    return b;
  }
}

const fs = require("fs");

let p = fs.readFileSync('./potato.png');

function main() {
  let var1 = "";
  let var2 = "";
  
  fs.readFile('./hi', 'utf8' , (err, data) => {
    if (err) {
      getConsole().error(err)
      return
    }
    var1 = data;
    fs.readFile('./hi2', 'utf8' , (err, data) => {
      if (err) {
        getConsole().error(err)
        return
      }
      var2 = data.substring(0, data.length-1);
      getConsole().log((var2.replace(var2, var1))+" "+(var1.replace(var1, var2)+"!"));
    })
  })
}

main();
