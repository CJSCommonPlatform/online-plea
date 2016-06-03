(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-pension-credit', {
          url: '/your-pension-credit',
          views: {
            '@' : {
              templateUrl : 'app/your-pension-credit/your-pension-credit.html',
              controller  : 'YourPensionCreditController',
              controllerAs: 'pensionCredit'
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