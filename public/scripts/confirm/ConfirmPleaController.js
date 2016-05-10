(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ConfirmPleaController', ConfirmPleaController);
    
  ConfirmPleaController.$inject = ['$scope', '$state'];  
    
  function ConfirmPleaController($scope, $state) {
    
    $scope.buttonContinue = function(event) { 
       
      event.preventDefault();
      
      $state.go('confirmation');
      
    };

  }  
  
})();