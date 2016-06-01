(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
  
    .config(function($stateProvider) {

      $stateProvider
      
      .state('confirm-plea', {
        url: '/confirm-plea',
        templateUrl: 'app/confirm-plea/confirm-plea.html',
        controller: 'ConfirmPleaController',
        controllerAs: 'confirmPlea',
        data: {
          nextState: 'declaration'
        }
        
      })
        
    });  
    
})();