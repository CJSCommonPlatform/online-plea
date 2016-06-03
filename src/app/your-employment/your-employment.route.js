(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-employment', {
          url: '/your-employment',
          templateUrl : 'app/your-employment/your-employment.html',
          controller: 'EmploymentController',
          controllerAs: 'yourEmployment',
          params: {
            nextState: undefined
          },
          data: {
            propertyName: 'employment',
            constantName: 'employmentStatus',
            nextState: [
              {
                constantValue: 'EMPLOYED',
                stateName: 'your-employment.employed.finances'
              },
              {
                constantValue: "EMPLOYED_BENEFITS",
                stateName: 'your-employment.employed-receiving-benefits.finances'
              },
              {
                constantValue: "SELF_EMPLOYED",
                stateName: 'your-employment.self-employed.finances'
              },
              {
                constantValue: "SELF_EMPLOYED_BENEFITS",
                stateName: 'your-employment.self-employed-receiving-benefits.finances'
              },
              {
                constantValue: "OUT_OF_WORK_BENEFITS",
                stateName: 'your-benefits'
              },
              {
                constantValue: "OTHER",
                stateName: 'your-employment.other.finances'
              }
            ]
          }
        })
    });
})();
