var AccountModel = require('../models/account');
var security = require('../utils/security.js');

module.exports = {
    validate: function (request, reply) {
        console.log(request.payload);
        AccountModel.findOne({ 'username': request.payload.username }, function (err, account) {
            if (err) {
                reply(err).code(500);
            }
            if (!account) {
                //unauthorized
                reply().code(401);
            }
            else {
                
                var validPassword = security.comparePassword(request.payload.password, account.password);
                if (validPassword) {
                    var tokenResponse = {
                        'id': account._id
                    }
                    console.log("good");
                    reply(tokenResponse);
                }
                else {
                    console.log("invalid password");
                    reply().code(401);
                }
            }
            reply(account);
        });
    }

}