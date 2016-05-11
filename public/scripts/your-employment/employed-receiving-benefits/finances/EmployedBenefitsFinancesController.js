(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmployedBenefitsFinancesController', EmployedBenefitsFinancesController);
    
  EmployedBenefitsFinancesController.$inject = ['$scope', '$state', '$sessionStorage', 'backLink'];  
    
  function EmployedBenefitsFinancesController($scope, $state, $sessionStorage, backLink) {
    
    $scope.backLink = backLink.back;

    $scope.buttonContinue = function(event) { 
      event.preventDefault();      
      $sessionStorage.financialProblems = $scope.data.financialProblems;
      
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    };

  }  
  
})();