var express = require('express');
var router = express.Router();
const projects = require('../services/projects');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

// router.get('/projects', (req, res, next) => {
//   res.render('projects', { localProjects });
// });

router.get('/tutorials', (req, res, next) => {
  res.render('tutorials', { title: 'tutorials!' });
});
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'about!' });
});
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'contact!' });
});

router.get('/test', (req, res, next) => {
  res.render('test', { title: 'test!' });
});

module.exports = router;
