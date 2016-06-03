(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('helping-you-plead-online', {
          url: '/helping-you-plead-online',
          templateUrl : 'app/helping-you-plead-online/helping-you-plead-online.html',
          controller  : 'HelpingYouPleadOnlineController',
          controllerAs: 'pleaHelp',
          data: {
            nextState: 'index'
          }
        })
    });  
})();