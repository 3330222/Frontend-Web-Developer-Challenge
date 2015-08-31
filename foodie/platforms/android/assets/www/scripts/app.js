'use strict';

/**
 * @ngdoc overview
 * @name foodieApp
 * @description
 * # foodieApp
 *
 * Main module of the application.
 */
angular
  .module('foodieApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCordova',
    'autocomplete',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/browsing', {
        templateUrl: 'views/searching.html',
        controller: 'SearchCtrl'
      })
      .when('/browsingresults', {
        templateUrl: 'views/searchresults.html',
        controller: 'SearchResultsCtrl'
      })
        
      .when('/browsingdetail', {
        templateUrl: 'views/searchingdetail.html',
        controller: 'SearchDetailCtrl'
      })
     .when('/recording', {
        templateUrl: 'views/recording.html',
        controller: 'RecordCtrl'
      })
      .when('/myrecords', {
        templateUrl: 'views/myrecords.html',
        controller: 'MyRecordsCtrl'
      })
//     .when('/test', {
//        templateUrl: 'test.html',
//        controller: 'TestCtrl'
//      })
      .otherwise({
        redirectTo: '/'
      });
  });
