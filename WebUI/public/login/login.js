'use strict';

angular.module('login', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'public/login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$scope', 'LoginService', function ($scope, loginService) {
        $scope.userName = "";
        $scope.password = "";
        $scope.login = function () {
            console.log("Login() entry");
            console.log($scope.userName, $scope.password);
            loginService.login($scope.userName, $scope.password);
            console.log("Login() exit");
        };

    }])

    .service('LoginService', [
        '$http',
        '$q',
        function ($http, $q) {

            var Items = '';
            var Total = 0;

            return {

                login: function (username, passwd) {
                    console.log("LoginService.login() entry");
                    var params = "?userName=" + username + "&password=" + passwd;
                    var defer = $q.defer();
                    $http(
                        {
                            method: "get",
                            url: "http://localhost:8080/demoREST/rest/authenticate" + params,
                            headers: { 'Accept': 'application/json' }
                        }
                    ).then(function (response) {
                            console.log("Response: ", response);
                            defer.resolve(response);
                        },
                        function (error) {
                            console.log("Error: ", error);
                            defer.resolve(error);
                        });
                    console.log("LoginService.login() exit");
                    return defer.promise;
                },
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
        }]);

