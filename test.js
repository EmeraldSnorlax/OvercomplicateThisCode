const { execFile } = require("child_process");

let thing = execFile("node", ["./index.js"])

thing.stdout.on("data", (d) => {
  console.log(d.toString());
})

thing.stderr.on("data", (d) => {
  process.stderr.write(d.toString());
  process.exit(1);
})
