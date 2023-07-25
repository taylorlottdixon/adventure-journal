const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    cover: {
        data: Buffer,
        contentType: String,
    },
    categories: [ { type: Schema.Types.ObjectId, ref: 'Category' } ],
    notes: [ { type: Schema.Types.ObjectId, ref: 'Category' } ]
    // players: [playerSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Campaign', campaignSchema)