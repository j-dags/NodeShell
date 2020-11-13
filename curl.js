const { doesNotMatch } = require("assert");
const request = require("request");

module.exports = function (url, done) {
  request(url, function (error, response, body) {
    // console.error("error:", error);
    // console.log("statusCode:", response && response.statusCode);
    // console.log("body:", body);
    done("error:", error);
    done("statusCode:", response && response.statusCode);
    done("body:", body);
  });
};
