const mongoose = require('mongoose')
const Schema = mongoose.Schema

const systemSchema = new Schema({
    name: String,
    color: String,
    dice: {
        type: String,
        enum: ["polyhedral", "d6", "d8", "d10", "percentile"],
    },
    mechanics: {
        type: String,
        enum: ["dice pool", "roll/keep", "d20", "fate", "other"],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('System', systemSchema)