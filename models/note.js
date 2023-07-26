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
}, {
    timestamps: true
})


module.exports = mongoose.model('Note', noteSchema)
