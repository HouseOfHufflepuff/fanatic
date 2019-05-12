fanaticApp.service('PlayerService', function ($q, $timeout) {
    this.get = function (id) {
        var rplayer;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/player?id=" + id,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "GET"
        });
        request.done(function (rtplayer) {
            raccount = rtplayer;
        });

        request.fail(function (jqXHR, textStatus) {
            console.log(textStatus);
            deferred.reject(textStatus);
        });

        var timeoutCount = 0;
        var finishUp = function () {
            timeoutCount++;
            if (timeoutCount > 50) {
                deferred.reject("timeout reached");
                return;
            }
            if (rplayer) {
                deferred.resolve(rplayer);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

    this.getall = function (username) {
        var rplayers;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/players?username=" + username,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "GET"
        });
        request.done(function (rtplayers) {
            rplayers = rtplayers;
        });

        request.fail(function (jqXHR, textStatus) {
            console.log(textStatus);
            deferred.reject(textStatus);
        });

        var timeoutCount = 0;
        var finishUp = function () {
            timeoutCount++;
            if (timeoutCount > 50) {
                deferred.reject("timeout reached");
                return;
            }
            if (rplayers) {
                deferred.resolve(rplayers);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };


    this.post = function (player) {
        var rplayer;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/player",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "POST",
            data: JSON.stringify(player),
            processData: false
        });
        request.done(function (rtplayer) {
            rplayer = rtplayer;
        });

        request.fail(function (jqXHR, textStatus) {
            console.log(textStatus);
            deferred.reject(textStatus);
        });

        var timeoutCount = 0;
        var finishUp = function () {
            timeoutCount++;
            if (timeoutCount > 50) {
                deferred.reject("timeout reached");
                return;
            }
            if (rplayer) {
                deferred.resolve(rplayer);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

    this.put = function (player) {
        var rplayer;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/player",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "PUT",
            data: JSON.stringify(player),
            processData: false
        });
        request.done(function (rtplayer) {
            raccount = rtplayer;
        });

        request.fail(function (jqXHR, textStatus) {
            console.log(textStatus);
            deferred.reject(textStatus);
        });

        var timeoutCount = 0;
        var finishUp = function () {
            timeoutCount++;
            if (timeoutCount > 100) {
                deferred.reject("timeout reached");
                return;
            }
            if (rplayer) {
                deferred.resolve(rplayer);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

});

