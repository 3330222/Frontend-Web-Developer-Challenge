'use strict';

/**
 * @ngdoc function
 * @name foodieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodieApp
 */
angular.module('foodieApp')
  	.controller('MainCtrl',  function ($rootScope, $scope, $location,$http) {
	    $rootScope.isLoginPage = false;
        $rootScope.logout = function(){    
        $location.path("/login")                        
        }
          
     $scope.go=function(){
     
     $location.path("/test")
     }     
        
});
