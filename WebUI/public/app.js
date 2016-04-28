'use strict';


angular.module('shoppingCart', [
    'ngRoute',
    'login',
    'cart',
    'checkout' 
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);
