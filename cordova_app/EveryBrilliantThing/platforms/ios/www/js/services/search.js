angular.module('SearchService', [])
  .service('Search', function() {
    var searchVisible = false;

    return {
      show: function() {
        searchVisible = true;
        return searchVisible;
      },
      hide: function() {
        searchVisible = false;
        return searchVisible;
      },
      isVisible: function() {
        return searchVisible;
      }
    };
  });
