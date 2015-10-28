angular.module('PostDirective', [])

.directive('post', function() {
  return {
    templateUrl: 'partials/post.html',
    restrict: 'A',
    scope: {
      data: '=',
      selected: '='
    },
    controller: function($scope, $rootScope) {
      function removeItemFromArray(arr, item) {
        var index = arr.indexOf(item);
        if (index > -1) {
          arr.splice(index, 1);
        }
      }

      $scope.updateSelected = function() {
        if ($scope.ticked) {
          $scope.selected.push($scope.data._id);
        } else {
          removeItemFromArray($scope.selected, $scope.data._id);
        }
      };
    }
  };
});
