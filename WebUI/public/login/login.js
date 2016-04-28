'use strict';

angular.module('login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'public/login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$scope', 'LoginProp', function ($scope, LoginProp) {
        $scope.userName = "";
        $scope.password = "";
        $scope.login = function () {
            console.log("Login() entry");
            console.log($scope.userName, $scope.password);
            console.log("Login() exit");
        };

    }])

    .service('LoginProp', function () {
        var Items = '';
        var Total = 0;

        return {
            getItems: function () {
                return Items;
            },
            setItems: function (value) {
                Items = value;
            },
            getTotal: function () {
                return Total;
            },
            setTotal: function (value) {
                Total = value;
            }
        };
    });

