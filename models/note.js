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
        required: {
            type: Boolean,
            default: true,
        }
    }
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
})

module.exports = mongoose.model('Note', categorySchema)