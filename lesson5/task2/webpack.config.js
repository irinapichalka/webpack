const path = require("path");

module.exports = {
  entry: {
    profile: "./src/profile/index.js",
    dasboard: "./src/dashboard/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build"),
  },
};
