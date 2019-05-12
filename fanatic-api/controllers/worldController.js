var WorldModel = require('../models/world');

module.exports = {
    get: function (request, reply) {
        WorldModel.findOne({ '_id': request.query.id }, function (err, world) {
            if (err) {
                console.log(err);
                reply(err).code(500);
            }
            reply(world);
        });
    },

    getbyname: function (request, reply) {
        WorldModel.findOne({ 'name': request.query.name }, function (err, world) {
            if (err) {
                console.log(err);
                reply(err).code(500);
            }
            reply(world);
        });
    },

    getall: function (request, reply) {
        WorldModel.find({ 'active': true },  'name type start end', function (err, worlds) {
            if (err) {
                console.log(err);
                reply(err).code(500);
            }
            reply(worlds);
        });
    },

    post: function (request, reply) {
        var insertWorld = request.payload;
        if (!insertWorld.active) {
            insertWorld.active = true;
        }
        var newWorld = new WorldModel(insertWorld);
        newWorld.save(function (err) {
            if (err) {
                reply(err).code(500);
            }
            reply(returnWorld);
        });
    },

    put: function (request, reply) {
        var updateWorld = request.payload;
        var query = { _id: updateWorld._id };
        WorldModel.update(query, updateWorld, { multi: false }, updateCallback);

        function updateCallback(err, numAffected) {
            if (err) {
                reply(err).code(500);
            }
            reply({ 'id': updateWorld._id });
        }
    }
}

