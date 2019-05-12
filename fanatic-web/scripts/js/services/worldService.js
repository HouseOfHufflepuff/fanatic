fanaticApp.service('WorldService', function ($q, $timeout) {
    this.get = function (id) {
        var rworld;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/world?id=" + id,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "GET",
        });
        request.done(function (rtworld) {
            rworld = rtworld;
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
            if (rworld) {
                deferred.resolve(rworld);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

    this.getbyname = function (name) {
        var rworld;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/worldbyname?name=" + encodeURIComponent(name),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "GET",
        });
        request.done(function (rtworld) {
            rworld = rtworld;
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
            if (rworld) {
                deferred.resolve(rworld);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

    this.getall = function () {
        var rworlds;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/worlds",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "GET",
        });
        request.done(function (rtworlds) {
            rworlds = rtworlds;
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
            if (rworlds) {
                deferred.resolve(rworlds);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

    this.post = function (world) {
        var rworld;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/world",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "POST",
            data: JSON.stringify(world),
            processData: false
        });
        request.done(function (rtworld) {
            rworld = rtaccount;
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
            if (rworld) {
                deferred.resolve(rworld);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

    this.put = function (world) {
        var rworld;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/world",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "PUT",
            data: JSON.stringify(world),
            processData: false
        });
        request.done(function (rtworld) {
            rworld = rtworld;
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
            if (rworld) {
                deferred.resolve(rworld);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    }

});

