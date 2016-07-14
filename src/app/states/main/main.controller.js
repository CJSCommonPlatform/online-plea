(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('MainController', MainController);
    
  MainController.$inject = ['state'];
    
  function MainController(state) {
    var vm = this;
    
    vm.buttonContinue = continueButtonClicked;

    function continueButtonClicked() {
      state.goNext(vm);
    }
  }
})();