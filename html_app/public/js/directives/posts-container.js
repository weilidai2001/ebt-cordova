angular.module('PostsContainerDirective', [])

    .directive('postsContainer', function($http) {
        return {
            templateUrl: 'partials/posts-container.html',
            restrict: 'E',
            scope: {},
            controller: function($scope, $rootScope) {
                $scope.posts = [];

                $http
                    .get("http://everybrilliantthing.tk/rest/posts")
                    .success(function (response) {
                        $scope.posts = response;
                    });
            }
        };
    });
