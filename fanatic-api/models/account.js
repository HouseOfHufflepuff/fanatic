var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var player = require('../models/player');

var accountSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: Date,
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    country: String,
    start: Date,
    end: Date
});

module.exports = mongoose.model('Account', accountSchema);