(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('your-details', {
          url: '/your-details',
          templateUrl : 'your-details.html',
          controller: 'YourDetailsController',
          data: {
            nextState: 'your-plea'
          }
        })
    });
})();