const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    notes: {
        type: mongoose.ObjectId,
        ref: 'Note',
    },
    campaign: {
        type: mongoose.ObjectId,
        ref: 'Campaign'
    }
    }
, {
    timestamps: true
})

module.exports = mongoose.model('Category', categorySchema)
