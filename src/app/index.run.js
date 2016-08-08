(function() {
  'use strict';
/* eslint-disable */
  angular
    .module('pleaApp')
    /* @ngInject */
    .run(function($rootScope, $sessionStorage, $window) {
      $sessionStorage.$reset();
      console.log('session storage was reset');

      $rootScope.$on('$locationChangeSuccess', function(event, to, toParams, from, fromParams) {
        $window.scrollTo(0, 0);
        //to.previous = from;
        console.log(JSON.stringify($sessionStorage, null, 4));
      });

    });
/* eslint-enable */
})();
