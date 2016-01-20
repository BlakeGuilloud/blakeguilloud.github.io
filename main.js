(function() {
  'use strict';
  angular
    .module('blakeGuilloud', [
      'ngRoute'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html'
        })
        .when('/experience',{
          templateUrl: 'views/experience.html'
        })
        .when('/projects',{
          templateUrl: 'views/projects.html'
        })
    })

}());
