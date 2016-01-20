(function() {
  'use strict';

  angular
    .module('blakeGuilloud')
    .controller('mainController', function($scope){
      $scope.activate = function(){
        console.log('bluecat!');
      }
    })

}());
