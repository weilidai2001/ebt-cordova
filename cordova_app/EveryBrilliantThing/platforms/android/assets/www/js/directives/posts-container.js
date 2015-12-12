angular.module('PostsContainerDirective', ['SearchService'])
  .directive('postsContainer', ['$http', '$routeParams', function($http, $routeParams) {
    return {
      templateUrl: 'partials/posts-container.html',
      restrict: 'A',
      scope: {},
      controller: function($scope) {
        $scope.posts = [
          {
            "_id": 1,
            "body": "Ice cream",
            "style": 1,
            "color": 2,
            "tag": "Food and Drink"
          },
          {
            "_id": 2,
            "body": "Water fights",
            "style": 2,
            "color": 6,
            "tag": "Memories"
          },
          {
            "_id": 3,
            "body": "Staying up past your bedtime and being allowed to watch TV",
            "style": "2",
            "color": "5",
            "isDailySpotlight": false,
            "tag": "Memories"
          },
          {
            "_id": 4,
            "body": "The colour yellow",
            "style": "3",
            "color": "1"
          },
          {
            "_id": 5,
            "body": "Things with stripes",
            "style": "2",
            "color": "5"
          },
          {
            "_id": 6,
            "body": "Rollercoasters.",
            "style": 3,
            "color": 1,
            "tag": "Leisure"
          },
          {
            "_id": 7,
            "body": "People falling over",
            "style": 1,
            "color": 2,
            "tag": "Surprises"
          },
          {
            "_id": 8,
            "style": 3,
            "color": 6,
            "tag": "",
            "body": "A soft pillow"
          },
          {
            "_id": 11,
            "body": "bed",
            "style": 1,
            "color": 4,
            "tag": "Warm and Fuzzy"
          },
          {
            "_id": 22,
            "style": 3,
            "color": 5,
            "tag": "Food and Drink",
            "body": "Donuts"
          },
          {
            "_id": 23,
            "body": "Garfield",
            "style": "2",
            "color": "3"
          },
          {
            "_id": 24,
            "body": "Spaghetti Bolognaise",
            "style": 1,
            "color": 2,
            "tag": "Food and Drink"
          },
          {
            "_id": 25,
            "body": "Wearing a cape",
            "style": 2,
            "color": 3,
            "tag": "Culture"
          },
          {
            "_id": 26,
            "body": "Peeing in the sea and nobody knows",
            "style": 1,
            "color": 6,
            "tag": "Memories"
          },
          {
            "_id": 31,
            "body": "Birdsong",
            "style": 2,
            "color": 3,
            "tag": "Wildlife"
          },
          {
            "_id": 45,
            "body": "Hugging",
            "style": 2,
            "color": 6,
            "tag": "Warm and Fuzzy"
          },
          {
            "_id": 201,
            "body": "Hammocks",
            "style": 1,
            "color": 4,
            "tag": "Culture"
          },
          {
            "_id": 313,
            "body": "Having a piano in the kitchen",
            "style": 1,
            "color": 5,
            "tag": "Surprises"
          },
          {
            "_id": 314,
            "body": "The way Ray Charles sings the word 'You'",
            "style": 1,
            "color": 3,
            "tag": "People"
          },
          {
            "_id": 315,
            "body": "The smell of old books",
            "style": 2,
            "color": 6,
            "tag": "Warm and Fuzzy"
          },
          {
            "_id": 316,
            "body": "Andre Agassi",
            "style": 1,
            "color": 3,
            "tag": "People"
          },
          {
            "_id": 319,
            "body": "The even numbered Star Trek films",
            "style": 2,
            "color": 1,
            "tag": "Media"
          },
          {
            "_id": 320,
            "body": "Burning things",
            "style": "1",
            "color": "2"
          },
          {
            "_id": 321,
            "body": "Laughing so hard you shoot milk out of your nose",
            "style": "1",
            "color": "3",
            "isDailySpotlight": false,
            "tag": ""
          },
          {
            "_id": 322,
            "body": "Making up after an argument",
            "style": 2,
            "color": 1,
            "tag": "Warm and Fuzzy"
          },
          {
            "_id": 324,
            "body": "Nina Simone’s voice",
            "style": 1,
            "color": 2,
            "tag": "People"
          },
          {
            "_id": 341,
            "body": "Alcohol",
            "style": "2",
            "color": "5"
          },
          {
            "_id": 516,
            "body": "Winning something",
            "style": 1,
            "color": 2,
            "tag": "Warm and Fuzzy"
          },
          {
            "_id": 517,
            "body": "Knowing someone well enough to get them to check your teeth for broccoli",
            "style": 1,
            "color": 3,
            "tag": "Warm and Fuzzy"
          },
          {
            "_id": 518,
            "body": "When idioms coincide with real-life occurrences, for instance: waking up, realising something and simultaneously smelling coffee.",
            "style": "3",
            "color": "6"
          },
          {
            "_id": 521,
            "body": "The word plinth",
            "style": "2",
            "color": "1"
          },
          {
            "_id": 575,
            "body": "Piglets",
            "style": 1,
            "color": 3,
            "tag": "Wildlife"
          },
          {
            "_id": 577,
            "body": "Tea and biscuits",
            "style": "2",
            "color": "5"
          },
          {
            "_id": 654,
            "body": "Marlon Brando",
            "style": "1",
            "color": "2"
          },
          {
            "_id": 761,
            "body": "Deciding you’re not too old to climb trees",
            "style": "3",
            "color": "4"
          },
          {
            "_id": 823,
            "body": "Skinny dipping",
            "style": "1",
            "color": "6"
          },
          {
            "_id": 992,
            "body": "Knowing to jangle keys at the wildlife park if you want the otters to come out",
            "style": "2",
            "color": "3"
          },
          {
            "_id": 993,
            "body": "Having dessert as a main course",
            "style": "1",
            "color": "2"
          },
          {
            "_id": 994,
            "body": "Hairdressers who listen to what you want",
            "style": "2",
            "color": "3"
          },
          {
            "_id": 995,
            "body": "Bubble wrap",
            "style": "1",
            "color": "2"
          },
          {
            "_id": 996,
            "body": "Really good oranges",
            "style": "2",
            "color": "6"
          },
          {
            "_id": 997,
            "body": "Cycling downhill",
            "style": 1,
            "color": 4,
            "tag": "Sport"
          },
          {
            "_id": 998,
            "body": "Aromatic duck pancakes with hoi sin sauce",
            "style": 2,
            "color": 6,
            "tag": "Food and Drink"
          },
          {
            "_id": 999,
            "body": "Sunlight",
            "style": "2",
            "color": "5"
          },
          {
            "_id": 1000,
            "body": "When someone lends you books",
            "style": "1",
            "color": "1"
          },
          {
            "_id": 1001,
            "body": "When someone actually reads the books you give them",
            "style": "3",
            "color": "5"
          },
          {
            "_id": 1002,
            "body": "When you learn something about someone that surprises you but which makes complete sense",
            "style": "3",
            "color": "1"
          },
          {
            "_id": 1003,
            "body": "Realising that for the first time in your life someone is occupying your every waking thought, making it hard to eat or sleep or concentrate, and that they feel familiar to you even though they’re brand new",
            "style": "3",
            "color": "1"
          },
          {
            "_id": 1004,
            "body": "Finding an opportunity to say this in a way which doesn’t involve being in the same room at the same time, as we’re both shy and terrified of rejection and if I don’t say something now, it’ll never happen",
            "style": "2",
            "color": "3"
          },
          {
            "_id": 1005,
            "body": "Writing about yourself in the Third Person",
            "style": "1",
            "color": "2"
          },
          {
            "_id": 1006,
            "body": "Surprises",
            "style": 1,
            "color": 1,
            "tag": "Surprises"
          },
          {
            "_id": 1007,
            "body": "The fact that sometimes there is a perfect song to match how you’re feeling",
            "style": "3",
            "color": "1"
          },
          {
            "_id": 1008,
            "body": "Dancing in private",
            "style": "2",
            "color": "3"
          },
          {
            "_id": 1009,
            "body": "Dancing in public, fearlessly",
            "style": "1",
            "color": "2"
          },
          {
            "_id": 1010,
            "body": "Reading something which articulates exactly how you feel but lacked the words to express yourself",
            "style": "2",
            "color": "5"
          },
          {
            "_id": 1092,
            "body": "Conversation",
            "style": "2",
            "color": "3"
          },
          {
            "_id": 1427,
            "body": "Not worrying about how much money you’re spending on holiday because all international currency looks like Monopoly money",
            "style": "2",
            "color": "6"
          },
          {
            "_id": 1654,
            "body": "Christopher Walken’s voice",
            "style": "2",
            "color": "3"
          },
          {
            "_id": 1655,
            "body": "Christopher Walken’s hair",
            "style": "2",
            "color": "3"
          },
          {
            "_id": 1857,
            "body": "Planning a declaration of love",
            "style": "1",
            "color": "3"
          },
          {
            "_id": 2000,
            "body": "Coffee",
            "style": 2,
            "color": 6,
            "tag": "Warm and Fuzzy"
          },
          {
            "_id": 2001,
            "body": "Films that are better than the books they’re adapted from",
            "style": "1",
            "color": "1"
          },
          {
            "_id": 123321,
            "body": "Palindromes",
            "style": "1",
            "color": "4"
          },
          {
            "_id": 253263,
            "body": "The feeling of calm which follows the realisation that, although you may be in a regrettable situation, there's nothing you can do about it",
            "style": "1",
            "color": "2"
          },
          {
            "_id": 525924,
            "body": "Track 7 on every great record",
            "style": "1",
            "color": "4"
          },
          {
            "_id": 777777,
            "body": "The prospect of dressing up as a Mexican wrestler",
            "style": "1",
            "color": "1"
          },
          {
            "_id": 826979,
            "body": "The fact that Beyonce is Gustaf Mahler’s eighth cousin, four times removed",
            "style": "2",
            "color": "3"
          },
          {
            "_id": 999997,
            "body": "The alphabet",
            "style": "3",
            "color": "1"
          },
          {
            "_id": 999998,
            "body": "Inappropriate songs played at emotional moments",
            "style": "1",
            "color": "3"
          },
          {
            "_id": 999999,
            "body": "Completing a task",
            "style": "2",
            "color": "5"
          }
        ];

        $scope.selectedPosts = [];
        $scope.searchFilter = '';
        $scope.tagFilter = '';

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

        $http
          .get('http://everybrilliantthing.tk/rest/posts')
          .success(function(response) {
            $scope.posts = response;
            filterByUrlQueryParams();
            $scope.tagsVisible = !$routeParams.ids;
          });
      }
    };
  }]);
