var express = require('express');
var router = express.Router();
const notesCtrl = require('../controllers/notes')
const ensureLoggedIn = require('../config/ensureLoggedIn')


// POST and DELETE
router.post('/campaigns/:id/notes', ensureLoggedIn, notesCtrl.createNote);
router.delete('/campaigns/:id', ensureLoggedIn, notesCtrl.deleteNote);


module.exports = router;
