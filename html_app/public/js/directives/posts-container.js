angular.module('PostsContainerDirective', [])

.directive('postsContainer', function($http) {
  return {
    templateUrl: 'partials/posts-container.html',
    restrict: 'A',
    scope: {

    },
    controller: function($scope, $rootScope) {
      $scope.posts = [];
      $scope.selectedPosts = [];
      $scope.searchFilter = '';

      $http
        .get("http://everybrilliantthing.tk/rest/posts")
        .success(function(response) {
          $scope.posts = response;
        });
    }
  };
});
