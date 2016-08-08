(function() {

  'use strict';

  angular.module('pleaApp')
    /* @ngInject */
    .config(function($stateProvider) {

      $stateProvider
        .state('your-case', {
          url: '/your-case',
          templateUrl: 'app/states/your-case/your-case.html',
          controller: 'YourCaseController',
          controllerAs: 'vm',
          params: {
            nextState: undefined
          },
          data: {
            nextState: 'your-details'
          }
        })
    });
})();
