(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmployedFinancesController', EmployedFinancesController);
    
  EmployedFinancesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function EmployedFinancesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      if ($scope.data === undefined) {
        return;
      }
      
      switch ($scope.data.financialProblems) {
          
          case 'Yes':
            $state.go('employment-employed-finances-expenses-household');
            break;
            
          case 'No':
            $state.go('confirm-plea');
            break;
        
        }
      
    };

  }  
  
})();