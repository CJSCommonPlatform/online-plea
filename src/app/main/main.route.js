(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main',
          data: {
            nextState: 'your-case'
          }
        })
    });
})();