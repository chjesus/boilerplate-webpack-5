const path = require("path");

module.exports = {
  paths: {
    public: path.join(__dirname, "../public"),
    build: path.resolve(__dirname, "../build"),
    html: path.resolve(__dirname, "../public/index.html"),
    favicon: path.resolve(__dirname, "../public/favicon.ico"),
  },
};
