"use strict";
module.exports = function ($scope, $timeout) {

    $scope.init = function () {
        $scope.values = [];
        $scope.$parent.interval = parseInt($scope.$parent.interval);
        var count = 0;
        var time = function (c) {
            $timeout(function () {
                console.log(c);
                console.log($scope.values);
                $scope.values.push(c + $scope.$parent.interval);
            }, 10);
        };

        for (count = 0; count < 500; count++) {
            time(count);
        }
    };
};