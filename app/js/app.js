'use strict';

var mainMod = angular.module('phonecatApp',['ngRoute']);

mainMod.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/phonesList.html',
                controller: 'phoneListController'
            }).
            when('/details/:id', {
                templateUrl: 'partials/phoneDetails.html',
                controller: 'phoneDetailsController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);