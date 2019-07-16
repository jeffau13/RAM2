var express = require('express');
var router = express.Router();
var projects = require('../services/projects');

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

router.get('/projects', function(req, res, next) {
  res.render('projects', { projects: req.projects, title: 'Projects' });
});

module.exports = router;
