const helpers = require("../helpers/index.js");
module.exports = {
  homePage(req, res) {
    res.render("index.ejs", {
      ...helpers.globals(),
    });
  },
};
