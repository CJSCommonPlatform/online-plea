(function() {

  'use strict';

  angular.module('pleaApp')
    /* @ngInject */
    .config(function($stateProvider) {

      $stateProvider
        .state('your-employment', {
          url: '/your-employment',
          templateUrl : 'app/states/your-employment/your-employment.html',
          controller: 'EmploymentController',
          controllerAs: 'vm',
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
                constantValue: 'EMPLOYED_BENEFITS',
                stateName: 'your-employment.employed-and-also-receiving-benefits.finances'
              },
              {
                constantValue: 'SELF_EMPLOYED',
                stateName: 'your-employment.self-employed.finances'
              },
              {
                constantValue: 'SELF_EMPLOYED_BENEFITS',
                stateName: 'your-employment.self-employed-and-also-receiving-benefits.finances'
              },
              {
                constantValue: 'OUT_OF_WORK_BENEFITS',
                stateName: 'your-benefits'
              },
              {
                constantValue: 'OTHER',
                stateName: 'your-employment.other.finances'
              }
            ]
          }
        })

    });

})();
