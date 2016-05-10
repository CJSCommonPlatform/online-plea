(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('SelfEmployedBenefitsFinancesController', SelfEmployedBenefitsFinancesController);
    
  SelfEmployedBenefitsFinancesController.$inject = ['$scope', '$state', 'transitionTo', '$sessionStorage'];  
    
  function SelfEmployedBenefitsFinancesController($scope, $state, transitionTo, $sessionStorage) {
    
    $scope.buttonContinue = function(event) { 
      event.preventDefault();
      $sessionStorage.financialProblems = $scope.data.financialProblems;
      $state.go(transitionTo);
    };
  }  
})();