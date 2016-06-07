(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourPensionCreditController', YourPensionCreditController);

  YourPensionCreditController.$inject = ['yesNoAnswer', 'yourPensionCredit', 'state', '$stateParams'];

  function YourPensionCreditController(yesNoAnswer, yourPensionCredit, state, $stateParams) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = continueButtonClicked;
    vm.nextState = $stateParams.nextState;

    yourPensionCredit.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      yourPensionCredit.updateSessionStorage(vm);
      state.go(getNextState(vm));
    }

    function getNextState(vm) {
      return angular.isDefined($stateParams.nextState) ? $stateParams.nextState : state.getNext(vm);
    }

  }

})();
