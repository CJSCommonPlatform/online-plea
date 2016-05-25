(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-employment.other', {
          abstract: true,
          url: '/other',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('your-employment.other.finances', {
          url: '/finances',
          views : {
            '@' : { // here we are using absolute name targeting
              templateUrl: 'app/your-employment/other/finances/other-finances.html',
              controller: 'YourEmploymentFinancesController',
              controllerAs: 'otherFinances'
            }
          },
          data: {
            propertyName: 'pensionCredit',
            constantName: 'yesNoAnswer',
            nextState: [
              {
                constantValue: 'YES',
                stateName: 'pension-credit'
              },
              {
                constantValue: "NO",
                stateName: 'your-employment.other.finances.expenses'
              }
            ]
          }
        })

        .state('your-employment.other.finances.expenses', {
          views: {
            '@' : {
              controller  : 'ExpensesController'
            }
          },
          data: {
            propertyName: 'financialProblems',
            constantName: 'yesNoAnswer',
            nextState: [
              {
                constantValue: 'YES',
                stateName: 'your-expenses.household'
              },
              {
                constantValue: "NO",
                stateName: 'confirm-plea'
              }
            ]
          }
        })
    });
})();
