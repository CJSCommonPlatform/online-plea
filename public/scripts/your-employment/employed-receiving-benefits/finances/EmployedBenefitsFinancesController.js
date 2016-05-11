(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmployedBenefitsFinancesController', EmployedBenefitsFinancesController);
    
  EmployedBenefitsFinancesController.$inject = ['$scope', '$state', '$sessionStorage'];  
    
  function EmployedBenefitsFinancesController($scope, $state, $sessionStorage) {
    
    $scope.buttonContinue = function(event) { 
      event.preventDefault();      
      $sessionStorage.financialProblems = $scope.data.financialProblems;
      
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    };

  }  
  
})();