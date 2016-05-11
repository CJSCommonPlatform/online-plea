(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OutOfWorkBenefitsFinancesController', OutOfWorkBenefitsFinancesController);
    
  OutOfWorkBenefitsFinancesController.$inject = ['$scope', '$state'];  
    
  function OutOfWorkBenefitsFinancesController($scope, $state) {

    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    };

  }  
  
})();