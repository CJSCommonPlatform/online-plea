(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('FlowController', FlowController);
    
  function FlowController($scope, $state) {
    //var vm = this;

    $scope.getNextState = getNextState;

    function getNextState($state) {
      var propertyValue = _.get($scope, $state.current.data.propertyName);
      var constant = _.get($scope, $state.current.data.constantName);

      for (var i = 0; i < $state.current.data.nextState.length; i++) {
        var candidate = $state.current.data.nextState[i];
        var constantValue = _.get(constant, candidate.constantValue);
        
        if (propertyValue === constantValue) {
          return candidate.stateName;
        }
      }
    }
  }  
  
})();