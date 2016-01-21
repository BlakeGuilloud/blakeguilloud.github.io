(function() {
  'use strict';
  angular
    .module('blakeGuilloud', [
      'ngRoute',
      'ngAnimate'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/',{
          templateUrl: 'views/me.html'
        })
        .when('/me', {
          templateUrl: 'views/me.html'
        })
        .when('/experience',{
          templateUrl: 'views/experience.html'
        })
        .when('/projects',{
          templateUrl: 'views/projects.html'
        })
    })

}());
