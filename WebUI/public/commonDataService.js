/**
 * Created by Subbu on 4/28/16.
 */

(function (angular) {
    var module = angular.module("data", []);

    module.factory("commonDataService", [

        function () {
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
