// const Campaign = require('../models/campaign')
// const User = require('../models/user')

// module.exports = {
//     createNote,
//     deleteNote,
//     // index,
//     show,
//     newNote,
//     newCategory,
//     deleteCat
// }

// async function createNote(req, res) {
//     res.render(`campaigns/${campaign._id}/newnote`, { title: 'New Note', errorMsg: '' });
// }

// async function deleteNote(req, res) {
//     const campaign = await Campaign.findOne({ 'notes._id': req.params.id, 'notes.user': req.user._id })

//     if (!campaign) return res.redirect('/campaigns')
//     campaign.notes.remove(req.params.id)
//     await campaign.save()
//     res.redirect(`/campaigns/${campaign._id}`)
// }

// // async function index(req, res) {
// //     const categories = await Category.find({})
// //     const notes = await Note.find({})
// //     const players = await User.find({})
// //     res.render(`/campaigns/${campaign._id}`, { title: 'Campaign Notes', errorMsg: '', categories, notes, players })
// // }

// async function newNote(req, res) {
//     const campaign = await Campaign.findById(req.params.id)
    
//     req.body.user = req.user._id
//     if (req.user.username !== undefined) {
//         req.body.userName = req.user.username
//     } else req.body.userName = req.user.name

//     campaign.notes.push(req.body)
//     try {
//         await campaign.save()
//     } catch (err) {
//         console.log(err)
//     }
//     res.redirect(`/campaigns/${campaign._id}`)
// }

// async function show(req, res) {
//     const note = await Campaign.findOne({ 'notes._id': req.params.id, 'notes.user': req.user._id })
//     if (!note) return res.redirect(`/campaigns/${campaign._id}`)
//     res.redirect(`campaigns/${campaign._id}/note/${note._id}`)
// }

// async function newCategory(req, res) {
//     const campaign = await Campaign.findById(req.params.id)

//     req.body.user = req.user._id
//     campaign.categories.push(req.body)
//     try {
//         await campaign.save()
//     } catch (err) {
//         console.log(err)
//     }
//     res.redirect(`/campaigns/${campaign._id}`)
// }

// async function deleteCat(req, res) {
//     const campaign = await Campaign.findOne({ 'categories._id': req.params.id, 'categories.user': req.user._id })

//     if (!campaign) return res.redirect('/campaigns')
//     campaign.categories.remove(req.params.id)
//     await campaign.save()
//     res.redirect(`/campaigns/${campaign._id}`)
// }