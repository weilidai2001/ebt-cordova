angular.module('SearchDirective', ['SearchService'])
  .directive('search', function() {
    return {
      templateUrl: 'partials/search.html',
      restrict: 'A',
      scope: {
        searchQuery: '=searchQuery',
        selectedTag: '=selectedTag'
      },
      controller: function($scope, $rootScope, Search) {
        $scope.visible = false;

        $rootScope.$watch(
          function() {
            return Search.isVisible();
          },
          function(newVal) {
            $scope.visible = newVal;
          }
        );

        $scope.hideSearch = function() {
          $scope.searchQuery = '';
          $scope.selectedTag = '';
          Search.hide();
        };
      }
    };
  });
