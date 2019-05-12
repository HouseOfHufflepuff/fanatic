var fanaticApp = angular.module('fanaticApp', ['ngRoute', 'ui.bootstrap']);

fanaticApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
}]);

fanaticApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/world/:id', {
            templateUrl: 'pages/world.html',
            controller: 'WorldController',
            showNav: true
        })
        .when('/join', {
            templateUrl: 'pages/join.html',
            controller: 'JoinController',
            showNav: true
        })
        .when('/joinGuild', {
            templateUrl: 'pages/joinGuild.html',
            controller: 'JoinGuildController',
            showNav: true
        })
        .when('/city', {
            templateUrl: 'pages/city.html',
            controller: 'CityController',
            showNav: true
        })
    ;
});


