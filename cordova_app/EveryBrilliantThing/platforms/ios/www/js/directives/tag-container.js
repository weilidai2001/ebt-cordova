angular.module('TagContainerDirective', [])

    .directive('tagContainer', function() {
        return {
            templateUrl: 'partials/tag-container.html',
            restrict: 'A',
            scope: {
                tags: '=',
                searchTag: '=search'
            },
            controller: function($scope) {
                $scope.setSearchTag = function(event) {
                    $scope.searchTag = $(event.srcElement).text();
                };

                $scope.clearSearchTag = function() {
                    $scope.searchTag = "";
                };
            }
        };
    });
