var bcrypt = require('bcrypt-nodejs');

var hashPassword = function (password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
};

var comparePassword = function (loginPassword, dbPassword) {
    var isSame = false;
    var isSame = bcrypt.compareSync(loginPassword, dbPassword);
    return isSame;
};

var makePassword = function () {
    var password = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++) {
        password += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return password;
};


exports.comparePassword = comparePassword;
exports.hashPassword = hashPassword;
exports.makePassword = makePassword;
