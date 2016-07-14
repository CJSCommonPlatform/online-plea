(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-pension-credit', {
          url: '/your-pension-credit',
          views: {
            '@' : {
              templateUrl : 'app/states/your-pension-credit/your-pension-credit.html',
              controller  : 'YourPensionCreditController',
              controllerAs: 'vm'
            }
          },
          params: {
            nextState: undefined
          },
          data: {
            nextState: 'your-employment.other.finances.expenses'
          }
        })
    });
})();
