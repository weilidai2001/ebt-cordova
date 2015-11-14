angular.module('DailySpotlightDirective', [])
  .directive('dailySpotlight', function($http) {
    return {
      templateUrl: 'partials/daily-spotlight.html',
      restrict: 'A',
      scope: {
        visible: '='
      },
      link: function(scope) {
        $http
          .get(paths.dailySpotlightEndpoint)
          .success(function(response) {
            scope.body = response.body;
          });
      }
    };
  });
