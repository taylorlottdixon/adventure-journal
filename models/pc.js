const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pcSchema = new Schema({
    name: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('PC', pcSchema)