(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OutOfWorkBenefitsFinancesController', OutOfWorkBenefitsFinancesController);
    
  OutOfWorkBenefitsFinancesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function OutOfWorkBenefitsFinancesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
    };

  }  
  
})();