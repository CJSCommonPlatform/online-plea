(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('help', {
          url: '/helping-you-plea-online',
          templateUrl : 'app/help/help-making-a-plea-online.html',
          controller  : 'HelpController',
          controllerAs: 'help'
        })
    });  
})();