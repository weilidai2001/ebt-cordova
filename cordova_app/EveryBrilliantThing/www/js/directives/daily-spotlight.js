angular.module('DailySpotlightDirective', [])
    .directive('dailySpotlight', function () {
        return {
            templateUrl: 'partials/daily-spotlight.html',
            restrict: 'E',
            scope: {
                visible: '='
            },
            controller: function ($scope) {
                $scope.body = "random text";
            }
        };
    });
