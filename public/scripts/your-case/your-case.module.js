(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('your-case', {
          url: '/your-case',
          templateUrl: 'your-case.html',
          controller: 'YourCaseController',
          controllerAs: 'yourCase',
          data: {
            nextState: 'your-details'
          }
        })
    });
})();