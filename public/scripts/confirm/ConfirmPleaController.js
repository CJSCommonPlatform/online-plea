(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ConfirmPleaController', ConfirmPleaController);
    
  ConfirmPleaController.$inject = ['$scope', '$state', '$sessionStorage'];  
    
  function ConfirmPleaController($scope, $state, $sessionStorage) {
    
    $scope.data = $sessionStorage.data;
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      $state.go('confirmation');
      
    };

  }  
  
})();