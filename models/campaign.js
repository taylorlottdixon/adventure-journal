const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    categories: {
        type: ObjectId,
        ref: 'Category',
        default: 0o000000000,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    }
, {
    timestamps: true
})

const campaignSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    system: {
        type: ObjectId,
        ref: 'System',
    },
    gameDay: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
    },
    gameSchedule: {
        type: String,
        enum: ['Every week', 'Every other week', 'Once per month', 'Other']
    },
    nextGame: {
        type: Date,
    },
    notes: [noteSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Campaign', campaignSchema)
