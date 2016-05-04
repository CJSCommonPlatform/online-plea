(function() {
    'use strict';

    angular
        .module('pleaApp')
        .factory('backLink', backLink);

    backLink.$inject = ['$rootScope', '$location'];

    function backLink($rootScope, $location) {
    	var history = ["/"];
        
        $rootScope.$on('$routeChangeSuccess', updateHistory);
        
        return {
          back: back	
        };

        function back() {
          var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
          return $location.path(prevUrl);
        };

        function updateHistory() {
          if (history[history.length - 1] !== $location.$$path) {
            history.push($location.$$path);
          }
          console.log(history);
        };
    }
})();