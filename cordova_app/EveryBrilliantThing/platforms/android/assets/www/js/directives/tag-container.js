angular.module('TagContainerDirective', [])

.directive('tagContainer', function($http) {
  return {
    templateUrl: 'partials/tag-container.html',
    restrict: 'A',
    scope: {
      selected: '=selected'
    },
    link: function(scope) {
      $http
        .get('http://everybrilliantthing.tk/rest/tags')
        .success(function(response) {
          scope.tags = response;
        });
    },
    controller: function($scope) {
      $scope.setSelectedTag = function(event) {
        $scope.selected = event.srcElement.textContent;
      };

      $scope.clearSelectedTag = function() {
        $scope.selected = '';
      };
    }
  };
});
