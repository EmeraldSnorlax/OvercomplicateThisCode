const goodoutput = /Hello World!\n/;
const { execFile } = require("child_process");
/*eslint sort-keys: "off"*/
const possibleExitCodes = {
  FOUND: 0,
  NOTFOUND: 1,
  ERROR: 2
};
/*eslint sort-keys: "warn"*/
const thing = execFile("node", ["./index.js"]);

let output = "";

thing.stdout.on("data", (d) => {
  output += d.toString();
});
thing.stderr.on("data", (d) => {
  process.stderr.write(d.toString());
  process.exit(possibleExitCodes.ERROR);
});
thing.on("exit", (d) => {
  if (goodoutput.test(output)) {
    process.stdout.write(`Passed with output:\n${output}`);
    process.exit(possibleExitCodes.FOUND);
  } else {
    process.stderr.write(`Failed to match ${goodoutput} in:\n${output}`);
    process.exit(possibleExitCodes.NOTFOUND);
  }
});
