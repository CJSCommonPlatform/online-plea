(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('employment', {
          url: '/employment',
          templateUrl : 'your-employment.html',
          controller: 'EmploymentController',
          data: {
            propertyName: 'data.employment',
            constantName: 'employmentStatus',
            nextState: [
              {
                constantValue: 'EMPLOYED',
                stateName: 'employment.employed.finances'
              },
              {
                constantValue: "EMPLOYED_BENEFITS",
                stateName: 'employment.employed-receiving-benefits.finances'
              },
              {
                constantValue: "SELF_EMPLOYED",
                stateName: 'employment.self-employed.finances'
              },
              {
                constantValue: "SELF_EMPLOYED_BENEFITS",
                stateName: 'employment.self-employed-receiving-benefits.finances'
              },
              {
                constantValue: "OUT_OF_WORK_BENEFITS",
                stateName: 'employment.out-of-work-benefits.finances'
              },
              {
                constantValue: "OTHER",
                stateName: 'employment.other.finances'
              }

            ]
          }
        })
    });  
})();