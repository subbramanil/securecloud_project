'use strict';


angular.module('shoppingCart', [
    'ngRoute',
    'data',
    'login',
    'cart',
    'checkout'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/login'
    });
}]);
