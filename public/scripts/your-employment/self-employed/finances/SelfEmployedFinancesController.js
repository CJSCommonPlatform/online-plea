(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('SelfEmployedFinancesController', SelfEmployedFinancesController);
    
  SelfEmployedFinancesController.$inject = ['$scope', '$state', '$stateParams', 'yesNoAnswer', '$controller'];  
    
  function SelfEmployedFinancesController($scope, $state, $stateParams, yesNoAnswer, $controller) {
    
    angular.extend(this, $controller('FlowController', {$scope: $scope}));

    $scope.yesNoAnswer = yesNoAnswer;

    $scope.buttonContinue = function(event) {  
      event.preventDefault();

      var nextState = $scope.getNextState($state);
      $state.go(nextState);
    };

  }  
  
})();