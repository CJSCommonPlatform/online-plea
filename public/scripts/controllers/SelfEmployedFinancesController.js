(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('SelfEmployedFinancesController', SelfEmployedFinancesController);
    
  SelfEmployedFinancesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function SelfEmployedFinancesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();

    };

  }  
  
})();