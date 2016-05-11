(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('confirm-plea', {
          url: '/confirm-plea',
          templateUrl : 'confirm-plea.html',
          controller  : 'ConfirmPleaController',
          data: {
            nextState: 'plea-sent'
          }
        })
        
        .state('plea-sent', {
          url: '/plea-sent',
          templateUrl : 'confirmation.html',
          controller  : 'PleaSentController',
          data: {
            nextState: 'index'
          }
        })
    });  
})();