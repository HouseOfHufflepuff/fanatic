var AccountModel = require('../models/account');
var security = require('../utils/security.js');

module.exports = {
    get: function (request, reply) {
        AccountModel.findOne({ '_id': request.query.id }, function (err, account) {
            if (err) {
                console.log(err);
                reply(err).code(500);
            }
            reply(account);
        });
    },

    post: function (request, reply) {
        var insertAccount = request.payload;
        if (!insertAccount.active) {
            insertAccount.active = true;
        }
        if (!insertAccount.password) {
            var password = security.makePassword();
            insertAccount.password = password;
        }
        var hashedPassword = security.hashPassword(insertAccount.password);
        insertAccount.password = hashedPassword;
        var newAccount = new AccountModel(insertAccount);
        newAccount.save(function (err, docInserted) {
            if (err) {
                reply(err).code(500);
            }
            reply(docInserted);
        });
    },

    put: function (request, reply) {
        var updateAccount = request.payload;
        var query = { username: updateAccount.username };
        AccountModel.update(query, updateAccount, { multi: false }, updateCallback);

        function updateCallback(err, numAffected) {
            if (err) {
                reply(err).code(500);
            }
            reply({ 'id': updateAccount._id });
        }


    }


}

