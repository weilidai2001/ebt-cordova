angular.module('NavigationDirective', ['SearchService'])
  .directive('navigation', function() {
    return {
      templateUrl: 'partials/navigation.html',
      restrict: 'A',
      scope: {

      },
      controller: function($scope, Search) {
        $scope.showSearch = function() {
          Search.show();

          $('html, body').animate({
            scrollTop: 0
          }, 200);
        };
      }
    };
  });
