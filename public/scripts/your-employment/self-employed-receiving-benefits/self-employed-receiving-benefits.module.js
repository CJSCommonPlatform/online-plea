(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('employment.self-employed-receiving-benefits', {
            abstract: true,
            url: '/self-employed-receiving-benefits',
            // Note: abstract still needs a ui-view for its children to populate.
            // You can simply add it inline here.
            template: '<ui-view/>'
        })

        .state('employment.self-employed-receiving-benefits.finances', {
          url: '/finances',
          views: {
            '@': {
              templateUrl : 'self-employed-receiving-benefits-finances.html',
              controller  : 'SelfEmployedBenefitsFinancesController'
            }
          },          
          data: {
            nextState: 'employment.self-employed-receiving-benefits.finances.benefits'
          }
        })

        .state('employment.self-employed-receiving-benefits.finances.benefits', {
          url: '/benefits',
          views: {
            '@': {
              templateUrl : 'benefits.html',
              controller  : 'BenefitsController'
            }
          },
          data: {
            propertyName: 'data.financialProblems',
            constantName: 'yesNoAnswer',
            nextState: [
              {
                constantValue: 'YES',
                stateName: 'employment.self-employed-receiving-benefits.finances.expenses.household'
              },
              {
                constantValue: "NO",
                stateName: 'confirm-plea'
              }
            ]
          }
        })

        .state('employment.self-employed-receiving-benefits.finances.expenses', {
          abstract: true,
          url: '/expenses',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('employment.self-employed-receiving-benefits.finances.expenses.household', {
          url: '/household',
          views: {
            '@': {
              templateUrl : 'household-expenses.html',
              controller  : 'HouseholdExpensesController'
            }
          },
          data: {
            nextState: '^.other'
          }
        })

        .state('employment.self-employed-receiving-benefits.finances.expenses.other', {
          url: '/other',
          views: {
            '@': {
              templateUrl : 'other-expenses.html',
              controller  : 'OtherExpensesController'
            }
          },
          data: {
            nextState: 'confirm-plea'
          }
        })
    });  
})();