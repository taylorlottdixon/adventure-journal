const Campaign = require('../models/campaign')
const Note = require('../models/note')
const User = require('../models/user')

module.exports = {
    new: newNote,
    createNote,
    deleteNote,
    show,
}

async function newNote(req, res) {
    const campaign = await Campaign.findById(req.params.id)
    res.render('notes/new', { title: 'New Note', errorMsg: '', campaign })
}

async function createNote(req, res) {
    const campaign = await Campaign.findById(req.params.id);
    req.body.user = req.user._id;
    const note = await Note.findOne({ 'campaign._id': req.params.id })
    
    try {
        await campaign.save();
        res.redirect(`/campaigns/${campaign._id}`)
    } catch (err) {
        console.log(err);
    }
}

async function deleteNote(req, res) {
    const campaign = await Campaign.findOne({ 'notes._id': req.params.id, 'notes.user': req.user._id })
    if (!campaign) return res.redirect('/campaigns')
    campaign.notes.remove(req.params.id)
    await campaign.save()
    res.redirect(`/campaigns/${campaign._id}`)
}

async function show(req, res) {
    const note = await Note.findById(req.params.id)
    const campaign = await Campaign.findOne({ 'notes._id': req.params.id })

    
    res.render('notes/show', { title: 'Note Details', note, campaign})
}