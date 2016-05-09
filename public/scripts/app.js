// ==========================================================================
// App
// ==========================================================================


'use strict';


var pleaApp = angular.module('pleaApp', [
  'ngStorage',
  'ngRoute', 
  'ngSanitize',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  
  
  $urlRouterProvider.otherwise('/');
  
  
  $stateProvider
  
  
    // FORWARDING
  
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
      controller: 'Forward2Controller',
      params: {
        goToStates: [
          {
            vmPropertyName: 'data.employment',
            vmPropertyValue: {
              constantName: 'employmentStatus',
              constantValue: 'EMPLOYED'
            },
            stateName: 'employment.employed.finances'
          },
          {
            vmPropertyName: 'data.employment',
            vmPropertyValue: {
              constantName: 'employmentStatus',
              constantValue: 'EMPLOYED_BENEFITS'
            },
            stateName: 'employment.employed-receiving-benefits.finances'
          }
        ]
      }
    })

    .state('employment.employed', {
        abstract: true,
        url: '/employed',
        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
    })

    .state('employment.employed.finances', {
      url: '/finances',
      views : {
        "@" : { // here we are using absolute name targeting
          templateUrl: "employed-finances.html",
          controller: "EmployedFinancesController" 
        }
      }
    })

    .state('employment.employed-receiving-benefits', {
        abstract: true,
        url: '/employed-receiving-benefits',
        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
    })
    
    .state('employment.employed-receiving-benefits.finances', {
      url: '/finances',
      views: {
        "@": {
          templateUrl : 'employed-receiving-benefits-finances.html',
          controller  : 'EmployedBenefitsFinancesController'
        }
      }      
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


    // EXPENSES
  
    .state('employment-employed-finances-expenses-household', {
      url: '/employment/employed/finances/expenses/household',
      templateUrl : 'household-expenses.html',
      controller  : 'HouseholdExpensesController'
    })
    
    
    .state('employment-employed-finances-expenses-other', {
      url: '/employment/employed/finances/expenses/other',
      templateUrl : 'other-expenses.html',
      controller  : 'OtherExpensesController'
    })
    
    .state('employment-employed-receiving-benefits-finances-expenses-household', {
      url: '/employment/employed-receiving-benefits/finances/expenses/household',
      templateUrl : 'household-expenses.html',
      controller  : 'HouseholdExpensesController'
    })
    
    .state('employment-employed-receiving-benefits-finances-expenses-other', {
      url: '/employment/employed-receiving-benefits/finances/expenses/other',
      templateUrl : 'other-expenses.html',
      controller  : 'OtherExpensesController'
    })
  
    // BENEFITS
    
    .state('employment-employed-receiving-benefits-finances-benefits', {
      url: '/employment/employed-receiving-benefits/finances/benefits',
      templateUrl : 'benefits.html',
      controller  : 'BenefitsController'
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

