(function() {
  'use strict';
/* eslint-disable */
  angular
    .module('pleaApp')
    .run(function($rootScope, $sessionStorage, $window) {

      $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
      });

    });
/* eslint-enable */
})();