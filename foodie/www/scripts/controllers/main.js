'use strict';

/**
 * @ngdoc function
 * @name foodieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodieApp
 */
angular.module('foodieApp')
  	.controller('MainCtrl',  function ($rootScope, $scope, MainService, $location,$http,$cordovaSQLite) {
	    $rootScope.isLoginPage = false;
        $rootScope.logout = function(){    
        $location.path("/login")                        
        }
          
          
        
});
