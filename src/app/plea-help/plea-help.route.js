(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('plea-help', {
          url: '/helping-you-plea-online',
          templateUrl : 'app/plea-help/help-making-a-plea-online.html',
          controller  : 'PleaHelpController',
          controllerAs: 'pleaHelp'
        })
    });  
})();