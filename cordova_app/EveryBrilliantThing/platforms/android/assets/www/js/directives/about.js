angular.module('AboutDirective', [])
  .directive('about', function() {
    return {
      templateUrl: 'partials/about-us.html',
      restrict: 'A'
    };
  });
