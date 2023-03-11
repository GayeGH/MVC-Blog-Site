const router = require('express').Router();
const { Blogposts, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all 
router.get('/', async (req, res) => {
  try {
    const blogpostsData = await Blogposts.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
      
    });

    const blogposts = blogpostsData.map((post) => blogposts.get({ plain: true })
    );

    res.render('homepage',{
      blogposts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one blogpost
router.get('/blogposts/:id', async (req, res) => {
   try {
      const blogpostsData = await Blogposts.findByPk(req.params.id, {
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
      const blogposts = blogpostsData.get({ plain: true });


      res.render('blogposts', { 
        ...blogposts, 
        loggedIn: req.session.loggedIn });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {exclued: ['password']},
      include: [{model: Blogposts }],
    });
    const user =userData.get({plain:true})
  }
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
