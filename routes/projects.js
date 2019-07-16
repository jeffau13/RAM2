var express = require('express');
var router = express.Router();
var projects = require('../services/projects');

// get /projects

router.use(function(req, res, next) {
  projects
    .getProjects()
    .then(projectsCollection => {
      req.projects = projectsCollection.items;
      console.log(
        req.projects[0].fields.images[0].fields.photo.fields.file.url
      );
      next();
    })
    .catch(err => {
      console.log('Error in routes/projects.js:', JSON.stringify(err, null, 2));
    });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { projects: req.projects });
});

module.exports = router;
