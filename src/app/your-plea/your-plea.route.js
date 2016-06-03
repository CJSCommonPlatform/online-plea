(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-plea', {
          url: '/your-plea',
          templateUrl : 'app/your-plea/your-plea.html',
          controller: 'YourPleaController',
          controllerAs: "yourPlea",
          params: {
            nextState: undefined
          },
          data: {
            propertyName: 'plea',
            constantName: 'pleas',
            nextState: [
              {
                constantValue: 'GUILTY',
                stateName: 'your-employment'
              },
              {
                constantValue: "NOT_GUILTY",
                stateName: 'confirm-your-answers'
              }
            ]
          }
        })
    });
})();
