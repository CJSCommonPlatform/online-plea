(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('BenefitsController', BenefitsController);
    
  BenefitsController.$inject = ['$scope', '$state', '$sessionStorage', 'yesNoAnswer', '$controller'];  
    
  function BenefitsController($scope, $state, $sessionStorage, yesNoAnswer, $controller) {
    
    angular.extend(this, $controller('FlowController', {$scope: $scope}));

    $scope.yesNoAnswer = yesNoAnswer;

    $scope.buttonContinue = function(event) { 
      event.preventDefault();
      $scope.financialProblems = $sessionStorage.financialProblems;

      var nextState = $scope.getNextState($state);
      $state.go(nextState);
    };
  }
})();