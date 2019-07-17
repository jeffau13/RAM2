var express = require('express');
var router = express.Router();
var tutorials = require('../services/tutorials');

// get /tutorials

router.use(function(req, res, next) {
  tutorials
    .getTutorials()
    .then(tutorialsCollection => {
      const tempTutorials = tutorialsCollection.items;
      req.tutorials = tempTutorials;
      next();
    })
    .catch(err => {
      console.log(
        'Error in routes/tutorials.js:',
        JSON.stringify(err, null, 2)
      );
      res.render('', { err });
    });
});

router.get('/', function(req, res, next) {
  res.render('tutorials', {
    title: 'Tutorials',
    tutorials: req.tutorials
  });
});

module.exports = router;
