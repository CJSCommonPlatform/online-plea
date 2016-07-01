(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('main', {
          url: '/main',
          component : 'mainComponent'
        })
    });
})();