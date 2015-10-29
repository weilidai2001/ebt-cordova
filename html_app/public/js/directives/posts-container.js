angular.module('PostsContainerDirective', ['SearchService'])

.directive('postsContainer', ['$http', '$routeParams', function($http, $routeParams) {
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

      console.log("RouteParams", $routeParams);

      // TODO Find out how to listen to $viewContentLoaded event and use jQuery to scroll to /?goto=18
      $scope.$on('$viewContentLoaded', function(){
        //Here your view content is fully loaded !!
        console.log("Content loaded");
      });


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
}]);
