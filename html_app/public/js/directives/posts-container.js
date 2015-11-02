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
        $scope.tagsVisible = true;

        function filterByUrlQueryParams() {
          if ($routeParams.ids) {
            var visibleIds = $routeParams.ids.split("-");
            angular.forEach($scope.posts, function(post) {
              post.visible = visibleIds.indexOf(post._id.toString()) > -1;
            });
          } else {
            angular.forEach($scope.posts, function(post) {
              post.visible = true;
            });
          }
        }

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
            filterByUrlQueryParams();
            $scope.tagsVisible = !$routeParams.ids;
          });

        $http
          .get('http://everybrilliantthing.tk/rest/tags')
          .success(function(response) {
            $scope.tags = response;
          });
      }
    };
  }]);
