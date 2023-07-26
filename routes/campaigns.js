var express = require('express');
var router = express.Router();
const campaignsCtrl = require('../controllers/campaigns')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// GET /campaigns
router.get('/', campaignsCtrl.index);
// Use ensureLoggedIn middleware to protect routes
router.get('/new', ensureLoggedIn, campaignsCtrl.new);
router.get('/:id', campaignsCtrl.show);
router.post('/', ensureLoggedIn, campaignsCtrl.create);
router.delete('/:id', ensureLoggedIn, campaignsCtrl.delete)

module.exports = router;
