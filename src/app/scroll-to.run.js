(function() {
  'use strict';

  angular
    .module('pleaApp')
    .run(function($rootScope, $window) {
      
      var deregisterationCallback = $rootScope.$on('$stateChangeSuccess', function() {
        $window.scrollTo(0, 0);
      });
			$rootScope.$on('$destroy', deregistrationCallback);
 
    });

})();