var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Adventure Journal' });
});

// Google OAuth Login route

// OAuth Logout route

module.exports = router;
