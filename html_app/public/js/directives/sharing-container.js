angular.module('SharingContainerDirective', [])

  .directive('sharingContainer', [function() {
    return {
      templateUrl: 'partials/sharing-container.html',
      restrict: 'A',
      scope: {
        selected: '='
      },
      controller: function($scope, $rootScope) {
        $scope.close = function(){
          $scope.selected = [];
          $rootScope.$emit('clearCheckboxes');
        }
      }
    };
  }]);
