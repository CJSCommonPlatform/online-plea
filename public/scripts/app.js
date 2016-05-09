// ==========================================================================
// App
// ==========================================================================


'use strict';


var pleaApp = angular.module('pleaApp', [
  'ngRoute', 
  'ngSanitize'
])

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
  
  .when('/your-details', {
    templateUrl : 'your-details.html',
    controller  : 'yourDetailsController'
  })
  
  .when('/your-plea', {
    templateUrl : 'your-plea.html',
    controller  : 'yourPleaController'
  })
  
  .when('/your-employment', {
    templateUrl : 'your-employment.html',
    controller  : 'yourEmploymentController'
  })
  
  .when('/your-finances/', {
    templateUrl : 'your-finances.html',
    controller  : 'yourFinancesController'
  })


  // YOUR EMPLOYMENT


  // Employed
  .when('/your-finances/employed/', {
    templateUrl : 'employed.html',
    controller  : 'yourFinancesController'
  })

  // Employed and also receiving benefits
  .when('/your-finances/employed-receiving-benefits/', {
    templateUrl : 'employed-receiving-benefits.html',
    controller  : 'yourFinancesController'
  })
  
    // Your benefits (employed)
    .when('/your-finances/employed-receiving-benefits/your-benefits/', {
      templateUrl : 'your-benefits-employed.html',
      controller  : 'yourFinancesController'
    })
  
  
  // Self employed
  .when('/your-finances/self-employed/', {
    templateUrl : 'self-employed.html',
    controller  : 'yourFinancesController'
  })
  
  // Self employed receiving benefits
  .when('/your-finances/self-employed-receiving-benefits/', {
    templateUrl : 'self-employed-receiving-benefits.html',
    controller  : 'yourFinancesController'
  })

  // Work benefits
  .when('/your-finances/work-benefits/', {
    templateUrl : 'work-benefits.html',
    controller  : 'yourFinancesController'
  })
  
  // Other
  .when('/your-finances/other/', {
    templateUrl : 'other.html',
    controller  : 'yourFinancesController'
  })
  

  .when('/your-expenses', {
    templateUrl : 'your-expenses.html',
    controller  : 'yourExpensesController'
  })
  
  .when('/your-expenses/other', {
    templateUrl : 'other-expenses.html',
    controller  : 'otherExpensesController'
  })
  
  .when('/confirm-plea', {
    templateUrl : 'confirm-plea.html',
    controller  : 'confirmPleaController'
  })
  
  .when('/confirmation', {
    templateUrl : 'confirmation.html',
    controller  : 'confirmationController'
  })
  
  .when('/help-making-a-plea-online', {
    templateUrl : 'help-making-a-plea-online.html',
    controller  : 'pleaHelpController'
  })
  
  .otherwise({
    redirectTo: '/'
  });
  
});

