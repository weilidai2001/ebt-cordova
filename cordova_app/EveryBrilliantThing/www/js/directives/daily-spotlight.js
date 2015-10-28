angular.module('DailySpotlightDirective', [])
  .directive('dailySpotlight', function() {
    return {
      templateUrl: 'partials/daily-spotlight.html',
      restrict: 'A',
      scope: {
        visible: '='
      },
      controller: function($scope) {
        $scope.body = "random text";
      }
    };
  });
