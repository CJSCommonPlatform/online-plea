(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'home.html',
          controller: 'HomeController',
          data: {
            nextState: 'your-case'
          }
        })
    });
})();