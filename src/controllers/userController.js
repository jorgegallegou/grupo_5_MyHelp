const path = require("path");

const controller = {
  register: (req, res) => {
    res.render(path.resolve("./src/views/user/register"));
  },
  login: (req, res) => {
    res.render(path.resolve("./src/views/user/login"));
  },
};

module.exports = controller;
