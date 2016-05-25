(function() {
  'use strict';

  angular
    .module('pleaApp')
    .run(function($rootScope, $sessionStorage) {
      /* eslint-disable */
      $sessionStorage.$reset();
      console.log('session storage was reset');
      
      $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
        to.previous = from;
        console.log(JSON.stringify($sessionStorage, null, 4));
      });
      /* eslint-enable */
    });

})();