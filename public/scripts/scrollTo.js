(function() {
    'use strict';

    angular
        .module('pleaApp')
        .run(scrollTo);

    scrollTo.$inject = ['$rootScope'];

    function scrollTo($rootScope) {

      $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
      
    }

})();