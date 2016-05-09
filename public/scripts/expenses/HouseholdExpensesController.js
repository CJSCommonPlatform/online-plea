(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HouseholdExpensesController', HouseholdExpensesController);
    
  HouseholdExpensesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function HouseholdExpensesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      $state.go('employment-employed-finances-expenses-other');
    };

  }  
  
})();