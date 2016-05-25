(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('pension-credit', {
          url: '/pension-credit',
          views: {
            '@' : {
              templateUrl : 'app/pension-credit/pension-credit.html',
              controller  : 'PensionCreditController',
              controllerAs: 'pensionCredit'
            }
          },
          data: {
            nextState: 'your-employment.other.finances.expenses'
          }
        })
    });
})();
