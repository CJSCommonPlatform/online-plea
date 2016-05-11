(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherExpensesController', OtherExpensesController);
    
  OtherExpensesController.$inject = ['$scope', '$state', 'backLink'];  
    
  function OtherExpensesController($scope, $state, backLink) {
    
    $scope.backLink = backLink.back;

    $scope.buttonContinue = function(event) {        
      event.preventDefault();
      
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    };

  }  
  
})();