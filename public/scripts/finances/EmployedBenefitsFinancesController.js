(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmployedBenefitsFinancesController', EmployedBenefitsFinancesController);
    
  EmployedBenefitsFinancesController.$inject = ['$scope', '$state', '$stateParams', '$sessionStorage'];  
    
  function EmployedBenefitsFinancesController($scope, $state, $stateParams, $sessionStorage) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      $sessionStorage.financialProblems = $scope.data.financialProblems;
      
      $state.go('employment-employed-receiving-benefits-finances-benefits');
    };

  }  
  
})();