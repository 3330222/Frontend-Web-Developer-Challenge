'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:FacilityBookingDetailCtrl
 * @description
 * # FacilityBookingDetailCtrl
 * Controller of the testApp
 */
angular.module('foodieApp')
  .controller('SearchDetailCtrl', function ($scope,productService,$http,$location,$window,$rootScope,$timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 
   
  $scope.todos = productService.getProduct();
  
    

    
    

});
