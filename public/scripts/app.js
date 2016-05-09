// ==========================================================================
// App
// ==========================================================================


'use strict';


var pleaApp = angular.module('pleaApp', [
  'ngRoute', 
  'ngSanitize',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  
  
  $urlRouterProvider.otherwise('/');
  
  
  $stateProvider
  
    .state('index', {
      url: '/',
      templateUrl : 'home.html',
      controller  : 'ForwardController',
      controllerAs : 'forward',
      params: {
        forwardTo: 'your-case'
      }
    })
    
    .state('your-case', {
      url: '/your-case',
      templateUrl : 'your-case.html',
      controller: 'ForwardController',
      params: {
        forwardTo: 'your-details'
      }
    })
    
    .state('your-details', {
      url: '/your-details',
      templateUrl : 'your-details.html',
      controller: 'ForwardController',
      params: {
        forwardTo: 'your-plea'
      }
    })
    
    .state('your-plea', {
      url: '/your-plea',
      templateUrl : 'your-plea.html',
      controller: 'ForwardController',
      params: {
        forwardTo: 'employment'
      }
    })




    // EMPLOYMENT

    .state('employment', {
      url: '/employment',
      templateUrl : 'your-employment.html',
      controller: 'EmploymentController'
    })
  
    .state('employment-employed-finances', {
      url: '/employment/employed/finances',
      templateUrl : 'employed-finances.html',
      controller  : 'EmployedFinancesController'
    })
    
    .state('employment-employed-receiving-benefits-finances', {
      url: '/employment/employed-receiving-benefits/finances',
      templateUrl : 'employed-receiving-benefits-finances.html',
      controller  : 'EmployedBenefitsFinancesController'
    })
    
    .state('employment-self-employed-finances', {
      url: '/employment/self-employed/finances',
      templateUrl : 'self-employed-finances.html',
      controller  : 'SelfEmployedFinancesController'
    })
    
    .state('employment-self-employed-receiving-benefits-finances', {
      url: '/employment/self-employed-receiving-benefits/finances',
      templateUrl : 'self-employed-receiving-benefits-finances.html',
      controller  : 'SelfEmployedBenefitsFinancesController'
    })
  
    .state('employment-work-benefits-finances', {
      url: '/employment/work-benefits/finances',
      templateUrl : 'work-benefits-finances.html',
      controller  : 'WorkBenefitsFinancesController'
    })

    .state('employment-other-finances', {
      url: '/employment/other/finances',
      templateUrl : 'other-finances.html',
      controller  : 'OtherFinancesController'
    })



  
  
  
  


  

  .state('your-expenses', {
    url: '/your-expenses',
    templateUrl : 'your-expenses.html',
    controller  : 'yourExpensesController'
  })
  
  .state('your-expenses/other', {
    url: '/your-expenses/other',
    templateUrl : 'other-expenses.html',
    controller  : 'otherExpensesController'
  })
  
  .state('confirm-plea', {
    url: '/confirm-plea',
    templateUrl : 'confirm-plea.html',
    controller  : 'confirmPleaController'
  })
  
  .state('/confirmation', {
    url: '/confirmation',
    templateUrl : 'confirmation.html',
    controller  : 'confirmationController'
  })
  
  .state('help-making-a-plea-online', {
    url: '/help-making-a-plea-online',
    templateUrl : 'help-making-a-plea-online.html',
    controller  : 'pleaHelpController'
  })
  
});

