var CityModel = require('../models/city');

module.exports = {
    get: function (request, reply) {
        cityModel.findOne({ '_id': request.query.id }, function (err, city) {
            if (err) {
                console.log(err);
                reply(err).code(500);
            }
            reply(city);
        });
    },

    getbyusername: function (request, reply) {
        CityModel.find({ 'username': request.query.usernamename }, function (err, cities) {
            if (err) {
                console.log(err);
                reply(err).code(500);
            }
            reply(cities);
        });
    },

    getbyworld: function (request, reply) {
        CityModel.find({ 'active': true, 'world': request.query.world },  function (err, cities) {
            if (err) {
                console.log(err);
                reply(err).code(500);
            }
            reply(cities);
        });
    },

    post: function (request, reply) {
        var insertCity = request.payload;
        var newCity = new CityModel(insertCity);
        newCity.save(function (err) {
            if (err) {
                reply(err).code(500);
            }
            reply(returnCity);
        });
    },

    put: function (request, reply) {
        var updateCity = request.payload;
        var query = { _id: updateCity._id };
        CityModel.update(query, updateCity, { multi: false }, updateCallback);

        function updateCallback(err, numAffected) {
            if (err) {
                reply(err).code(500);
            }
            reply({ 'id': updateCity._id });
        }
    }
}

