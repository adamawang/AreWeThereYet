angular.module('maps', [
  'maps.search',
  'ngRoute'
  ])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/search/search.html',
      controller: 'SearchController'
    })
})
