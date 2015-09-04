'use strict';

/**
 * @ngdoc function
 * @name foodieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodieApp
 */
angular.module('foodieApp')
  	.controller('MyRecordsCtrl',  function ($rootScope, $scope, $location,$http,$cordovaSQLite) {


$scope.result=[];
var query = "SELECT foodname,portion,date FROM foodie order by date DESC ";
$cordovaSQLite.execute(db, query).then(function(res) {
               
        for(var s = 0;s<res.rows.length;s++){ 
             $scope.result.push(res.rows.item(s))
        }
                
        }, function (err) {
            console.error(err);
        });




});
