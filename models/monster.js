const mongoose = require('mongoose')
const Schema = mongoose.Schema

const monsterSchema = new Schema({
    name: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Monster', monsterSchema)