(function() {

  'use strict';

  angular.module('pleaApp')
    .controller('YourEmploymentFinancesController', YourEmploymentFinancesController);

  YourEmploymentFinancesController.$inject = ['yesNoAnswer', 'yourEmploymentFinances', 'state', '$stateParams'];

  function YourEmploymentFinancesController(yesNoAnswer, yourEmploymentFinances, state, $stateParams) {
    var vm = this;

    vm.yesNoAnswer = yesNoAnswer;
    vm.buttonContinue = continueButtonClicked;
    vm.nextState = $stateParams.nextState;

    yourEmploymentFinances.updateVm(vm);

    function continueButtonClicked(event) {
      event.preventDefault();
      yourEmploymentFinances.updateSessionStorage(vm);
      state.goNext(vm);
    }
  }
})();