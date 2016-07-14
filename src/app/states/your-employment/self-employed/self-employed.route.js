(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-employment.self-employed', {
          abstract: true,
          url: '/self-employed',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('your-employment.self-employed.finances', {
          url: '/finances',
          views: {
            '@': {
              templateUrl : 'app/states/your-employment/self-employed/finances/self-employed.html',
              controller  : 'YourEmploymentFinancesController',
              controllerAs: 'vm'
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
