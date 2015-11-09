angular.module('SharingContainerDirective', [])

.directive('sharingContainer', [function() {
  return {
    templateUrl: 'partials/sharing-container.html',
    restrict: 'A',
    scope: {
      selected: '='
    },
    controller: function($scope, $rootScope) {
      var base = 'everybrilliantthing.tk' + '/#?ids=';
      $scope.url = base;

      $rootScope.$on('selectedPostsChange', function(event, ids) {
        $scope.url = base + ids.join('-');
      });

      $scope.close = function() {
        $scope.selected = [];
        $rootScope.$emit('clearCheckboxes');
      };
    }
  };
}]);
