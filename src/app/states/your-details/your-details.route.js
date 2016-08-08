(function() {

  'use strict';

  angular.module('pleaApp')
    /* @ngInject */
    .config(function($stateProvider) {

      $stateProvider
        .state('your-details', {
          url: '/your-details',
          templateUrl : 'app/states/your-details/your-details.html',
          controller: 'YourDetailsController',
          controllerAs: 'vm',
          params: {
            nextState: undefined
          },
          data: {
            nextState: 'your-plea'
          }
        })
    });
})();
