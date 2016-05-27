(function() {

  'use strict';

  angular.module('pleaApp')
    .config(function($stateProvider) {

      $stateProvider
        .state('declaration', {
          url: '/declaration',
          templateUrl : 'app/declaration/declaration.html',
          controller: 'declarationController',
          controllerAs: 'declaration',
          data: {
            nextState: ''
          }
        })
    });
})();