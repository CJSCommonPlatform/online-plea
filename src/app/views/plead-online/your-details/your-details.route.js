(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-details', {
          url: '/your-details',
          component : 'yourDetailsComponent'
        })
    });
})();