(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('plea-help', {
          url: '/helping-you-plea-online',
          templateUrl : 'help-making-a-plea-online.html',
          controller  : 'PleaHelpController'
        })
    });  
})();