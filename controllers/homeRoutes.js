const router = require('express').Router();
const { Blogposts, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all 
router.get('/', async (req, res) => {
  try {
    const dbBlogpostsData = await Blogposts.findAll({
      
    });

    const posts = dbBlogpostsData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage' );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blogpost
router.get('/blogpost/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the posts
    try {
      const dbBlogpostsData = await Blogposts.findByPk(req.params.id, {
        include: [
          {
            model: Blogposts,
            attributes: [
              'id',
              'title',
              'author',
              'date_published',
              'article',
              
            ],
          },
        ],
      });
      const blogposts = dbBlogpostsData.get({ plain: true });
      res.render('blogposts', { blogposts, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
