(function() {
  
  'use strict';  
    
  angular.module('pleaApp')
    .controller('ConfirmYourAnswersController', ConfirmYourAnswersController);
    
  ConfirmYourAnswersController.$inject = ['confirmYourAnswers', 'state'];
    
  function ConfirmYourAnswersController(confirmYourAnswers, state) {
    var vm = this;

    vm.buttonContinue = continueButtonClicked;
    
    confirmYourAnswers.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      state.goNext();
    }
  }
})();