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
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: {
        //     type: Boolean,
        //     default: true,
        // }
    },
    category: ObjectId,
}, {
    timestamps: true
})

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    notes: [noteSchema],
    campaign: ObjectId
})

module.exports = mongoose.model('Note', noteSchema)
module.exports = mongoose.model('Category', categorySchema)