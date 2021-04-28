function getConsole() {
  return console;
}

function getFunction(fname, a = globalThis) {
  return(a[fname]);
}

const fs = (getFunction("require"))("fs");

let p = (getFunction("readFileSync",fs))("./potato.png");

function main() {
  let var1 = "";
  let var2 = "";
  
  (getFunction("readFile",fs))('./hi', 'utf8' , (err, data) => {
    if (err) {
      let c = (getFunction("getConsole"))()
      (getFunction("error",c))(err)
      return
    }
    var1 = data;
    (getFunction("readFile",fs))('./hi2', 'utf8' , (err, data) => {
      if (err) {
        let c = (getFunction("getConsole"))()
        (getFunction("error",c))(err)
        return
      }
      var2 = data.substring(0, data.length-1);
      getFunction("log",(getFunction("getConsole"))())((var2.replace(var2, var1))+" "+(var1.replace(var1, var2)+"!"));
    })
  })
}

(getFunction("main"))();
