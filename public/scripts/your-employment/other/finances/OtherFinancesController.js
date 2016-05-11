(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherFinancesController', OtherFinancesController);
    
  OtherFinancesController.$inject = ['$scope', '$state', '$stateParams', 'yesNoAnswer', '$controller', 'backLink'];  
    
  function OtherFinancesController($scope, $state, $stateParams, yesNoAnswer, $controller, backLink) {
    
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