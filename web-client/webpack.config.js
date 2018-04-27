// console.log(process.env);
var devMode = process.env.NODE_ENV ? process.env.NODE_ENV=="dev" : true;
if (devMode) {
  module.exports = require("./webpack.dev.config.js");
} else {
  module.exports = require("./webpack.prod.config.js");
}
