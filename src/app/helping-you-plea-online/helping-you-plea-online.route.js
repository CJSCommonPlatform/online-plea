(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('helping-you-plea-online', {
          url: '/helping-you-plea-online',
          templateUrl : 'app/helping-you-plea-online/helping-you-plea-online.html',
          controller  : 'HelpingYouPleaOnlineController',
          controllerAs: 'pleaHelp',
          data: {
            nextState: 'index'
          }
        })
    });  
})();