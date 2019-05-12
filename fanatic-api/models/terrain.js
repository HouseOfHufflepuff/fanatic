var mongoose = require('mongoose');


var terrainSchema = mongoose.Schema({
    x: Number,
    y: Number,
    image: String
});

module.exports = mongoose.model('Terrain', terrainSchema);