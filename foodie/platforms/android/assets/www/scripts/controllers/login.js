'use strict';

/**
 * @ngdoc function
 * @name foodieApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the foodieApp
 */
var db = null;//create a db
angular.module('foodieApp')
  .controller('LoginCtrl', function ($scope,$http,$location,$rootScope,$cordovaSQLite) {

    $rootScope.isLoginPage = true;

    function onDeviceReady(){
     // "createDatabase"
     db = window.openDatabase("test", "1.0", "Test DB", 1000000);   
        //drop table 
              $cordovaSQLite.execute(db, "drop TABLE IF EXISTS foodie");
      //drop table  console.log("drop") 
        // "createtable"
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS foodie (id integer primary key, foodname text, portion text,date DATETIME)");

      //insert dummy data   
//    $cordovaSQLite.execute(db, "INSERT INTO foodie (foodname, portion) VALUES ('chicken1','1')");
//         $cordovaSQLite.execute(db, "INSERT INTO foodie (foodname, portion) VALUES ('chicken2','2')");
//        $cordovaSQLite.execute(db, "INSERT INTO foodie (foodname, portion) VALUES ('chicken3','3')");
//         $cordovaSQLite.execute(db, "INSERT INTO foodie (foodname, portion) VALUES ('chicken4','4')");
//        $cordovaSQLite.execute(db, "INSERT INTO foodie (foodname, portion) VALUES ('chicken5','5')");
//        
 
    }  
    

    document.addEventListener("deviceready", onDeviceReady, false);

    
    
    
    
    
    
    $scope.login = function () {      
            $location.path('/main')         
    }

    
});
