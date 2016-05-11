(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('your-plea', {
          url: '/your-plea',
          templateUrl : 'your-plea.html',
          controller: 'YourPleaController',
          data: {
            nextState: 'employment'
          }
        })
    });
})();