var mongoose = require('mongoose');
var terrain = require("../models/terrain.js");
var building = require("../models/building.js");

var citySchema = mongoose.Schema({
    world: String,
    score: Number,
    username: String,
    guild: String,
    buildings: [building.buildingSchema],
    terrain: [terrain.terrainSchema],
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('City', citySchema);