angular.module('maps.search', [])

.factory('Search', function($http){
  var search = function(data){
    return $http({
      method: 'POST',
      url: '/search',
      data: data
    })
    .then(function(response){
      return response;
    })
  }

  return {
    search: search
  };
})

.controller('SearchController', function($scope, Search){
  $scope.data = {};

  $scope.search = function(address) {
    Search.search($scope.data)
    .then(function(res) {
      $scope.data.result = res.data;
    })
  }
})
