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
      templateUrl: 'home.html',
      controller: 'IndexController',
      params: {
        forwardTo: 'your-case'
      }
    })
    
    .state('your-case', {
      url: '/your-case',
      templateUrl: 'your-case.html',
      controller: 'YourCaseController',
      params: {
        forwardTo: 'your-details'
      }
    })
    
    .state('your-details', {
      url: '/your-details',
      templateUrl : 'your-details.html',
      controller: 'YourDetailsController',
      params: {
        forwardTo: 'your-plea'
      }
    })
    
    .state('your-plea', {
      url: '/your-plea',
      templateUrl : 'your-plea.html',
      controller: 'YourPleaController',
      params: {
        forwardTo: 'employment'
      }
    })
    

    // EMPLOYMENT
    
    .state('employment.out-of-work-benefits', {
        abstract: true,
        url: '/out-of-work-benefits',
        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
    })
  
    .state('employment.out-of-work-benefits.finances', {
      url: '/finances',
      views: {
        '@' : {
          templateUrl : 'out-of-work-benefits-finances.html',
          controller  : 'OutOfWorkBenefitsFinancesController'
        }
      }
    })
    
    .state('employment.other', {
        abstract: true,
        url: '/other',
        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
    })

    .state('employment.other.finances', {
      url: '/finances',
      views: {
        '@' : {
          templateUrl : 'other-finances.html',
          controller  : 'OtherFinancesController'
        }
      }
    })


    // EXPENSES

  .state('your-expenses/other', {
    url: '/your-expenses/other',
    templateUrl : 'other-expenses.html',
    controller  : 'otherExpensesController'
  })
  
  .state('confirm-plea', {
    url: '/confirm-plea',
    templateUrl : 'confirm-plea.html',
    controller  : 'ConfirmPleaController'
  })
  
  .state('confirmation', {
    url: '/confirmation',
    templateUrl : 'confirmation.html',
    controller  : 'PleaConfirmationController'
  })
  
  .state('plea-help', {
    url: '/helping-you-plea-online',
    templateUrl : 'help-making-a-plea-online.html',
    controller  : 'PleaHelpController'
  })
  
});

