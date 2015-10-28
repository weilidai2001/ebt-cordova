angular.module('PostsContainerDirective', ['SearchService'])

.directive('postsContainer', function($http) {
  return {
    templateUrl: 'partials/posts-container.html',
    restrict: 'A',
    scope: {},
    controller: function($scope, $rootScope, Search) {
      $scope.posts = [];
      $scope.selectedPosts = [];
      $scope.searchFilter = '';
      $scope.searchTag = '';
      $scope.searchVisible = false;

      $rootScope.$watch(
        function() {
          return Search.isVisible();
        },
        function(newVal) {
          $scope.searchVisible = newVal;
        }
      );

      $http
        .get('http://everybrilliantthing.tk/rest/posts')
        .success(function(response) {
          $scope.posts = response;
        });

      $http
        .get('http://everybrilliantthing.tk/rest/tags')
        .success(function(response) {
          $scope.tags = response;
        });
    }
  };
});
