const Campaign = require('../models/campaign');
const Note = require('../models/note');
const Category = require('../models/note');
const User = require('../models/user')

module.exports = {
    index,
    show,
    new: newCampaign,
    create,
    newCategory,
    deleteCat,
    createNote,
    deleteNote,
    newNote,
    showNote,
};

async function index(req, res) {
    const campaigns = await Campaign.find({});
    res.render('campaigns/index', { title: 'My Campaigns', campaigns });
}

async function show(req, res) {
    const campaign = await Campaign.findById(req.params.id)
    const categories = await Category.find({})
    const notes = await Note.find({ _id: { $nin: campaign.note }})
    let players
    if (campaign.players) {
        let players = await User.find({ _id: { $nin: campaign.player }})
    }
    res.render('campaigns/show', { title: 'Campaign Notes', campaign, categories, notes, players})
}

function newCampaign(req, res) {
    res.render('campaigns/new', { title: 'New Campaign', errorMsg: '' })
}

async function create(req, res) {
    try {
        const campaign = await Campaign.create(req.body)
        res.redirect(`/campaigns/${campaign._id}`)
    } catch (err) {
        console.log(err)
        res.render('campaigns/new', { errorMsg: err.message })
    }
}

async function newCategory(req, res) {
    const campaign = await Campaign.findById(req.params.id)

    req.body.user = req.user._id
    campaign.categories.push(req.body)
    try {
        await campaign.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/campaigns/${campaign._id}`)
}

async function deleteCat(req, res) {
    const campaign = await Campaign.findOne({ 'categories._id': req.params.id, 'categories.user': req.user._id })

    if (!campaign) return res.redirect('/campaigns')
    campaign.categories.remove(req.params.id)
    await campaign.save()
    res.redirect(`/campaigns/${campaign._id}`)
}

async function createNote(req, res) {
    res.render(`campaigns/${campaign._id}/newnote`, { title: 'New Note', errorMsg: '' });
}

async function deleteNote(req, res) {
    const campaign = await Campaign.findOne({ 'notes._id': req.params.id, 'notes.user': req.user._id })

    if (!campaign) return res.redirect('/campaigns')
    campaign.notes.remove(req.params.id)
    await campaign.save()
    res.redirect(`/campaigns/${campaign._id}`)
}

async function newNote(req, res) {
    const campaign = await Campaign.findById(req.params.id)
    
    req.body.user = req.user._id
    if (req.user.username !== undefined) {
        req.body.userName = req.user.username
    } else req.body.userName = req.user.name

    campaign.notes.push(req.body)
    try {
        await campaign.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/campaigns/${campaign._id}`)
}

async function showNote(req, res) {
    const note = await Campaign.findOne({ 'notes._id': req.params.id, 'notes.user': req.user._id })
    if (!note) return res.redirect(`/campaigns/${campaign._id}`)
    res.redirect(`campaigns/${campaign._id}/note/${note._id}`)
}