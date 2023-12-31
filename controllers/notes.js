const Campaign = require('../models/campaign')
const User = require('../models/user')

module.exports = {
    new: newNote,
    createNote,
    deleteNote,
}

async function newNote(req, res) {
    const campaign = await Campaign.findById(req.params.id)
    res.render('notes/new', { title: 'New Note', errorMsg: '', campaign })
}

async function createNote(req, res) {
    const campaign = await Campaign.findById(req.params.id);
    req.body.user = req.user._id;

    campaign.notes.push(req.body)
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