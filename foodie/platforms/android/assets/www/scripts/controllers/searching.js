'use strict';

/**
 * @ngdoc function
 * @name foodieApp.controller:FacilityCtrl
 * @description
 * # FacilityCtrl
 * Controller of the foodieApp
 */
angular.module('foodieApp')
	.controller('SearchCtrl', function ($scope,productService, $rootScope, $location,$http) {
    
 $scope.result = [];
   // gives another array on change
 $scope.updateResult = function(typed){
     
     if(typed.length<3)return;
      $http.get('http://test.holmusk.com/food/search?q='+typed)
          .success(function (data, status, headers, config) {
            var result = data  
            for(var s=0;s<result.length;s++){          
                if($scope.result.length<10){                   
                    $scope.result.push(result[s].name)
                
            
                }else{
                    $scope.result.length = 0
                    $scope.result.push(result[s].name)
                                     
                }       
            } 
          });
     
 }
 

    
$scope.go = function(item) {	
    
    
    productService.addProduct($scope.foodname);                         $location.path('/browsingresults')       
    }; 
});
