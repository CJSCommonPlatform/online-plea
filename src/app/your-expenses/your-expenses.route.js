(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider

        .state('your-expenses', {
          abstract: true,
          url: '/your-expenses',
          // Note: abstract still needs a ui-view for its children to populate.
          // You can simply add it inline here.
          template: '<ui-view/>'
        })

        .state('your-expenses.household', {
          url: '/household',
          templateUrl : 'app/your-expenses/household-expenses.html',
          controller: 'HouseholdExpensesController',
          controllerAs: 'vm',
          params: {
            nextState: undefined
          },
          data: {
            nextState: '^.other'
          }
        })

        .state('your-expenses.other', {
          url: '/other',
          views: {
            '@' : {
              templateUrl : 'app/your-expenses/other-expenses.html',
              controller  : 'OtherExpensesController',
              controllerAs: 'vm'
            }
          },
          params: {
            nextState: undefined
          },
          data: {
            nextState: 'confirm-your-answers'
          }       
        })
    });
})();