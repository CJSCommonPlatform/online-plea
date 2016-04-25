// ==========================================================================
// App
// ==========================================================================

'use strict';


var atcmApp = angular.module('atcmApp', ['ngRoute', 'ngMessages'])

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
  
  .otherwise({
    redirectTo: '/'
  });
  
});