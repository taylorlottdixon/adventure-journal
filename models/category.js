const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    campaign: { 
        type: Schema.Types.ObjectId, 
        ref: 'Campaign' 
    },
})

module.exports = mongoose.model('Category', categorySchema)