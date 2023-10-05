const mongoose = require('mongoose')
const Schema = mongoose.Schema

const npcSchema = new Schema({
    name: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('NPC', npcSchema)