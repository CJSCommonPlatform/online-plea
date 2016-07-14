(function() {

  'use strict';

  angular.module('pleaApp')

    .config(function($stateProvider) {

      $stateProvider
        .state('error-404', {
          url: '/error404',
          templateUrl: 'app/states/errors/404.tpl.html'
        })

        .state('error-500', {
          url: '/error500',
          templateUrl: 'app/states/errors/500.tpl.html'
        });

    });

})();
