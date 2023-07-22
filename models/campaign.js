const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campaignSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    system: {
        type: String,
        enum: ['D&D 5e', 'Pathfinder', 'Pathfinder 2e', 'Starfinder', ]
    },
    gameDay: {
        type: Date,

    },
    gameSchedule: {
        type: String,

    },
    nextGame: {
        type: Date,

    },
    players: [playerSchema],
    notes: [noteSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Campaign', campaignSchema)