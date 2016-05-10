(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
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
            '@' : { // here we are using absolute name targeting
              templateUrl: 'employed-finances.html',
              controller: 'EmployedFinancesController' 
            }
          },
          params: {
            goToStates3: [
              {
                vmPropertyName: 'data.financialProblems',
                vmPropertyValue: {
                  constantName: 'yesNoAnswer',
                  constantValue: 'YES'
                },
                stateName: 'employment.employed.finances.expenses.household'
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

        .state('employment.employed.finances.expenses', {
          abstract: true,
          url: '/expenses',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('employment.employed.finances.expenses.household', {
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

        .state('employment.employed.finances.expenses.other', {
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