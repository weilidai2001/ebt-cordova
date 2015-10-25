angular.module('PostDirective', [])

.directive('post', function() {
  return {
    templateUrl: 'partials/post.html',
    restrict: 'A',
    scope: {
      data: '='
    },
    controller: function($scope, $rootScope) {

    }
  };
});
