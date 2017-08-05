angular.module('app', [])
  .controller('QuoteCtrl', function($scope, $http) {

    $scope.getQuote = function() {
      $http.get('/new-quote')
        .success(function(res) {
          alert('got a response')
        })
        .error(function() {
          alert('response failed')
        });
    }
  })




