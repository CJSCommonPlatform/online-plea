(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('OtherFinancesController', OtherFinancesController);
    
  OtherFinancesController.$inject = ['$scope', '$state', '$stateParams'];  
    
  function OtherFinancesController($scope, $state, $stateParams) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
    };

  }  
  
})();