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

    .when('/your-finances/employed/', {
      templateUrl : 'your-finances-employed.html',
      controller  : 'yourFinancesController'
    })
    
    .when('/your-finances/work-benefits/', {
      templateUrl : 'your-finances-work-benefits.html',
      controller  : 'yourFinancesController'
    })
    
    .when('/your-finances/other/', {
      templateUrl : 'your-finances-other.html',
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

