const path = require("path");

const controller = {
  index: (req, res) => {
    res.render(path.resolve("./src/views/home/index.ejs"));
  },
};

module.exports = controller;
