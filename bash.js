const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");

process.stdin.on("data", (data, fnc) => {
  const prompt = data.toString().trim().split(" ");

  process.stdout.write("\nYou typed: " + prompt.join(" "));
  if (prompt[0] === "pwd") {
    pwd();
  } else if (prompt[0] === "ls") {
    ls();
  } else if (prompt[0] === "cat") {
    cat(prompt[1]);
  }
});
