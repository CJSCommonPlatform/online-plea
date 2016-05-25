(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-benefits', {
          url: '/your-benefits',
          templateUrl : 'app/your-benefits/your-benefits.html',
          controller: 'YourBenefitsController',
          controllerAs: 'yourBenefits',
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