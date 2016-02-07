'use strict';

require('jquery');
var angular = require('angular');
require('angular-route');

var app = angular.module('Sample', [ 'ngRoute' ]);


require('./controller');

app.config(function($routeProvider) {

    $routeProvider.when('/one', {
        templateUrl: 'views/one.html',
        controller: 'oneCtrl'
    })
        .when('/two', {
            templateUrl: 'views/two.html',
            controller: 'twoCtrl'
        })
        .when('/', {
            templateUrl: 'views/one.html',
            controller: 'oneCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});