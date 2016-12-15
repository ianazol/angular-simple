'use strict';

angular.module('myApp.404', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/404', {
            templateUrl: '404/404.html',
            controller: 'page404Ctrl'
        });
    }])

    .controller('page404Ctrl', [function() {

    }]);