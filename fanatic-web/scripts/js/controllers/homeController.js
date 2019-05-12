function HomeController($scope, $q, AccountService, SecurityService, WorldService) {
    var account = SecurityService.getAccount();
    var player = SecurityService.getActivePlayer();
    if (account) {
        if (player) {
            var promise1 = WorldService.getbyname(player.world);
            $q.all([promise1]).then(function (results) {
                var world = results[0];
                world.link = "/#/world/" + world._id;
                $scope.world = world;
            });
        }
        else {
            window.location = '/#/joinGuild';
        }
    }
    else {
        window.location = '/#/join';
    }
}