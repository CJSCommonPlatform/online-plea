(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('BenefitsController', BenefitsController);
    
  BenefitsController.$inject = ['$scope', '$state', '$sessionStorage', 'yesNoAnswer', '$controller', 'backLink'];  
    
  function BenefitsController($scope, $state, $sessionStorage, yesNoAnswer, $controller, backLink) {
    
    angular.extend(this, $controller('FlowController', {$scope: $scope}));

    $scope.backLink = backLink.back;

    $scope.yesNoAnswer = yesNoAnswer;

    $scope.buttonContinue = function(event) { 
      event.preventDefault();
      $scope.financialProblems = $sessionStorage.financialProblems;

      var nextState = $scope.getNextState($state);
      $state.go(nextState);
    };
  }
})();