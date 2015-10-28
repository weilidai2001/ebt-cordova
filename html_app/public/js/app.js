var directives = angular.module('directives', [
    'DailySpotlightDirective',
    'PostDirective',
    'PostsContainerDirective',
    'NavigationDirective',
    'AboutDirective',
    'TagContainerDirective',
    'PostEditorDirective'
]);

var app = angular.module('mainApp', ['directives', 'ngRoute', 'ng-fastclick']);

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
