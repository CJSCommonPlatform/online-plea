(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('BenefitsController', BenefitsController);
    
  BenefitsController.$inject = ['$scope', '$state', '$stateParams', '$sessionStorage'];  
    
  function BenefitsController($scope, $state, $stateParams, $sessionStorage) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      var financialProblems = $sessionStorage.financialProblems;
      
      switch (financialProblems) {
          
          case 'Yes':
            $state.go('employment-employed-receiving-benefits-finances-expenses-household');
            break;
            
          case 'No':
            $state.go('confirm-plea');
            break;
        
        }
      
    };

  }  
  
})();