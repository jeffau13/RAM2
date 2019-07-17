var express = require('express');
var router = express.Router();
var projects = require('../services/projects');

// get /projects

router.use(function(req, res, next) {
  projects
    .getProjects()
    .then(projectsCollection => {
      let tempProjects = projectsCollection.items;
      tempProjects.sort((a, b) => {
        return a.fields.order - b.fields.order;
      });
      req.projects = tempProjects;

      next();
    })
    .catch(err => {
      console.log('Error in routes/projects.js:', JSON.stringify(err, null, 2));
      res.render('', { err });
    });
});

router.get('/', function(req, res, next) {
  res.render('projects', {
    projects: req.projects,
    title: 'Projects',
    width: 1500
  });
});

module.exports = router;
