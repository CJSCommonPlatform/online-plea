(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-case', {
          url: '/your-case',
          templateUrl: 'app/your-case/your-case.html',
          controller: 'YourCaseController',
          controllerAs: 'yourCase',
          data: {
            nextState: 'your-details'
          }
        })
    });
})();