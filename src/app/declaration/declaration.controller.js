(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('DeclarationController', DeclarationController);
    
  DeclarationController.$inject = ['$state', '$sessionStorage'];  
    
  function DeclarationController($state, $sessionStorage) {
    var vm = this;
    
    vm.pleaApp = $sessionStorage.pleaApp;
    vm.buttonContinue = continueButtonClicked;

    function continueButtonClicked(event) {
      event.preventDefault();
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    }
  }

})();