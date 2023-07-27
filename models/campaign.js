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
        type: String,
        enum: ['D&D 5e', 'Pathfinder', 'Pathfinder 2e', 'Starfinder', 'Mage: The Ascension', 'Vampire: The Masquerade', 'Shadowrun', 'Fate', 'GURPS', 'Call of Cthulhu']
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
    notes: [noteSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Campaign', campaignSchema)
