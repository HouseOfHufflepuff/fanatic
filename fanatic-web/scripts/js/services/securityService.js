fanaticApp.service('SecurityService', function () {
    this.getAccount = function () {
        // TODO make sure it has not expired
        var account = null;
        if (localStorage.account) {
            account = JSON.parse(localStorage.account);
        }
        return account;
    };

    this.setAccount = function (account) {
        delete account.password;
        account.datetime = new Date();
        localStorage.account = JSON.stringify(account);
    };

    this.getActivePlayer = function () {
        // TODO make sure it has not expired
        var player = null;
        if (localStorage.player) {
            player = JSON.parse(localStorage.player);
        }
        return player;
    };

    this.setActivePlayer = function (player) {
        player.datetime = new Date();
        localStorage.player = JSON.stringify(player);
    };

});
