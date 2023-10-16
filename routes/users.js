const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn')

// Login page route
router.get('/login', usersCtrl.login);
// Signup page route
router.get('/signup', usersCtrl.signup);
// Account page route
router.get('/account', ensureLoggedIn, usersCtrl.index);

// POST user sign up)
router.post('/signup', usersCtrl.create);
// POST user login
router.post('/login', usersCtrl.authenticate);

// Google OAuth Login route
router.get('/auth/google', passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      // Requesting the user's profile and email
      scope: ['profile', 'email'],
      // Optionally force pick account every time
      // prompt: "select_account"
    }
  ));
  
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/campaigns',
      failureRedirect: '/'
    }
  ));
  
  // OAuth Logout route
  router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/login');
    });
  });

module.exports = router;
