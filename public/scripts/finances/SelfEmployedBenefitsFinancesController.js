(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('SelfEmployedBenefitsFinancesController', SelfEmployedBenefitsFinancesController);
    
  SelfEmployedBenefitsFinancesController.$inject = ['$scope', '$state', '$stateParams', '$sessionStorage'];  
    
  function SelfEmployedBenefitsFinancesController($scope, $state, $stateParams, $sessionStorage) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();

      $sessionStorage.financialProblems = $scope.data.financialProblems;
      
      $state.go('employment.self-employed-receiving-benefits.finances.benefits');
    };

  }  
  
})();