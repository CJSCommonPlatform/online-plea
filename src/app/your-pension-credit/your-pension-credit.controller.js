(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourPensionCreditController', YourPensionCreditController);

  YourPensionCreditController.$inject = ['yesNoAnswer', 'yourPensionCredit', 'state', '$stateParams', 'formValidation', 'decimalLimit'];

  function YourPensionCreditController(yesNoAnswer, yourPensionCredit, state, $stateParams, formValidation, decimalLimit) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = buttonContinueClicked;
    vm.nextState = $stateParams.nextState;
    vm.decimalLimit = decimalLimit;

    yourPensionCredit.updateVm(vm);

    function buttonContinueClicked(event) {
      event.preventDefault();
      formValidation.validate(vm.form);

      if (!vm.form.invalid) {
        yourPensionCredit.updateSessionStorage(vm);
        state.go(getNextState(vm));
      }
    }


    function getNextState(vm) {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }

  }

})();
