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
            nextState: 'declaration'
          }
        })
        
        .state('declaration', {
          url: '/declaration',
          templateUrl : 'declaration.html',
          controller  : 'DeclarationController',
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