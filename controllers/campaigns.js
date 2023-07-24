const Campaign = require('../models/campaign');
const Note = require('../models/note');

module.exports = {
    index,
    show,
    new: newCampaign,
    create,
};

async function index(req, res) {
    const campaigns = await Campaign.find({});
    res.render('campaigns/index', { title: 'My Campaigns', campaigns });
}

async function show(req, res) {
    const campaign = await Campaign.findById(req.params.id)
    const notes = await Note.find({ _id: { $nin: campaign.note }})
    let players
    if (campaign.player.length > 0) {
        let players = await Player.find({ _id: { $nin: campaign.player }})
    }
    res.render('campaigns/show', { title: 'Campaign Notes', campaign, notes, players})
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