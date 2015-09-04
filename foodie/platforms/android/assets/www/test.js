'use strict';

/**
 * @ngdoc function
 * @name foodieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodieApp
 */
angular.module('foodieApp')
  .controller('TestCtrl', function($scope, $location, $http, productService, productService2) {


    console.log("test")


    var important = productService.getProduct();
    var extra = productService2.getProduct();
    var data1 = [];
    var data2 = [];
    angular.forEach(important, function(vaule, key) {
      if (vaule != null) {
        data1.push(vaule.value);
      } else {
        data1.push(0);
      }
    });
    angular.forEach(extra, function(vaule, key) {
      if (vaule != null) {
        data2.push(vaule.value);
      } else {
        data2.push(0);
      }
    });


    $scope.data = [data1]
    $scope.data2 = [data2]
    $scope.labels2 = ['vitamin_a(mcg)', 'phosphorus(mg)', 'retinol(mg)', 'iron(mg)', 'thiamin(mg)', 'selenium(mcg)', 'starch(g)', 'zinc(mg)', 'water(g)', 'riboflavin(mg)', 'calcium(mg)', 'vitamin_c(mg)', 'b-carotene(mcg)'];
    $scope.labels = ['sodium(mg)', 'polyunsaturated(g)', 'protein(g)', 'trans(g)', 'sugar(g)', 'monounsaturated(g)', 'potassium(mg)', 'saturated(g)', 'total_carbs(g)', 'dietary_fibre(g)', 'total_fats(g)', 'cholesterol(mg)', 'calories(kcal)'];
    //$scope.series = ['Series A'];


  });
