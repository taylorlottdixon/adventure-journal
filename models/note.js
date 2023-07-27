const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    user: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category',
    },
    campaign: {
        type: mongoose.ObjectId,
        ref: 'Campaign',
    }
    }
, {
    timestamps: true
})

module.exports = mongoose.model('Note', noteSchema)
