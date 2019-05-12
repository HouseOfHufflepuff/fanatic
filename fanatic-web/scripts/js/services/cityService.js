fanaticApp.service('WorldService', function ($q, $timeout) {
    this.get = function (id) {
        var rcity;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/city?id=" + id,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "GET",
        });
        request.done(function (rtcity) {
            rcity = rtcity;
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
            if (rcity) {
                deferred.resolve(rcity);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

    this.getbyusername = function (username) {
        var rcity;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/citybyusername?name=" + encodeURIComponent(username),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "GET",
        });
        request.done(function (rtcity) {
            rcity = rtcity;
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
            if (rcity) {
                deferred.resolve(rcity);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };


    this.post = function (city) {
        var rworld;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/city",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "POST",
            data: JSON.stringify(city),
            processData: false
        });
        request.done(function (rtcity) {
            rcity = rtcity;
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
            if (rcity) {
                deferred.resolve(rcity);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    };

    this.put = function (city) {
        var rcity;
        var deferred = $q.defer();
        var request = $.ajax({
            url: "http://local.api.fanatic.com:3030/city",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "PUT",
            data: JSON.stringify(city),
            processData: false
        });
        request.done(function (rtcity) {
            rcity = rtcity;
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
            if (rcity) {
                deferred.resolve(rcity);
            }
            else {
                $timeout(finishUp, 100);
            }
        };
        $timeout(finishUp, 100);
        return deferred.promise;
    }

});

