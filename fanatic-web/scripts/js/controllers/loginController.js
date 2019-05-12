function LoginNavController($scope, $modal, SecurityService) {
    $scope.loginClick = function () {
        var modalInstance = $modal.open({
            templateUrl: 'pages/login.html',
            controller: LoginModalController,
            size: 'sm'
        });
    };

    var account = null;
    account = SecurityService.getAccount();
    $scope.account = account;
}

var LoginModalController = function ($scope, $modalInstance, $q, SecurityService, AccountService, WorldService, PlayerService) {
    $scope.account = {
        username: null,
        password: null,
    };


    $scope.close = function () {
        $modalInstance.dismiss('close');
    };

    $scope.signin = function () {
        var loginError = document.getElementById("loginError");
        loginError.style.display = "none";
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/login",
            dataType: "json",
            type: "post",
            data: $scope.account
        });
        request.done(function (token) {
            var promise1 = AccountService.getqueue(token.id);
            $q.all([promise1]).then(function (results) {
                var account = results[0];
                var promise2 = PlayerService.getall(account.username);
                var player;
                $q.all([promise2]).then(function (resultsnext) {
                    var players = resultsnext[0];
                    if (players.length) {
                        player = players[players.length - 1];
                    }
                    loginSuccess(account, player);
                });

            });
        });
        request.fail(function (jqXHR, textStatus) {
            loginFailure();
        });
    }

    var loginSuccess = function (account, player) {
        SecurityService.setAccount(account);
        var url = "/#";
        if (player) {
            SecurityService.setActivePlayer(player);
            var promise1 = WorldService.getbyname(player.world);
            $q.all([promise1]).then(function (results) {
                var world = results[0];                
                url += "/world/" + world._id;
                $scope.close();
                window.location = url;

            });
        }
        else {
            url += '/joinGuild';
            $scope.close();
            window.location = url;
        }
    };

    var loginFailure = function () {
        var loginError = document.getElementById("loginError");
        loginError.style.display = "block";
    };
};


