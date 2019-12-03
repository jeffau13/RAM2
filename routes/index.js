var express = require("express");
var router = express.Router();
const home = require("../services/home");

/* GET home page. */

router.use((req, res, next) => {
  home
    .getHome()
    .then(home => {
      let homeContent = home.items[0].fields;
      req.home = homeContent;
      next();
    })
    .catch(err => {
      console.log("Error in routes/home.js:", JSON.stringify(err, null, 2));
      res.render("", { err });
    });
});

router.get("/", function(req, res, next) {
  res.render("home", { title: "RAM3DDA", id: req.home.backgroundVideo });
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "About" });
});
router.get("/contact", (req, res, next) => {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
