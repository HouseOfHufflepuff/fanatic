function JoinGuildController($scope, $q, AccountService, SecurityService, WorldService, PlayerService) {
    var promise1 = WorldService.getall();
    $q.all([promise1]).then(function (results) {
        var worlds = results[0];
        $scope.worlds = worlds;
    });

    $scope.submitJoinGuild = function () {
        var localAccount = SecurityService.getAccount();
        var promise1 = AccountService.getqueue(localAccount._id);
        $q.all([promise1]).then(function (results) {
            var account = results[0];
            var player = {
                username: account.username,
                world: $scope.world,
                score: 0,
                guild: $scope.guild,
                fanatics: 1
            }
            var promise3 = PlayerService.post(player);
            var promise4 = WorldService.getbyname($scope.world);
            $q.all([promise3, promise4]).then(function (results) {
                var insertPlayer = results[0];
                var world = results[1];
                SecurityService.setActivePlayer(insertPlayer);
                window.location = "/#/world/" + world._id;
            });

        });
    };

}
    

