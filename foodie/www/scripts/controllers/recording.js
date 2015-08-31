'use strict';

/**
 * @ngdoc function
 * @name foodieApp.controller:RequestCtrl
 * @description
 * # RequestCtrl
 * Controller of the foodieApp
 */
angular.module('foodieApp')
  .controller('RecordCtrl', function ($scope,$http,$location,$cordovaCamera,$rootScope,$cordovaSQLite) {

$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
$scope.result = [];

    // gives another array on change
 $scope.updateResult = function(typed){
     if(typed.length<2) return;
  var query = "SELECT foodname FROM foodie WHERE foodname LIKE ? LIMIT 3";
        $cordovaSQLite.execute(db, query, [typed+'%']).then(function(res) {
               
            if($scope.result.length<3){

                for(var s = 0;s<res.rows.length;s++){ 
                
             $scope.result.push(res.rows.item(s).foodname)
         
                }
            
            }else{

             $scope.result.length = 0
              for(var s = 0;s<res.rows.length;s++){ 
             $scope.result.push(res.rows.item(s).foodname)
              }
}

                
        }, function (err) {
            console.error(err);
        });
 
 }
 
$scope.submit=function(foodname, portions){
   //insert data in db
    var d = Date.now()
    var query = "INSERT INTO foodie (foodname,portion,date) VALUES (?,?,?)";    
$cordovaSQLite.execute(db, query, [foodname, portions,d]).then(function(res) {     
            $location.path('/main')
        }, function (err) {
            console.error(err);
        });  


}    

  });
