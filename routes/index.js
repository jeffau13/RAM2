var express = require('express');
var router = express.Router();
const projects = require('../projects');

const localProjects = [
  {
    fields: {
      title: 'siege',
      slug: 'example-slug',
      description: 'siege',
      images: [
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/smoke.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/hibana.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        }
      ]
    }
  },
  {
    fields: {
      title: 'animations',
      slug: 'example-slug2',
      description:
        'example paragraph here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam impedit reiciendis delectus itaque quaerat, consequatur non obcaecati possimus dolores est?',
      images: [
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/smoke.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/hibana.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        }
      ]
    }
  },
  {
    fields: {
      title: 'daily',
      slug: 'example-slug3',
      description:
        'example paragraph here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam impedit reiciendis delectus itaque quaerat, consequatur non obcaecati possimus dolores est?',
      images: [
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/smoke.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/hibana.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        },
        {
          fields: {
            url: 'assets/img/siege/landscape/ash.jpg',
            title: 'My Title',
            description: 'My desc'
          }
        }
      ]
    }
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/projects', (req, res, next) => {
  res.render('projects', { localProjects });
});

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
