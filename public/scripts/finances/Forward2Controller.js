(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('Forward2Controller', Forward2Controller);
    
  function Forward2Controller($scope, $state, $stateParams, employmentStatus) {
    //var vm = this;
    
    $scope.buttonContinue = buttonContinue;

    $scope.employmentStatus = employmentStatus;
    
    function buttonContinue(event) {
      event.preventDefault();

      var goToStates = $stateParams.goToStates;

      for (var i = 0; i < goToStates.length; i++) {
        var goToState = goToStates[i];
        var propertyValue = _.get($scope, goToState.vmPropertyName);
        var constant = _.get($scope, goToState.vmPropertyValue.constantName);
        var constantValue = _.get(constant, goToState.vmPropertyValue.constantValue);

        if (propertyValue === constantValue) {
          $state.go(goToState.stateName);
          break;
        }
      }
    };
  }
  
})();