(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('employment.self-employed', {
          abstract: true,
          url: '/self-employed',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('employment.self-employed.finances', {
          url: '/finances',
          views: {
            '@': {
              templateUrl : 'self-employed-finances.html',
              controller  : 'SelfEmployedFinancesController'  
            }
          },
          params: {
            goToStates2: [
              {
                vmPropertyName: 'data.financialProblems',
                vmPropertyValue: {
                  constantName: 'yesNoAnswer',
                  constantValue: 'YES'
                },
                stateName: 'employment.self-employed.finances.expenses.household'
              },
              {
                vmPropertyName: 'data.financialProblems',
                vmPropertyValue: {
                  constantName: 'yesNoAnswer',
                  constantValue: 'NO'
                },
                stateName: 'confirm-plea'
              }
            ]
          }
        })

        .state('employment.self-employed.finances.expenses', {
          abstract: true,
          url: '/expenses',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('employment.self-employed.finances.expenses.household', {
          url: '/household',
          views: {
            '@' : {
              templateUrl : 'household-expenses.html',
              controller  : 'HouseholdExpensesController'
            }
          },
          params: {
            forwardTo: '^.other'
          }
        })

        .state('employment.self-employed.finances.expenses.other', {
          url: '/other',
          views: {
            '@' : {
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