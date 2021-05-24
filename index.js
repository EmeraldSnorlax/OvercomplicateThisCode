let strings = {
  "a":"fs"
}

global.getConsole = () => {
  return console;
}

global.isTrue = (value) => {
  if (value) {
    return true
  }
  else return false
}

global.isFalse = (value) => {
  if (getFunction("isTrue",global)(value)) {
    return false
  }
  else return true
}

global.getString = (s) => {
  
}

global.getFunction = (fname,a) => {
  return(a[fname]);
}

const fs = require("fs");

function main() {
  let var1 = "";
  let var2 = "";
  
  (getFunction("readFile",fs))('./hi', 'utf8' , (err, data) => {
    if (getFunction("isTrue",global)(err)) {
      let c = (getFunction("getConsole",global))()
      (getFunction("error",c))(err)
      return
    }
    var1 = data;
    (getFunction("readFile",fs))('./hi2', 'utf8' , (err, data) => {
      if (getFunction('isTrue',global)(err)) {
        let c = (getFunction("getConsole",global))()
        (getFunction("error",c))(err)
        return
      }
      var2 = data.substring(0, data.length-1);
      getFunction("log",(getFunction("getConsole",global))())((var2.replace(var2, var1))+" "+(var1.replace(var1, var2)+"!"));
    })
  })
}

main();
