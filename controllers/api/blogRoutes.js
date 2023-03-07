const router = require('express').Router();
const { Blogposts, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogposts = await Blogposts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogposts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogpostsData = await Blogposts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpostsData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogpostsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
