var express = require('express');
var router = express.Router();
var projects = require('../services/projects');
var sr = require('screenres');

// get /projects

router.use(function(req, res, next) {
  projects
    .getProjects()
    .then(projectsCollection => {
      req.projects = projectsCollection.items;

      next();
    })
    .catch(err => {
      console.log('Error in routes/projects.js:', JSON.stringify(err, null, 2));
      res.render('', { err });
    });
});

router.use((req, res, next) => {
  const resolution = sr.get();
  const width = resolution[0];
  if (width < 1000) {
    req.width = 500;
  } else {
    req.width = 1920;
  }
  next();
});

router.get('/', function(req, res, next) {
  res.render('projects', {
    projects: req.projects,
    title: 'Projects',
    width: req.width
  });
});

module.exports = router;
