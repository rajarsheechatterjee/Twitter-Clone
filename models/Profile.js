const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bio: {
        type: String
    },
    location: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    following: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    followers: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);