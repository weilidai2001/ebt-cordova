angular.module('SharingContainerDirective', [])

  .directive('sharingContainer', [function() {
    return {
      templateUrl: 'partials/sharing-container.html',
      restrict: 'A',
      controller: function() {
        }
    };
  }]);
