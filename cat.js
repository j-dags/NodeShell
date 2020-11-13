const fs = require("fs");

module.exports = function (file) {
  fs.readFile(`./${file}`, (err, data) => {
    if (err) throw err;
    console.log("\n");
    console.log(data.toString());
    process.stdout.write("\nprompt > ");
  });
};
