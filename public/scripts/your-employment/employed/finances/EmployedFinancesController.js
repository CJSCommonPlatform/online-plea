(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmployedFinancesController', EmployedFinancesController);
    
  EmployedFinancesController.$inject = ['$scope', '$state', '$stateParams', 'yesNoAnswer', '$controller', 'backLink'];  
    
  function EmployedFinancesController($scope, $state, $stateParams, yesNoAnswer, $controller, backLink) {    
    angular.extend(this, $controller('FlowController', {$scope: $scope}));
    
    $scope.yesNoAnswer = yesNoAnswer;

    $scope.backLink = backLink.back;

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