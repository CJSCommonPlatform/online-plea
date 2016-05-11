(function() {
    'use strict';

    angular
      .module('pleaApp')
      .factory('backLink', backLink);

    backLink.$inject = ['$rootScope', '$state'];

    function backLink($rootScope, $state) {
    	var history = [];
      
      return {
        registerOnStateChangeSuccess: registerOnStateChangeSuccess,
        back: back	
      };

      function registerOnStateChangeSuccess() {
        $rootScope.$on('$stateChangeSuccess', updateHistory);
      }

      function updateHistory() {
        if (history[history.length - 1] !== $state.current.name) {
          history.push($state.current.name);
        }
      };

      function back() {
        var previousState = history.length > 1 ? history.splice(-2)[0] : "index";
        return $state.go(previousState);
      };
    }
})();