const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

process.stdout.write("prompt > ");
process.stdin.on("data", (data, fnc) => {
  const prompt = data.toString().trim().split(" ");

  process.stdout.write("\nYou typed: " + prompt.join(" "));

  if (prompt[0] === "pwd") {
    pwd(done);
  } else if (prompt[0] === "ls") {
    ls(done);
  } else if (prompt[0] === "cat") {
    cat(prompt[1], done);
  } else if (prompt[0] === "curl") {
    curl(prompt[1], done);
  }
});

const done = (output) => {
  process.stdout.write(output);
};
