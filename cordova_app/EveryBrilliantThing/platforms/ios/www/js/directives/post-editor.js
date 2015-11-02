angular.module('PostEditorDirective', [])

.directive('postEditor', ['$http', '$window', '$location', function($http, $window, $location) {
  return {
    templateUrl: 'partials/post-editor.html',
    restrict: 'A',
    scope: {

    },
    controller: function($scope) {
      $scope.style = 1;
      $scope.color = 1;
      $scope.postBody = '';
      $scope.colorSelectionVisible = false;
      $scope.styleSelectionVisible = false;
      $http
        .get(paths.tagsEndpoint)
        .success(function(response) {
          $scope.tags = response;
        });

      $scope.setColor = function(color) {
        $scope.color = color;
        $scope.colorSelectionVisible = false;
      };

      $scope.setStyle = function(style) {
        $scope.style = style;
        $scope.styleSelectionVisible = false;
      };

      $scope.setTag = function(event) {
        var selectedElement = event.srcElement;
        $scope.selectedTag = $(selectedElement).text();
        $scope.tagSelectionVisible = false;
      };

      $scope.hidePostEditor = function() {
        $scope.postEditorVisible = false;
      };

      $scope.submitPost = function(postBody) {
        if (postBody.length === 0) {
          return $window.alert('Post cannot be blank');
        }
        var post = {
          style: $scope.style,
          color: $scope.color,
          tag: $scope.selectedTag == "Add a tag" ? "" : $scope.selectedTag,
          body: postBody
        };
        resetPostEditor();
        $http.post(paths.postsEndpoint, post).success(function(data, status) {
          $location.path("/").search({
            goto: data.newId
          });
        });
      };

      function resetPostEditor() {
        $scope.style = 1;
        $scope.color = 1;
        $scope.postBody = '';
        $scope.colorSelectionVisible = false;
        $scope.styleSelectionVisible = false;
      }
    }
  };
}]);
