'use strict';

/**
 * @ngdoc overview
 * @name stockAppApp
 * @description
 * # stockAppApp
 *
 * Main module of the application.
 */
angular
  .module('stockAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    
    .when('/dashboard', {
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl',
      controllerAs: 'dashboard'
    })
    .when('/mystock/:listId', {
      templateUrl: 'views/mystock.html',
      controller: 'MystockCtrl'
      //controllerAs: 'mystock'
    })
    .otherwise({
        redirectTo: '/dashboard'
      }); 
  });
