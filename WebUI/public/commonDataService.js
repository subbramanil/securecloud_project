/**
 * Created by Subbu on 4/28/16.
 */

(function (angular) {
    var module = angular.module("data", []);

    module.factory("commonDataService", [

        function () {
            var availableSections = [
                {
                    'item': 'Medicines',
                    'id': 'MD',
                    'selected': 0,
                    'prices': [{'size': 'Metacin', 'price': '10'}, {'size': 'Crocin', 'price': '8'}, {'size': 'Coldac', 'price': '15'}]
                },
                {
                    'item': 'Real Estate',
                    'id': 'RE',
                    'selected': 0,
                    'prices': [{'size': '2500 Sq. ft', 'price': '200000'}, {'size': '5000 Sq. ft', 'price': '4000000'}]
                },
                {
                    'item': 'Stationary',
                    'id': 'ST',
                    'selected': 0,
                    'prices': [{'size': 'Pen', 'price': '2'}, {'size': 'Pencil', 'price': '1'}, {'size': 'Notebooks', 'price': '4'}]
                },
                {
                    'item': 'Furniture',
                    'id': 'FU',
                    'selected': 0,
                    'prices': [{'size': 'Table', 'price': '20'}, {'size': 'Chair', 'price': '40'}]
                },
                {
                    'item': 'Books',
                    'id': 'BK',
                    'selected': 0,
                    'prices': [{'size': 'Securing Cloud', 'price': '100'}, {'size': 'Secure Security', 'price': '200'}]
                }
            ];
            var Items = '';
            var Total = 0;
            var UserInfo;

            return {
                getItems: function () {
                    return Items;
                },
                setItems: function (value) {
                    Items = value;
                },
                getAvailableSections: function () {
                    return availableSections;
                },
                setAvailableSections: function (value) {
                    availableSections = value;
                },
                getTotal: function () {
                    return Total;
                },
                setTotal: function (value) {
                    Total = value;
                },
                getUserInfo: function () {
                    return UserInfo;
                },
                setUserInfo: function (value) {
                    UserInfo = value;
                }
            };
        }
    ]);
})(angular);
