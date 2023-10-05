const mongoose = require('mongoose')
const Schema = mongoose.Schema

const systemSchema = new Schema({
    name: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('System', systemSchema)