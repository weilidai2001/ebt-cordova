var directives = angular.module('directives', [
    'DailySpotlightDirective',
    'PostDirective',
    'PostsContainerDirective',
    'NavigationDirective'
]);

var app = angular.module('mainApp', ['directives', 'ng-fastclick']);