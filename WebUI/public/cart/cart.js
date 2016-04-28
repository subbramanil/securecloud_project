'use strict';

angular.module('cart', ['ngRoute', 'data'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cart', {
            templateUrl: 'public/cart/cart.html',
            controller: 'CartCtrl'
        });
    }])

    .controller('CartCtrl', ['$scope', 'CommonProp', 'commonDataService', function ($scope, CommonProp, commonDataService) {
        $scope.shopData = [
            {
                'item': 'Hard Disk',
                'id': 'HD',
                'selected': 0,
                'prices': [{'size': '200GB', 'price': '2000'}, {'size': '400GB', 'price': '4000'}]
            }

        ];

        console.log("User Info: ", commonDataService.getUserInfo());
        $scope.userName = commonDataService.getUserInfo().userName;

        if (CommonProp.getItems() != '') {
            $scope.shopData = CommonProp.getItems();
        }

        $scope.total = function () {
            var t = 0;

            for (var k in $scope.shopData) {
                t += parseInt($scope.shopData[k].selected);
            }

            CommonProp.setTotal(t);
            return t;

        };

        $scope.$watch('shopData', function () {
            CommonProp.setItems($scope.shopData);
        })


    }])
    .directive('checkList', function () {
        return {
            restrict: 'E',
            scope: {
                option: '=',
                name: '=',
                selected: '=selected'
            },
            template: function (elem, attrs) {
                return '<div class="panel-body">\
                    <div class="radio" ng-repeat="i in option">\
                        <label><input type="radio" ng-model="$parent.selected" ng-value="{{i.price}}"  name="{{name}}">{{i.size}} Rs.{{i.price}}</label>\
                    </div>\
                </div>'
            }
        };
    })


    .directive('getScroll', function ($window) {
        return {
            scope: {
                scroll: '=scroll'
            },
            link: function (scope, element, attrs) {

                var scrollwindow = angular.element($window);

                scrollwindow.on('scroll', scope.$apply.bind(scope, function () {
                    scope.scroll = scrollwindow.scrollTop();
                }));

            }
        };
    })

    .service('CommonProp', function () {
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

