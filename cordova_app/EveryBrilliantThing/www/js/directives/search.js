angular.module('SearchDirective', ['SearchService'])
  .directive('search', function() {
    return {
      templateUrl: 'partials/search.html',
      restrict: 'A',
      scope: {
        visible: '=visible',
        query: '=query'
      },
      controller: function($scope, $rootScope, Search) {
        $rootScope.$watch(
          function() {
            return Search.isVisible();
          },
          function(newVal) {
            $scope.visible = newVal;
          }
        );

        $scope.hideSearch = function() {
          $scope.query = '';
          Search.hide();
        };
      }
    };
  });
