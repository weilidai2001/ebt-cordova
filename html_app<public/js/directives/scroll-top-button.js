angular.module('ScrollTopButtonDirective', [])

.directive('scrollTopButton', function() {
  return {
    templateUrl: 'partials/scroll-top-button.html',
    restrict: 'E',
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
