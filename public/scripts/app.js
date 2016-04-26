// ==========================================================================
// App
// ==========================================================================

'use strict';

var pleaApp = angular.module('pleaApp', ['ngRoute'])

.config(function($routeProvider) {
  
  $routeProvider
  
  .when('/', {
    templateUrl : 'home.html',
    controller  : 'mainController'
  })
  
  .when('/your-case', {
    templateUrl : 'your-case.html',
    controller  : 'yourCaseController'
  })
  
  .when('/case-details', {
    templateUrl : 'case-details.html',
    controller  : 'caseDetailsController'
  })
  
  .when('/your-details', {
    templateUrl : 'your-details.html',
    controller  : 'yourDetailsController'
  })
  
  .when('/your-pleas', {
    templateUrl : 'your-pleas.html',
    controller  : 'yourPleasController'
  })
  
  .when('/your-employment', {
    templateUrl : 'your-employment.html',
    controller  : 'yourEmploymentController'
  })
  
  .when('/your-finances', {
    templateUrl : 'your-finances.html',
    controller  : 'yourFinancesController'
  })
  
  .when('/confirm-plea', {
    templateUrl : 'confirm-plea.html',
    controller  : 'confirmPleaController'
  })
  
  .otherwise({
    redirectTo: '/'
  });
  
});
