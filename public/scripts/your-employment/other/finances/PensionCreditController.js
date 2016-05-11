(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('PensionCreditController', PensionCreditController);
    
  PensionCreditController.$inject = ['$scope', '$state', '$stateParams', 'yesNoAnswer'];  
    
  function PensionCreditController($scope, $state, $stateParams, yesNoAnswer, $controller) {

    $scope.yesNoAnswer = yesNoAnswer;
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
      
    };

  }  
  
})();