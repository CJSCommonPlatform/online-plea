(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-employment.employed', {
          abstract: true,
          url: '/employed',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('your-employment.employed.finances', {
          url: '/finances',
          views : {
            '@' : { // here we are using absolute name targeting
              templateUrl: 'app/your-employment/employed/finances/employed-finances.html',
              controller: 'YourEmploymentFinancesController',
              controllerAs: 'employedFinances'
            }
          },
          params: {
            nextState: undefined
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
                stateName: 'confirm-your-answers'
              }
            ]
          }
        })
    });
})();
