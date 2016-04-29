'use strict';

angular.module('checkout', ['ngRoute', 'data'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/checkout', {
            templateUrl: 'public/checkout/checkout.html',
            controller: 'CheckoutCtrl'
        });
    }])

    .controller('CheckoutCtrl', ['$scope', 'CommonProp', 'commonDataService', function ($scope, CommonProp, commonDataService) {
        $scope.items = CommonProp.getItems();
        $scope.total = CommonProp.getTotal();
        $scope.userName = commonDataService.getUserInfo().userName;

        $scope.clear = function () {
            $scope.shopData = [];
        };
    }]);