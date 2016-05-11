(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ConfirmPleaController', ConfirmPleaController);
    
  ConfirmPleaController.$inject = ['$scope', '$state', '$sessionStorage', 'backLink'];  
    
  function ConfirmPleaController($scope, $state, $sessionStorage, backLink) {
    
    $scope.data = $sessionStorage.data;
    
    $scope.backLink = backLink.back;

    $scope.buttonContinue = function(event) { 
      event.preventDefault();
      
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    };
  }  
})();