angular.module('NavigationDirective', ['SearchService'])
  .directive('navigation', function() {
    return {
      templateUrl: 'partials/navigation.html',
      restrict: 'A',
      scope: {

      },
      controller: function($scope, $rootScope, Search) {
        $scope.refresh = function() {
          $rootScope.$emit('refresh');
        };

        $scope.showSearch = function() {
          Search.show();

          $('html, body').animate({
            scrollTop: 0
          }, 200);
        };
      }
    };
  });
