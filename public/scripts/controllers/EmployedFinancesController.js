(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('EmployedFinancesController', EmployedFinancesController);
    
  EmployedFinancesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function EmployedFinancesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
    };

  }  
  
})();