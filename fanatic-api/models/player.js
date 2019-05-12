var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var playerSchema = mongoose.Schema({
    guild: String,
    world: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    }, world: String,
    fanatics: {
        type: Number,
        required: true,
        default: 1
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Player', playerSchema);