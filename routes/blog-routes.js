const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog-controller');

router.route('/').get(blogController.homePage);

module.exports = router;