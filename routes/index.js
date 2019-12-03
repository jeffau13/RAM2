var express = require("express");
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

var router = express.Router();
const home = require("../services/home");
const about = require("../services/about");
/* GET home page. */

router.use((req, res, next) => {
  home
    .getHome()
    .then(home => {
      req.home = home.items[0].fields;
      next();
    })
    .catch(err => {
      console.log(
        "Error in routes/index.js (home):",
        JSON.stringify(err, null, 2)
      );
      res.render("", { err });
    });
});

router.get("/", function(req, res, next) {
  res.render("home", {
    title: "RAM3DDA",
    id: req.home.backgroundVideo,
    playbutton: req.home.playbutton
  });
});

router.use((req, res, next) => {
  about
    .getAbout()
    .then(about => {
      req.about = about.items[0].fields;
      const rawRichTextField = about.items[0].fields.paragraph;
      req.about.paragraph = documentToHtmlString(rawRichTextField);
      next();
    })
    .catch(err => {
      console.log(
        "Error in routes/index.js (about) : ",
        JSON.stringify(err, null, 2)
      );
      res.render("", { err });
    });
});

router.get("/about", (req, res, next) => {
  res.render("about", { title: "About", about: req.about });
});
router.get("/contact", (req, res, next) => {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
