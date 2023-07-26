var express = require('express');
var router = express.Router();
const notesCtrl = require('../controllers/notes')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// router.get('/campaigns/:id', notesCtrl.index)
router.get('/new', ensureLoggedIn, notesCtrl.newNote);
router.get('/:id', notesCtrl.show);

// POST and DELETE
router.post('/', ensureLoggedIn, notesCtrl.createNote);
router.delete('/', ensureLoggedIn, notesCtrl.deleteNote);


module.exports = router;
