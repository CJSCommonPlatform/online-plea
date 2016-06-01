(function() {
  'use strict';

  angular
    .module('pleaApp')
    .run(function($rootScope, $window) {
      
      $rootScope.$on('$stateChangeSuccess', function() {
        $window.scrollTo(0, 0);
      });

    });

})();