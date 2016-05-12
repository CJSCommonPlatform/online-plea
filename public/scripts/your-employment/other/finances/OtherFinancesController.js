(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherFinancesController', OtherFinancesController);
    
  OtherFinancesController.$inject = ['$scope', '$state', '$stateParams', 'yesNoAnswer', '$controller', 'PleaData'];  
    
  function OtherFinancesController($scope, $state, $stateParams, yesNoAnswer, $controller, PleaData) {
    
    angular.extend(this, $controller('FlowController', {$scope: $scope}));
    
    $scope.yesNoAnswer = yesNoAnswer;
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();

      PleaData.data.pensionCredit = $scope.data.pensionCredit;
      PleaData.data.financialProblems = $scope.data.financialProblems;
      
      var nextState = $scope.getNextState($state);
      $state.go(nextState);
      
    };

  }  
  
})();