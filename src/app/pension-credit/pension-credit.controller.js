(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('PensionCreditController', PensionCreditController);

  PensionCreditController.$inject = ['yesNoAnswer', 'pensionCredit', 'state'];

  function PensionCreditController(yesNoAnswer, pensionCredit, state) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = continueButtonClicked;

    pensionCredit.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      pensionCredit.updateSessionStorage(vm);
      state.goNext(vm);
    }

  }

})();
