(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-details', {
          url: '/your-details',
          templateUrl : 'app/your-details/your-details.html',
          controller: 'YourDetailsController',
          controllerAs: 'yourDetails',
          data: {
            nextState: 'your-plea'
          }
        })
    });
})();