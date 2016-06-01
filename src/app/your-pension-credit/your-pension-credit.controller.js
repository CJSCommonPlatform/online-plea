(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourPensionCreditController', YourPensionCreditController);

  YourPensionCreditController.$inject = ['yesNoAnswer', 'yourPensionCredit', 'state'];

  function YourPensionCreditController(yesNoAnswer, yourPensionCredit, state) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = continueButtonClicked;

    yourPensionCredit.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      yourPensionCredit.updateSessionStorage(vm);
      state.goNext(vm);
    }

  }

})();
