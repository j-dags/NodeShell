const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");

process.stdout.write("prompt > ");

process.stdin.on("data", (data, fnc) => {
  const prompt = data.toString().trim().split(" ");

  process.stdout.write("\nYou typed: " + prompt.join(" "));
  console.log("\n");

  if (prompt[0] === "pwd") {
    pwd();
  } else if (prompt[0] === "ls") {
    ls();
  } else if (prompt[0] === "cat") {
    cat(prompt[1]);
  } else if (prompt[0] === "curl") {
    curl(prompt[1]);
  }
});
