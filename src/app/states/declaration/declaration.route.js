(function() {

  'use strict';

  angular.module('pleaApp')
    /* @ngInject */
    .config(function($stateProvider) {

      $stateProvider

        .state('declaration', {
          url: '/declaration',
          templateUrl: 'app/states/declaration/declaration.html',
          controller: 'DeclarationController',
          controllerAs: 'declaration',
          data: {
            nextState: 'your-plea-has-been-submitted'
          }
        })

    });

})();
