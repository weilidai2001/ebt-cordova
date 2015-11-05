angular.module('PostDirective', [])

.directive('post', ['$routeParams', function($routeParams) {
  return {
    templateUrl: 'partials/post.html',
    restrict: 'A',
    scope: {
      data: '=',
      selected: '='
    },
    link: function($scope, elem) {
      elem.ready(function() {
        if ($scope.data._id == $routeParams.goto) {
          $('html, body').animate({
            scrollTop: $(elem).offset().top - 200
          }, 500);
        }
      });
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
          $rootScope.$emit('selectedPostsChange', $scope.selected);
        } else {
          removeItemFromArray($scope.selected, $scope.data._id);
          $rootScope.$emit('selectedPostsChange', $scope.selected);
        }
      };

      $rootScope.$on('clearCheckboxes', function(){
        $scope.ticked = false;
      });
    }
  };
}]);
