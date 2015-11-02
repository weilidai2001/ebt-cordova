angular.module('ScrollTopDirective', [])
  .directive('scrollTop', function() {
    return {
      templateUrl: 'partials/scroll-top.html',
      restrict: 'A',
      controller: function($scope, $window) {
        $scope.offset = 0;

        angular.element($window).bind("scroll", function() {
          $scope.offset = this.pageYOffset;
          $scope.$apply();
        });

        $scope.scrollTop = function() {
          $('html, body').animate({
            scrollTop: 0
          }, 200);
        };
      }
    };
  });
