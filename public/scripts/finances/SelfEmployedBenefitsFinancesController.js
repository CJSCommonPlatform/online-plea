(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('SelfEmployedBenefitsFinancesController', SelfEmployedBenefitsFinancesController);
    
  SelfEmployedBenefitsFinancesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function SelfEmployedBenefitsFinancesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
    };

  }  
  
})();