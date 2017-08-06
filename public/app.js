angular.module('app', [])
  .controller('QuoteCtrl', function($scope, $http) {

    $scope.seeSavedQuotes = function() {
      $http.get("/quotes")
        .then(function(res) {
          $scope.quotesList = res.data;
        })
    }

    $scope.saveQuote = function() {
      var randQuote = $scope.randomQuote;
      $http.post("/save-quote", {quote: randQuote})
        .then(function(res) {
          $scope.addedQuote = randQuote;
        })
    }

    $scope.getQuote = function() {
      var randomIdx = Math.floor(Math.random() * $scope.quotesBank.length);
      $scope.randomQuote = $scope.quotesBank[randomIdx];
    }
    $scope.quotesBank = [
      "The way to get started is to quit talking and being doing. - Walt Disney",
      "You were born to win, but to be a winner, you must PLAN to win, PREPARE to win, and EXPECT to win. - Zig Ziglar",
      "To improve is to change; to be perfect is to change often - Winston Churchill"
    ]
  })




