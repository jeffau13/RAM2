var express = require('express');
var router = express.Router();
const projects = require('../services/projects');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'RAM3DDA' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
