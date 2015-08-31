'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:FacilityBookingDetailCtrl
 * @description
 * # FacilityBookingDetailCtrl
 * Controller of the testApp
 */
angular.module('foodieApp')
  .controller('SearchResultsCtrl', function ($scope,productService,$http,$location,$window,$rootScope,$timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
var para = productService.getProduct();
   

    $http.get('http://test.holmusk.com/food/search?q='+para).success(function (data, status, headers, config) {
                $scope.todos = data       
               
        }); 
    
    $scope.go=function(item){
    productService.addProduct(item.portions);  
       
    $location.path("/browsingdetail")
    
    }

});