(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('PleaConfirmationController', PleaConfirmationController);
    
  PleaConfirmationController.$inject = ['$state', '$sessionStorage'];  
    
  function PleaConfirmationController($state, $sessionStorage) {
    var vm = this;
    
    vm.pleaApp = $sessionStorage.pleaApp;
    vm.buttonContinue = continueButtonClicked;

    function continueButtonClicked() {
      event.preventDefault();
      var nextState = $state.current.data.nextState;
      $state.go(nextState);
    }
  }

})();