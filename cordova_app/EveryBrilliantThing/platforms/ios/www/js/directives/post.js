angular.module('PostDirective', [])

.directive('post', function() {
  return {
    templateUrl: 'partials/post.html',
    restrict: 'E',
    scope: {
      data: '='
    },
    controller: function($scope, $rootScope) {

    }
  };
});
