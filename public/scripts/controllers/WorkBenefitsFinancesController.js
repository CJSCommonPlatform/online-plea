(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('WorkBenefitsFinancesController', WorkBenefitsFinancesController);
    
  WorkBenefitsFinancesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function WorkBenefitsFinancesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
    };

  }  
  
})();