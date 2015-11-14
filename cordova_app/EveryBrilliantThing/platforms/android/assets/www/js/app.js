var directives = angular.module('directives', [
  'DailySpotlightDirective',
  'PostDirective',
  'PostsContainerDirective',
  'NavigationDirective',
  'AboutDirective',
  'TagContainerDirective',
  'PostEditorDirective',
  'SearchDirective',
  'ScrollTopDirective',
  'SharingContainerDirective'
]);

var services = angular.module('services', [
  'SearchService'
]);

var app = angular.module('mainApp', ['directives', 'services', 'ngRoute', 'ng-fastclick']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<div posts-container class="posts-container"></div>'
    })
    .when('/post-editor', {
      template: '<div post-editor></div>'
    })
    .when('/about-us', {
      template: '<div about></div>'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
