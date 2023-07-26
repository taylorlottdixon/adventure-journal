const Campaign = require('../models/campaign')
const Category = require('../models/category')
const User = require('../models/user')

module.exports = {
    newCategory,
    deleteCat
}


async function newCategory(req, res) {
    const campaign = await Campaign.findById(req.params.id)
    // req.body.user = req.user._id
    const category = new Category({
        name: req.body.name,
        campaign: campaign
    })
    campaign.categories.push(category._id)
    try {
        await category.save()
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