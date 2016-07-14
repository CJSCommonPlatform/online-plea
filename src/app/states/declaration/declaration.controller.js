(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('DeclarationController', DeclarationController);
    
  DeclarationController.$inject = ['state'];  
    
  function DeclarationController(state) {
    var vm = this;
    
    vm.buttonContinue = continueButtonClicked;

    function continueButtonClicked(event) {
      event.preventDefault();
      state.goNext(vm);
    }
  }

})();