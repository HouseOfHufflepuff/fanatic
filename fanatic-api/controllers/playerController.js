var PlayerModel = require('../models/player');

module.exports = {
    get: function (request, reply) {
        PlayerModel.findOne({ '_id': request.query.id }, function (err, player) {
            if (err) {
                console.log(err);
                reply(err).code(500);
            }
            reply(player);
        });
    },

    getall: function (request, reply) {
        PlayerModel.find({ 'username': request.query.username, 'active': true }, function (err, players) {
            if (err) {
                console.log(err);
                reply(err).code(500);
            }
            reply(players);
        });
    },

    post: function (request, reply) {
        var insertPlayer = request.payload;
        var newPlayer = new PlayerModel(insertPlayer);
        newPlayer.save(function (err, docInserted) {
            if (err) {
                reply(err).code(500);
            }
            reply(docInserted);
        });
    },

    put: function (request, reply) {
        var updatePlayer = request.payload;
        var query = { _id: updatePlayer._id };
        PlayerModel.update(query, updatePlayer, { multi: false }, updateCallback);

        function updateCallback(err, numAffected) {
            if (err) {
                reply(err).code(500);
            }
            reply({ 'id': updatePlayer._id });
        }


    }


}

