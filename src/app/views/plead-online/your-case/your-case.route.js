(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('your-case', {
          url: '/your-case',
          component : 'yourCaseComponent'
        })
    });
})();