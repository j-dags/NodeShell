const { doesNotMatch } = require("assert");
const fs = require("fs");

module.exports = function (file, done) {
  fs.readFile(`./${file}`, (err, data) => {
    //if (err) throw err;
    if (err) done("Something went wrong!");
    // console.log("\n");
    // console.log(data.toString());
    // process.stdout.write("\nprompt > ");
    done("\n");
    done(data.toString());
  });
};
