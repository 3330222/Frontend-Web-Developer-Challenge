'use strict';

/**
 * @ngdoc function
 * @name foodieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodieApp
 */
angular.module('foodieApp')
  	.controller('TestCtrl',  function ($rootScope, $scope, MainService, $location,$http,$cordovaSQLite) {
    
    
    console.log("test")
//$( "#accordion" ).accordion();    
    
      $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
    
});