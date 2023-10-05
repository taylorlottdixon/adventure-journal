const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    googleId: String,
    email: String,
    avatar: String,
    dmCampaigns: {
        type: ObjectId,
        ref: 'Campaign',
    },
    playerCampaigns: {
        type: ObjectId,
        ref: 'Campaign',
    },
    favSystems: {
        type: ObjectId,
        ref: 'System',
    },
    aboutMe: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)