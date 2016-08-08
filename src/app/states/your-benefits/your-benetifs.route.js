(function() {

  'use strict';

  angular.module('pleaApp')
    /* @ngInject */
    .config(function($stateProvider) {

      $stateProvider
        .state('your-benefits', {
          url: '/your-benefits',
          templateUrl : 'app/states/your-benefits/your-benefits.html',
          controller: 'YourBenefitsController',
          controllerAs: 'vm',
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
