(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
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
            '@': {
              templateUrl : 'employed-receiving-benefits-finances.html',
              controller  : 'EmployedBenefitsFinancesController'
            }
          },
          params: {
            forwardTo2: 'employment.employed-receiving-benefits.finances.benefits'
          }   
        })

        .state('employment.employed-receiving-benefits.finances.benefits', {
          url: '/benefits',
          views : {
            '@' : {
              templateUrl : 'benefits.html',
              controller  : 'BenefitsController'
            }
          },
          params: {
            goToStates3: [
              {
                vmPropertyName: 'financialProblems',
                vmPropertyValue: {
                  constantName: 'yesNoAnswer',
                  constantValue: 'YES'
                },
                stateName: 'employment.employed-receiving-benefits.finances.expenses.household'
              },
              {
                vmPropertyName: 'financialProblems',
                vmPropertyValue: {
                  constantName: 'yesNoAnswer',
                  constantValue: 'NO'
                },
                stateName: 'confirm-plea'
              }
            ]
          }      
        })

        .state('employment.employed-receiving-benefits.finances.expenses', {
          abstract: true,
          url: '/expenses',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('employment.employed-receiving-benefits.finances.expenses.household', {
          url: '/household',
          views : {
            '@' : {
              templateUrl : 'household-expenses.html',
              controller  : 'HouseholdExpensesController'
            }
          },
          params: {
            forwardTo: '^.other'
          }
        })

        .state('employment.employed-receiving-benefits.finances.expenses.other', {
          url: '/other',
          views: {
            '@': {
              templateUrl : 'other-expenses.html',
              controller  : 'OtherExpensesController'
            }
          },
          params: {
            forwardTo: 'confirm-plea'
          }
        })
    });
})();