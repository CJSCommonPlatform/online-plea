(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmployedBenefitsFinancesController', EmployedBenefitsFinancesController);
    
  EmployedBenefitsFinancesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function EmployedBenefitsFinancesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
    };

  }  
  
})();