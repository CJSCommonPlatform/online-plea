(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('DeclarationController', DeclarationController);
    
  DeclarationController.$inject = ['$scope', '$state', '$sessionStorage', 'backLink'];  
    
  function DeclarationController($scope, $state, $sessionStorage, backLink) {
    
    $scope.data = $sessionStorage.data;
    
    $scope.backLink = backLink.back;

    $scope.buttonContinue = function(event) { 
      event.preventDefault();
      
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    };
  }  
})();