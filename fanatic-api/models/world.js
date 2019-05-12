var mongoose = require('mongoose');
var terrain = require("../models/terrain.js");

var worldSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    terrain: [terrain.terrainSchema],
    start: Date,
    end: Date,
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('World', worldSchema);