angular.module('app', [])
  .controller('QuoteCtrl', function($scope, $http) {

    $scope.getQuotes = function() {
      $http.get("/quotes")
        .then(function(res) {
          $scope.newQuote = JSON.stringify(res.data);
        })
    }



  })




