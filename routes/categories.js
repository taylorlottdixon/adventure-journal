var express = require('express');
var router = express.Router();
const categoriesCtrl = require('../controllers/categories')
const ensureLoggedIn = require('../config/ensureLoggedIn')


router.post('/campaigns/:id/categories', ensureLoggedIn, categoriesCtrl.newCategory);
router.delete('/', ensureLoggedIn, categoriesCtrl.deleteCat);


module.exports = router;
