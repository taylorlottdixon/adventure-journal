var express = require('express');
var router = express.Router();
const notesCtrl = require('../controllers/notes')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// GET notes page
router.get('/campaigns/:id/notes/new', ensureLoggedIn, notesCtrl.new)
router.get('/campaigns/:id/notes/:id', ensureLoggedIn, notesCtrl.show)

// POST and DELETE
router.post('/campaigns/:id', ensureLoggedIn, notesCtrl.createNote);
router.delete('/campaigns/:id', ensureLoggedIn, notesCtrl.deleteNote);


module.exports = router;
