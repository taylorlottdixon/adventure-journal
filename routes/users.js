const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users')

// Login page route
router.get('/login', usersCtrl.login);

// Signup page route
router.get('/signup', usersCtrl.signup);