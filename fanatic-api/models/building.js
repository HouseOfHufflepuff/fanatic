var mongoose = require('mongoose');


var buildingSchema = mongoose.Schema({
    level: Number,
    type: String
});

module.exports = mongoose.model('Building', buildingSchema);