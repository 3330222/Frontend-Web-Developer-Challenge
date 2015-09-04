'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:FacilityBookingDetailCtrl
 * @description
 * # FacilityBookingDetailCtrl
 * Controller of the testApp
 */
angular.module('foodieApp')
  .controller('SearchDetailCtrl', function($scope, productService, $http, $location, $window, $rootScope, $timeout, productService2) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.todos = productService.getProduct();


    $scope.go = function(item) {
      //console.log(item.name)
      //console.log("go2");
      productService.addProduct(item.nutrients.important);
      productService2.addProduct(item.nutrients.extra);
      $location.path("/test");
    }




  });
