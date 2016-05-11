(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmployedFinancesController', EmployedFinancesController);
    
  EmployedFinancesController.$inject = ['$scope', '$state', '$stateParams', 'yesNoAnswer', '$controller'];  
    
  function EmployedFinancesController($scope, $state, $stateParams, yesNoAnswer, $controller) {    
    angular.extend(this, $controller('FlowController', {$scope: $scope}));
    
    $scope.yesNoAnswer = yesNoAnswer;

    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      if ($scope.data === undefined) {
        return;
      }
      
      var nextState = $scope.getNextState($state);
      $state.go(nextState);
    };
  }
})();