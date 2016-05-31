(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('FlowController', FlowController);

  function FlowController() {
    var vm = this;

    vm.getNextState = getNextState;

    function getNextState(self, $state) {
      var propertyValue = lodash.get(self, $state.current.data.propertyName);
      var constant = lodash.get(self, $state.current.data.constantName);

      for (var i = 0; i < $state.current.data.nextState.length; i++) {
        var candidate = $state.current.data.nextState[i];
        var constantValue = lodash.get(constant, candidate.constantValue);
        
        if (propertyValue === constantValue) {
          return candidate.stateName;
        }
      }
    }
  }  
  
})();