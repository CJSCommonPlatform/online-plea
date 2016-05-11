(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OutOfWorkBenefitsFinancesController', OutOfWorkBenefitsFinancesController);
    
  OutOfWorkBenefitsFinancesController.$inject = ['$scope', '$state', '$sessionStorage', 'backLink'];  
    
  function OutOfWorkBenefitsFinancesController($scope, $state, $sessionStorage, backLink) {

    $scope.backLink = backLink.back;

    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      $sessionStorage.financialProblems = $scope.data.financialProblems;
      
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    };

  }  
  
})();