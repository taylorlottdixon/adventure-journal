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

