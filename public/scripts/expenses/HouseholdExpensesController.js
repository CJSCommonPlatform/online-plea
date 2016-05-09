(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('HouseholdExpensesController', HouseholdExpensesController);
    
  HouseholdExpensesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function HouseholdExpensesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      var forwardTo = $state.current.name.replace("household", "other");
      
      $state.go(forwardTo);
    };

  }  
  
})();