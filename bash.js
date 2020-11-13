const pwd = require('./pwd')
const ls = require('./ls')
// process.stdout.write("prompt > ");

// process.stdin.on("data", (data) => {
//   const cmd = data.toString().trim();

//   if (cmd === "pwd") process.stdout.write(process.cwd());
//   process.stdout.write('\nYou typed: ' + cmd);
//   process.stdout.write("\nprompt > ");
// });

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const prompt = data.toString().trim();
  process.stdout.write('\nYou typed: ' + prompt);
  if (prompt === 'pwd') {
    pwd();
  } else if (prompt === 'ls') {
    
    ls();
  }
});

