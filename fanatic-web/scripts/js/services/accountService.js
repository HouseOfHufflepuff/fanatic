fanaticApp.service('AccountService', function ($q, $timeout) {
    this.get = function (id, callback) {
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/account?id=" + id,
            dataType: "json",
            type: "get",
            async: false
        });

        request.done(function (account) {
            callback(account);
        });

        request.fail(function (jqXHR, textStatus) {
            console.log(textStatus);
        });
    };

    this.getqueue = function (id) {
        var raccount;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/account?id=" + id,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "GET"
        });
        request.done(function (rtaccount) {
            raccount = rtaccount;
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
            if (raccount) {
                deferred.resolve(raccount);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };


    this.post = function (account) {
        var raccount;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/account",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "POST",
            data: JSON.stringify(account),
            processData: false
        });
        request.done(function (rtaccount) {
            raccount = rtaccount;
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
            if (raccount) {
                deferred.resolve(raccount);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

    this.put = function (account) {
        var raccount;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/account",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "PUT",
            data: JSON.stringify(account),
            processData: false
        });
        request.done(function (rtaccount) {
            raccount = rtaccount;
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
            if (raccount) {
                deferred.resolve(raccount);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    }

});

