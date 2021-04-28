const { execFile } = require("child-process");

let thing = execFile("node", ["./index.js"]);
thing.stdout.on("data", (d) => {console.log(d.toString())})
