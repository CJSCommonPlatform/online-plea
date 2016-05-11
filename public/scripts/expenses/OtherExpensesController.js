(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherExpensesController', OtherExpensesController);
    
  OtherExpensesController.$inject = ['$scope', '$state'];  
    
  function OtherExpensesController($scope, $state) {
    
    $scope.buttonContinue = function(event) {        
      event.preventDefault();
      
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    };

  }  
  
})();